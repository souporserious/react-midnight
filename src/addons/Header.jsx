import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'

const Header = ({ calendar: { id, month, year, navigateMonth } }) => (
  <header className="cal-header">
    <PrevMonth/>
    <div className="cal-month-year">
      <div className="cal-month-label">
        {month}
      </div>
      <div className="cal-year-label">
        {year}
      </div>
    </div>
    <NextMonth/>
  </header>
)

export default withCalendarProps(Header)
