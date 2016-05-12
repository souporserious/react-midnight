import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import PrevMonth from './PrevMonth'
import NextMonth from './NextMonth'

const Header = ({ calendar: { id, month, year, navigateMonth } }) => (
  <header className="cal__header">
    <PrevMonth/>
    <div className="cal__month-year">
      <div className="cal__month">
        {month}
      </div>
      <div className="cal__year">
        {year}
      </div>
    </div>
    <NextMonth/>
  </header>
)

export default withCalendarProps(Header)
