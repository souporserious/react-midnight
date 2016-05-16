import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'

const Header = ({ calendar: { id, monthLabel, yearLabel, navigateMonth } }) => (
  <header className="cal__header">
    <PrevMonth/>
    <div className="cal__month-year">
      <div className="cal__month">
        {monthLabel}
      </div>
      <div className="cal__year">
        {yearLabel}
      </div>
    </div>
    <NextMonth/>
  </header>
)

export default withCalendarProps(Header)
