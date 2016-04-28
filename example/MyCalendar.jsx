import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Dately, utils } from '../src/react-dately'
import PrevMonth from '../src/PrevMonth'
import NextMonth from '../src/NextMonth'

const { isSame, isBeforeDay, isAfterDay, getDaysBetween, getMonths } = utils

const months = getMonths()
const currentYear = (new Date()).getFullYear()
const years = []

for (let i = currentYear; i < currentYear + 10; i++) {
  years.push(i)
}

const propTypes = {
  modifiers: PropTypes.array,
  renderDay: PropTypes.func,
}

const defaultProps = {
  modifiers: [],
  renderDay: date => date.getDate()
}

class MyCalendar extends Component {
  _renderMonth(currDate) {
    return (
      <select
        value={currDate.getMonth()}
        onChange={({target}) => this.refs.calendar.setMonth(
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
        onChange={({target}) => this.refs.calendar.setMonth(
          new Date(target.value, currDate.getMonth())
        )}
      >
        {years.map((year, index) =>
          <option key={index} value={year}>{year}</option>
        )}
      </select>
    )
  }

  _renderDay = (date, { modifiers, ...props }, rules) => {
    let className = 'cal__day'

    // build the final class name string with all respective modifiers
    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <td {...props} className={className}>
        {this.props.renderDay(date, rules)}
      </td>
    )
  }

  render() {
    const { minDay, maxDay, modifiers } = this.props
    let className = 'cal'

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <Dately
        ref="calendar"
        {...this.props}
        renderDay={this._renderDay}
      >
        {({id, month, weekdays, weeks}) =>
          <div id={id} className={className}>
            <header className="cal__header">
              <PrevMonth
                onClick={() => this.refs.calendar.navigateMonth(-1)}
                innerHTML=""
                disable={minDay && isSame(month, minDay, 'month')}
                controls={id + '__table'}
              />
              <div className="cal__month-year">
                <div className="cal__month">
                  {this._renderMonth(month)}
                </div>
                <div className="cal__year">
                  {this._renderYear(month)}
                </div>
              </div>
              <NextMonth
                onClick={() => this.refs.calendar.navigateMonth(1)}
                innerHTML=""
                disable={maxDay && isSame(month, maxDay, 'month')}
                controls={id + '__table'}
              />
            </header>
            <table className="cal__table">
              <thead>
                <tr className="cal__weekdays">
                  {weekdays.map((weekday, index) =>
                    <th
                      key={index}
                      scope="col"
                      title={weekday}
                      className="cal__weekday"
                    >
                      {weekday}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, index) =>
                  <tr key={index} className="cal__week">
                    {week}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        }
      </Dately>
    )
  }
}

MyCalendar.propTypes = propTypes
MyCalendar.defaultProps = defaultProps

export default MyCalendar
