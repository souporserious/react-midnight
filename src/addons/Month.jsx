import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import Day from './Day'

const Month = ({ calendar: { weeks }, Day }) => (
  <div className="cal-month">
    {weeks.map((week, index) =>
      <div key={index} className="cal-week">
        {week.map(day =>
          <Day key={day} day={day}/>
        )}
      </div>
    )}
  </div>
)

Month.defaultProps = { Day }

export default withCalendarProps(Month)
