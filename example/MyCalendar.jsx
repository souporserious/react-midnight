import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { withCalendar, withCalendarProps, withDayProps, addons, utils } from '../src/react-dately'

const { PrevMonth, NextMonth, Weekdays, Weeks } = addons
const { isSame, isBeforeDay, isAfterDay, getDaysBetween, getMonths } = utils

const months = getMonths()
const currentYear = (new Date()).getFullYear()
const years = []

for (let i = currentYear; i < currentYear + 10; i++) {
  years.push(i)
}

const propTypes = {
  modifiers: PropTypes.array
}

const defaultProps = {
  modifiers: []
}

class MyCalendar extends Component {
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
    const { calendar: { id, date }, modifiers } = this.props
    let className = 'cal'

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <div id={id} className={className}>
        <header className="cal__header">
          <PrevMonth/>
          <div className="cal__month-year">
            <div className="cal__month">
              {this._renderMonth(date)}
            </div>
            <div className="cal__year">
              {this._renderYear(date)}
            </div>
          </div>
          <NextMonth/>
        </header>
        <table className="cal__table">
          <Weekdays/>
          <Weeks/>
        </table>
      </div>
    )
  }
}

MyCalendar.propTypes = propTypes
MyCalendar.defaultProps = defaultProps

export default withCalendar(withCalendarProps(MyCalendar))
