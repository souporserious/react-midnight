import React, { Component } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import Day from './Day'

const Month = ({ weeks, Day }) => (
  <div>
    {weeks.map((week, index) =>
      <div key={index} className="cal__week">
        {week.map(day =>
          <Day key={day} day={day}/>
        )}
      </div>
    )}
  </div>
)

Month.defaultProps = {
  Day
}

export default withCalendarProps(Month)
