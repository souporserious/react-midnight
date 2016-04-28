import React, { Component, PropTypes } from 'react'
import { withCalendar, withCalendarProps } from './Solar'
import Day from './Day'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'

const Header = withCalendarProps(({ calendar: { id, month, year, navigateMonth } }) => (
  <header className="cal__header">
    <PrevMonth
      onClick={() => navigateMonth(-1)}
      controls={id + '__table'}
    />
    <div className="cal__month-year">
      <div className="cal__month">
        {month}
      </div>
      <div className="cal__year">
        {year}
      </div>
    </div>
    <NextMonth
      onClick={() => navigateMonth(1)}
      controls={id + '__table'}
    />
  </header>
))

const Weekdays = withCalendarProps(({ calendar: { weekdays } }) => (
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
))

const Weeks = withCalendarProps(({ calendar: { weeks } }) => (
  <tbody>
    {weeks.map((week, index) =>
      <tr key={index} className="cal__week">
        {week.map(day =>
          <Day key={day} day={day}/>
        )}
      </tr>
    )}
  </tbody>
))

class Calendar extends Component {
  static propTypes = {
    modifiers: PropTypes.array
  }

  static defaultProps = {
    modifiers: []
  }

  render() {
    const { calendar: { id }, minDay, maxDay, modifiers } = this.props
    let className = 'cal'

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <div id={id} className={className}>
        <Header/>
        <table className="cal__table">
          <Weekdays/>
          <Weeks/>
        </table>
      </div>
    )
  }
}

export default withCalendar(withCalendarProps(Calendar))
