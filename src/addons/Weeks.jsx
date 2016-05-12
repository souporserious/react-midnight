import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import Day from './Day'

const Weeks = ({ calendar: { weeks }, Day }) => (
  <tbody>
    {weeks.map((week, index) =>
      <tr key={index} className="cal__week">
        {week.map(day =>
          <Day key={day} day={day}/>
        )}
      </tr>
    )}
  </tbody>
)

Weeks.defaultProps = { Day }

export default withCalendarProps(Weeks)
