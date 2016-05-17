import React, { Component, PropTypes } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import { isSame } from '../utils'

class PrevMonth extends Component {
  static propTypes = {
    disabled: PropTypes.bool
  }

  static defaultProps = {
    disabled: false
  }

  handleClick = () => {
    const { disabled, calendar, onClick } = this.props
    if (!disabled) {
      calendar.navigateMonth(-1)
      onClick && onClick.call(this)
    }
  }

  render() {
    const { disabled, calendar: { id, date, minDay } } = this.props
    const isDisabled = disabled || (minDay && isSame(date, minDay, 'month'))
    let classes = 'cal-nav cal-nav--prev'

    if (isDisabled) {
      classes += ' cal-nav--disabled'
    }

    return (
      <button
        type="button"
        disabled={isDisabled}
        aria-controls={id + '__table'}
        title="Previous month"
        className={classes}
        onClick={this.handleClick}
      />
    )
  }
}

export default withCalendarProps(PrevMonth)
