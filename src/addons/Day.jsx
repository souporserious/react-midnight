import React, { Component, PropTypes } from 'react'
import withDayProps from '../decorators/with-day-props'
import { getModifiers } from '../utils'

class Day extends Component {
  static propTypes = {
    day: PropTypes.instanceOf(Date).isRequired
  }

  render() {
    const { day, className, dayEvents, renderDay } = this.props

    return (
      <td
        key={day}
        className={className}
        {...dayEvents}
      >
        {renderDay(day)}
      </td>
    )
  }
}

export default withDayProps(Day)
