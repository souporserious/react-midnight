import React, { Component, createElement } from 'react'
import contextTypes from './context-types'
import { isSame, getModifiers } from '../utils'

export default function withDayProps(DayComponent, className = 'cal__day') {
  return class extends Component {
    static displayName = 'dayPropsDecorator'
    static contextTypes = contextTypes
    static defaultProps = {
      className
    }

    _dayEvents = {}
    _modifiers = getModifiers(this.context.rules, this.props.day, this.context.date)
    _disabledModifiers = getModifiers(this.context.disabledRules, this.props.day, this.context.date)

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const nextModifiers = getModifiers(nextContext.rules, nextProps.day, nextContext.date)
      const nextdisabledModifiers = getModifiers(nextContext.disabledRules, nextProps.day, nextContext.date)

      if (this._modifiers.length !== nextModifiers.length) {
        this._modifiers = nextModifiers
        return true
      }

      if (this._disabledModifiers.length !== nextdisabledModifiers.length) {
        this._disabledModifiers = nextdisabledModifiers
        return true
      }

      return !isSame(this.props.day, nextProps.day)
    }

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
      let className = this.props.className

      // build the final class name string with all respective modifiers
      className += this._modifiers.concat(this._disabledModifiers).map(
        modifier => ` ${className}--${modifier}`
      ).join('')

      return createElement(DayComponent, {
        day: this.props.day,
        calendar: context,
        className,
        isDisabled: !!this._disabledModifiers.length,
        dayEvents: this._dayEvents,
        renderDay
      })
    }
  }
}
