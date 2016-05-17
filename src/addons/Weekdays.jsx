import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'

const Weekdays = ({ calendar: { weekdays } }) => (
  <div className="cal-weekdays">
    {weekdays.map((weekday, index) =>
      <div
        key={index}
        title={weekday.full}
        className="cal-weekday"
      >
        {weekday.trimmed}
      </div>
    )}
  </div>
)

export default withCalendarProps(Weekdays)
