import React, { Component, createElement } from 'react'
import contextTypes from './context-types'
import { getModifiers } from '../utils'

export default function withDayProps(DayComponent, className = 'cal__day') {
  return class extends Component {
    static displayName = 'dayPropsDecorator'
    static contextTypes = contextTypes
    static defaultProps = {
      className
    }

    _dayEvents = {}

    componentWillMount() {
      this._bindDayEvents()
    }

    _bindDayEvents() {
      const { day } = this.props
      const { dayEvents } = this.context
      const bindedDayEvents = {}

      Object.keys(dayEvents).forEach(key => {
        bindedDayEvents[key] = dayEvents[key].bind(null, day)
      })

      this._dayEvents = bindedDayEvents
    }

    render() {
      const { dayEvents, renderDay, ...context } = this.context
      const { rules, disabledRules, date } = context
      const { day } = this.props
      const modifiers = getModifiers(rules, day, date)
      const disabledModifiers = getModifiers(disabledRules, day, date)
      let className = this.props.className

      // build the final class name string with all respective modifiers
      className += modifiers.concat(disabledModifiers).map(
        modifier => ` ${className}--${modifier}`
      ).join('')

      return createElement(DayComponent, {
        day,
        calendar: context,
        className,
        isDisabled: !!disabledModifiers.length,
        dayEvents: this._dayEvents,
        renderDay
      })
    }
  }
}
