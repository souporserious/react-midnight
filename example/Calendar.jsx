import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { withCalendar, withCalendarProps, withDayProps, addons, utils } from '../src/react-midnight'

const { PrevMonth, NextMonth, Weekdays, Month } = addons
const { isSame, isBeforeDay, isAfterDay, getDaysBetween, getMonths } = utils

const months = getMonths()
const currentYear = (new Date()).getFullYear()
const years = []

for (let i = currentYear; i < currentYear + 10; i++) {
  years.push(i)
}

const propTypes = {
  modifiers: PropTypes.array,
  selectMenuHeader: PropTypes.bool,
  onChange: PropTypes.func
}

const defaultProps = {
  modifiers: [],
  selectMenuHeader: false,
  onChange: () => null
}

class Calendar extends Component {
  componentWillReceiveProps({ calendar }) {
    if (this.props.calendar.date !== calendar.date) {
      this.props.onChange(calendar.date)
    }
  }

  _renderMonth(currDate) {
    return (
      <select
        value={currDate.getMonth()}
        onChange={({target}) => this.props.calendar.setDate(
          new Date(currDate.getFullYear(), target.value)
        )}
      >
        {months.map((month, index) =>
          <option key={index} value={index}>{month}</option>
        )}
      </select>
    )
  }

  _renderYear(currDate) {
    return (
      <select
        value={currDate.getFullYear()}
        onChange={({target}) => this.props.calendar.setDate(
          new Date(target.value, currDate.getMonth())
        )}
      >
        {years.map((year, index) =>
          <option key={index} value={year}>{year}</option>
        )}
      </select>
    )
  }

  render() {
    const { calendar: { id, date, monthLabel, yearLabel }, modifiers, selectMenuHeader } = this.props
    let className = 'cal'

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <div id={id} className={className}>
        <header className="cal-header">
          <PrevMonth/>
          <div className="cal-month-year">
            <div className="cal-month-label">
              {selectMenuHeader ? this._renderMonth(date) : monthLabel}
            </div>
            <div className="cal-year-label">
              {selectMenuHeader ? this._renderYear(date) : yearLabel}
            </div>
          </div>
          <NextMonth/>
        </header>
        <div className="cal-body">
          <Weekdays/>
          <Month/>
        </div>
      </div>
    )
  }
}

Calendar.propTypes = propTypes
Calendar.defaultProps = defaultProps

export default withCalendar(withCalendarProps(Calendar))
