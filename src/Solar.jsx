import React, { Component, PropTypes } from 'react'
import generateId from './generate-id'
import { getWeeks, navigateMonth, navigateWeek, isSame, isBeforeDay, isAfterDay, isOutsideMonth, formatMonth, formatYear } from './utils'

const contextTypes = {
  id: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weeks: PropTypes.array,
  weekdays: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  rules: PropTypes.object,
  disabledRules: PropTypes.object,
  onDateSelect: PropTypes.func,
  navigateWeek: PropTypes.func,
  navigateMonth: PropTypes.func
}

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class Calendar extends Component {
  static defaultProps = {
    date: new Date(),
    trimWeekdays: 3,
    weekStartsOn: 0,
    forceSixRows: true,
    minDay: null,
    maxDay: null
  }

  static childContextTypes = contextTypes

  state = {
    date: this.props.date
  }
  _id = generateId()

  componentWillReceiveProps(nextProps) {
    if (!isSame(this.props.date, nextProps.date)) {
      this.setState({ date: nextProps.date })
    }
  }

  getChildContext() {
    const { weekStartsOn, forceSixRows, minDay, maxDay, onDateSelect } = this.props
    const { date } = this.state
    return {
      id: this._id,
      date, //: this.props.date,
      weeks: getWeeks(date, weekStartsOn, forceSixRows),
      weekdays: this._getWeekdays(),
      month: formatMonth(date),
      year: formatYear(date),
      rules: this._rules,
      disabledRules: this._disabledRules,
      onDateSelect,
      navigateWeek: this._handleNavigateWeek,
      navigateMonth: this._handleNavigateMonth
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

  _getWeekdays() {
    const { trimWeekdays, weekStartsOn } = this.props
    const weekdays = [...WEEKDAYS]
    const sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn))

    return sortedWeekdays.map((weekday, index) => (
      trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday
    ))
  }

  _handleNavigateWeek = (direction) => {
    this.setState({
      date: navigateWeek(this.state.date, direction)
    })
  }

  _handleNavigateMonth = (direction) => {
    this.setState({
      date: navigateMonth(this.state.date, direction)
    })
  }

  render() {
    return this.props.children
  }
}

export const withCalendar = (ComposedCalendar) => (
  class extends Component {
    render() {
      return (
        <Calendar {...this.props}>
          <ComposedCalendar {...this.props}/>
        </Calendar>
      )
    }
  }
)

export const withCalendarProps = (ComposedCalendar) => (
  class extends Component {
    static contextTypes = contextTypes

    render() {
      return (
        <ComposedCalendar {...this.props} calendar={{...this.context}}/>
      )
    }
  }
)
