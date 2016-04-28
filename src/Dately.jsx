import React, { Component, PropTypes, Children } from 'react'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'
import generateId from './generate-id'
import { getWeeks, navigateMonth, isSame, isBeforeDay, isAfterDay, isOutsideMonth, formatMonth, formatYear } from './utils'

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const ENTER_KEY = 13
const noopNull = () => null

class Day extends Component {
  // Rules are how the particular day should behave,
  // it will add a modifier class to allow styling
  // one day we could provide a hook for inline styles
  rules = {
    today: (date) => isSame(date, new Date()),
    outside: (date, month) => isOutsideMonth(date, month)
  }

  disabledRules = {
    before: (date) => this.props.minDay && isBeforeDay(date, this.props.minDay),
    after: (date) => this.props.maxDay && isAfterDay(date, this.props.maxDay)
  }

  _handleDateSelect(day) {
    this.props.onDateSelect(day)
  }

  _handleKeyDown(day, e) {
    if (e.keyCode === ENTER_KEY) {
      this.props.onDateSelect(day)
    }
  }

  render() {
    const { month, date, minDay, maxDay, outsideDays, onClick, canTouchTap, onMouseDown, onMouseMove, onMouseUp } = this.props
    const rules = {...this.rules, ...this.props.rules}
    const disabledRules = {...this.disabledRules, ...this.props.disabledRules}
    let modifiers = []
    let onDayClick = this._handleDateSelect.bind(this, date)
    let onDayMouseDown = onMouseDown.bind(null, date)
    let onDayMouseMove = onMouseMove.bind(null, date)
    let onDayMouseUp = onMouseUp.bind(null, date)
    let isDisabled = false

    // add respective rules to day
    Object.keys(rules).forEach(key => {
      const result = rules[key](date, month)

      if (result) {
        // camelCase to hyphen friendly class name
        const modifier = key.replace(/[a-z][A-Z]/g, str =>
          `${str[0]}-${str[1].toLowerCase()}`
        )
        modifiers.push(modifier)
      }
    })

    Object.keys(disabledRules).forEach(key => {
      const result = disabledRules[key](date, month)

      if (result) {
        // camelCase to hyphen friendly class name
        const modifier = key.replace(/[a-z][A-Z]/g, str =>
          `${str[0]}-${str[1].toLowerCase()}`
        )
        modifiers.push(modifier)

        // make sure events get disabled as well
        onDayClick =
        onDayMouseDown =
        onDayMouseMove =
        onDayMouseUp = (e) => e.preventDefault()

        isDisabled = true
      }
    })

    const props = {
      role: 'presentation',
      ariaLabel: date,
      modifiers,
      tabIndex: isDisabled ? null : 0,
      onClick: canTouchTap ? null : onDayClick,
      onTouchTap: canTouchTap ? onDayClick : null,
      onKeyDown: this._handleKeyDown.bind(this, date),
      onMouseDown: onDayMouseDown,
      onMouseMove: onDayMouseMove,
      onMouseUp: onDayMouseUp
    }

    return this.props.renderDay(date, props, rules)
  }
}

class Dately extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    minDay: PropTypes.instanceOf(Date),
    maxDay: PropTypes.instanceOf(Date),
    trimWeekdays: PropTypes.number,
    weekStartsOn: PropTypes.number,
    forceSixRows: PropTypes.bool,
    outsideDays: PropTypes.bool,
    prevHTML: PropTypes.node,
    nextHTML: PropTypes.node,
    prevDisabled: PropTypes.bool,
    nextDisabled: PropTypes.bool,
    canTouchTap: PropTypes.bool,
    rules: PropTypes.object,
    disabledRules: PropTypes.object,
    onDateSelect: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseUp: PropTypes.func,
    renderDay: PropTypes.func
  }

  static defaultProps = {
    date: new Date(),
    minDay: null,
    maxDay: null,
    trimWeekdays: null,
    weekStartsOn: 0,
    forceSixRows: true,
    outsideDays: false,
    prevHTML: '',
    nextHTML: '',
    prevDisabled: false,
    nextDisabled: false,
    canTouchTap: false,
    rules: {},
    disabledRules: {},
    //locale: 'en',
    onDateSelect: noopNull,
    onMouseDown: noopNull,
    onMouseMove: noopNull,
    onMouseUp: noopNull,
    renderDay: day => day.getDate()
  }

  state = {
    month: this.props.date
  }
  _id = generateId()

  componentWillReceiveProps(nextProps) {
    if (!isSame(this.props.date, nextProps.date, 'month')) {
      this.setState({month: nextProps.date})
    }
  }

  setMonth(month) {
    this.setState({month})
  }

  navigateMonth(direction) {
    this.setState({
      month: navigateMonth(this.state.month, direction)
    })
  }

  _renderWeekdays() {
    const { trimWeekdays, weekStartsOn } = this.props
    const weekdays = WEEKDAYS.slice(0)
    const sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn))

    return sortedWeekdays.map((weekday, index) => {
      return trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday
    })
  }

  _renderWeeksInMonth() {
    const { month } = this.state
    const { weekStartsOn, forceSixRows, ...props } = this.props

    return getWeeks(month, weekStartsOn, forceSixRows).map(week =>
      week.map(day =>
        <Day
          {...props}
          month={month}
          key={day.getTime()}
          date={day}
        />
      )
    )
  }

  render() {
    const { month } = this.state
    const { children } = this.props

    return Children.only(children({
      id: this._id,
      month,
      monthLabel: formatMonth(month),
      yearLabel: formatYear(month),
      weekdays: this._renderWeekdays(),
      weeks: this._renderWeeksInMonth()
    }))
  }
}

export default Dately
