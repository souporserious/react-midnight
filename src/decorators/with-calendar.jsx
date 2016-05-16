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
      numberOfMonths: 1,
      trimWeekdays: null,
      weekStartsOn: 0,
      forceSixRows: true,
      minDay: new Date(),
      maxDay: null,
      dayEvents: {},
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
      const { id, minDay, maxDay, dayEvents, renderDay } = this.props
      const { date } = this.state

      return {
        id,
        date,
        months: this._months,
        weekdays: this._weekdays,
        monthLabel: formatMonth(date),
        yearLabel: formatYear(date),
        minDay,
        maxDay,
        rules: this._rules,
        disabledRules: this._disabledRules,
        dayEvents,
        renderDay,
        setDate: this._setDate,
        navigateWeek: this._navigateWeek,
        navigateMonth: this._navigateMonth
      }
    }

    get _months() {
      const { numberOfMonths, weekStartsOn, forceSixRows } = this.props
      const { date } = this.state
      const months = []

      for (let i = 0; i < numberOfMonths; i++) {
        const month = navigateMonth(date, i)
        months.push(getWeeks(month, weekStartsOn, forceSixRows))
      }

      return months
    }

    get _weekdays() {
      const { trimWeekdays, weekStartsOn } = this.props
      const weekdays = [...WEEKDAYS]
      const sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn))

      return sortedWeekdays.map((weekday, index) => (
        trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday
      ))
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
