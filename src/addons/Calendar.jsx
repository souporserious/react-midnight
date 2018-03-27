import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withCalendar from '../decorators/with-calendar'
import withCalendarProps from '../decorators/with-calendar-props'
import Header from './Header'
import Weekdays from './Weekdays'
import Month from './Month'

class Calendar extends Component {
  static propTypes = {
    className: PropTypes.string,
    modifiers: PropTypes.array
  }

  static defaultProps = {
    className: 'cal',
    modifiers: []
  }

  render() {
    const { calendar: { id }, className, minDay, maxDay, modifiers } = this.props
    let wrapperClassName = className

    wrapperClassName += modifiers.map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <div id={id} className={wrapperClassName}>
        <Header/>
        <div className={`${className}--body`}>
          <Weekdays/>
          <Weeks/>
        </div>
      </div>
    )
  }
}

export default withCalendar(withCalendarProps(Calendar), { trimWeekdays: 3 })
