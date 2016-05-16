import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'

const Weekdays = ({ calendar: { weekdays } }) => (
  <div className="cal__weekdays">
    {weekdays.map((weekday, index) =>
      <div
        key={index}
        scope="col"
        title={weekday}
        className="cal__weekday"
      >
        {weekday}
      </div>
    )}
  </div>
)

export default withCalendarProps(Weekdays)
