import React, { Component, PropTypes } from 'react'
import withCalendar from '../decorators/with-calendar'
import withCalendarProps from '../decorators/with-calendar-props'
import Header from './Header'
import Weekdays from './Weekdays'
import Month from './Month'

class Calendar extends Component {
  static propTypes = {
    modifiers: PropTypes.array
  }

  static defaultProps = {
    modifiers: []
  }

  render() {
    const { calendar: { id, months }, minDay, maxDay, modifiers } = this.props
    let className = 'cal'

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <div id={id} className={className}>
        <Header/>
        <div className="cal__table">
          <Weekdays/>
          {months.map((weeks, i) =>
            <Month key={i} weeks={weeks}/>
          )}
        </div>
      </div>
    )
  }
}

export default withCalendar(withCalendarProps(Calendar), { trimWeekdays: 3 })
