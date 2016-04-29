import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import Day from './Day'

const Weeks = ({ calendar: { weeks } }) => (
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

export default withCalendarProps(Weeks)
