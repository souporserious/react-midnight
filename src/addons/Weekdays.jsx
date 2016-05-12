import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'

const Weekdays = ({ calendar: { weekdays } }) => (
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
)

export default withCalendarProps(Weekdays)
