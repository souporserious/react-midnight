import React, { Component, PropTypes } from 'react'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'
import generateId from './generate-id'
import { getWeeks, navigateMonth, isSame, isBeforeDay, isAfterDay, isOutsideMonth, formatMonth, formatYear } from './utils'

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const ENTER_KEY = 13

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

  _renderDay(day, rules) {
    return this.props.renderDay(day, rules)
  }

  render() {
    const { month, date, minDay, maxDay, outsideDays, onClick, canTouchTap, onMouseDown, onMouseMove, onMouseUp } = this.props
    const rules = {...this.rules, ...this.props.rules}
    const disabledRules = {...this.disabledRules, ...this.props.disabledRules}
    const isOutside = isOutsideMonth(date, month)
    let className = 'cal__day'
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

    // build the final class name string with all respective modifiers
    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    // return a blank day if outside
    if (isOutside && !outsideDays) {
      return <td aria-hidden="true" className={className} />
    }

    return (
      <td
        role="presentation"
        aria-label={date}
        className={className}
        tabIndex={isDisabled ? null : 0}
        onClick={canTouchTap ? null : onDayClick}
        onTouchTap={canTouchTap ? onDayClick : null}
        onKeyDown={this._handleKeyDown.bind(this, date)}
        onMouseDown={onDayMouseDown}
        onMouseMove={onDayMouseMove}
        onMouseUp={onDayMouseUp}
      >
        {this._renderDay(date, rules)}
      </td>
    )
  }
}

class Week extends Component {
  render() {
    const days = this.props.days.map(day =>
      <Day
        {...this.props}
        key={day.getTime()}
        date={day}
      />
    )

    return(
      <tr className="cal__week">
        {days}
      </tr>
    )
  }
}

class Calendar extends Component {
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
    outsideDays: true,
    prevHTML: '',
    nextHTML: '',
    canTouchTap: false,
    rules: {},
    disabledRules: {},
    //locale: 'en',
    onDateSelect: () => null,
    onMouseDown: () => null,
    onMouseMove: () => null,
    onMouseUp: () => null,
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

  navigateMonth(direction) {
    const { month } = this.state
    this.setState({month: navigateMonth(month, direction)})
  }

  _renderWeekdays() {
    const { trimWeekdays, weekStartsOn } = this.props;
    const weekdays = WEEKDAYS.slice(0);
    const sortedWeekdays = weekdays.concat(weekdays.splice(0, weekStartsOn));

    const getDays = () => {
      return sortedWeekdays.map((weekday, index) => {
        const weekdayTrimmed = trimWeekdays ? weekday.substring(0, parseInt(trimWeekdays)) : weekday
        return (
          <th
            key={index}
            scope="col"
            title={weekday}
            className="cal__weekday"
          >
            {weekdayTrimmed}
          </th>
        )
      })
    }
    
    return(
      <thead>
        <tr className="cal__weekdays">
          {getDays()}
        </tr>
      </thead>
    );
  }

  _renderWeeksInMonth() {
    const { month } = this.state
    const { weekStartsOn, forceSixRows } = this.props

    let weeks = getWeeks(month, weekStartsOn, forceSixRows).map((week, index) =>
      <Week
        {...this.props}
        key={week[0].getTime()}
        days={week}
        month={month}
      />
    )

    return(
      <tbody>
        {weeks}
      </tbody>
    )
  }

  render() {
    const { className, minDay, maxDay, canTouchTap } = this.props
    const { month } = this.state

    let classes = []
    let modifiers = this.props.modifiers ? this.props.modifiers.split(',') : null
    let classNames = 'cal'

    if (className) {
      classes.push(className)
    }
    if (modifiers) {
      classes.push(modifiers)
    }

    classNames += classes.map(className => ` ${className}`).join('')

    let monthLabel = formatMonth(month)
    let yearLabel = formatYear(month)

    // disable prev/next buttons when min/max days set
    let prevDisabled, nextDisabled = false

    if (minDay && isSame(month, minDay, 'month')) {
      prevDisabled = true
    }

    if (maxDay && isSame(month, maxDay, 'month')) {
      nextDisabled = true
    }

    return(
      <div className={classNames}>
        <header className="cal__header">
          <PrevMonth
            onClick={canTouchTap ? null : this.navigateMonth.bind(this, -1)}
            onTouchTap={canTouchTap ? this.navigateMonth.bind(this, -1) : null}
            inner={this.props.prevHTML}
            disable={prevDisabled}
            controls={this._id + '_table'}
          />
          <div className="cal__month-year">
            <div className="cal__month">{monthLabel}</div>
            <div className="cal__year">{yearLabel}</div>
          </div>
          <NextMonth
            onClick={canTouchTap ? null : this.navigateMonth.bind(this, 1)}
            onTouchTap={canTouchTap ? this.navigateMonth.bind(this, 1) : null}
            inner={this.props.nextHTML}
            disable={nextDisabled}
            controls={this._id + '_table'}
          />
        </header>
        <table id={this._id + '_table'} className="cal__table">
          {this._renderWeekdays()}
          {this._renderWeeksInMonth()}
        </table>
      </div>
    )
  }
}

export default Calendar