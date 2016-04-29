import React, { Component, PropTypes } from 'react'
import contextTypes from './context-types'
import generateId from '../generate-id'
import { getWeeks, navigateMonth, navigateWeek, isSame, isBeforeDay, isAfterDay, isOutsideMonth, formatMonth, formatYear } from '../utils'

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function withCalendar(ComposedCalendar, defaultProps = {}) {
  return class extends Component {
    static displayName = 'calendarDecorator'
    static defaultProps = {
      id: generateId(),
      date: new Date(),
      trimWeekdays: null,
      weekStartsOn: 0,
      forceSixRows: true,
      minDay: new Date(),
      maxDay: null,
      onDateSelect: () => null,
      renderDay: date => date.getDate(),
      ...defaultProps
    }

    static childContextTypes = contextTypes

    state = {
      date: this.props.date
    }

    componentWillReceiveProps(nextProps) {
      if (!isSame(this.props.date, nextProps.date)) {
        this._setDate(nextProps.date)
      }
    }

    getChildContext() {
      const { id, weekStartsOn, forceSixRows, minDay, maxDay, onDateSelect, renderDay } = this.props
      const { date } = this.state
      return {
        id,
        date,
        weeks: getWeeks(date, weekStartsOn, forceSixRows),
        weekdays: this._weekdays,
        month: formatMonth(date),
        year: formatYear(date),
        rules: this._rules,
        disabledRules: this._disabledRules,
        onDateSelect,
        renderDay,
        setDate: this._setDate,
        navigateWeek: this._navigateWeek,
        navigateMonth: this._navigateMonth
      }
    }

    get _rules() {
      const { rules } = this.props
      return {
        today: (currDate) => isSame(currDate, new Date()),
        outside: (currDate, month) => isOutsideMonth(currDate, month),
        ...rules
      }
    }

    get _disabledRules() {
      const { minDay, maxDay, disabledRules } = this.props
      return {
        before: (currDate) => minDay && isBeforeDay(currDate, minDay),
        after: (currDate) => maxDay && isAfterDay(currDate, maxDay),
        ...disabledRules
      }
    }

    get _weekdays() {
      const { trimWeekdays, weekStartsOn } = this.props
      const weekdays = [...WEEKDAYS]
      const sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn))

      return sortedWeekdays.map((weekday, index) => (
        trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday
      ))
    }

    _setDate = (date) => {
      this.setState({ date })
    }

    _navigateWeek = (direction) => {
      this._setDate(navigateWeek(this.state.date, direction))
    }

    _navigateMonth = (direction) => {
      this._setDate(navigateMonth(this.state.date, direction))
    }

    render() {
      return <ComposedCalendar {...this.props}/>
    }
  }
}
