import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withCalendarProps from '../decorators/with-calendar-props'
import { isSame } from '../utils'

class NextMonth extends Component {
  static propTypes = {
    disabled: PropTypes.bool
  }

  static defaultProps = {
    disabled: false
  }

  handleClick = () => {
    const { disabled, calendar, onClick } = this.props
    if (!disabled) {
      calendar.navigateMonth(1)
      onClick && onClick.call(this)
    }
  }

  render() {
    const { disabled, calendar: { id, date, maxDay } } = this.props
    const isDisabled = disabled || (maxDay && isSame(date, maxDay, 'month'))
    let classes = 'cal-nav cal-nav--next'

    if (isDisabled) {
      classes += ' cal-nav--disabled'
    }

    return (
      <button
        type="button"
        disabled={isDisabled}
        aria-controls={id + '__table'}
        title="Next month"
        className={classes}
        onClick={this.handleClick}
      />
    )
  }
}

export default withCalendarProps(NextMonth)
