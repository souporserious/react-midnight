import React, { Component, PropTypes } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'
import { isSame, getModifiers } from '../utils'

class Day extends Component {
  static propTypes = {
    day: PropTypes.instanceOf(Date).isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: 'cal__day'
  }

  render() {
    const { calendar, component, day, dately, ...otherProps } = this.props
    const { date, onDateSelect, rules, disabledRules, renderDay } = calendar
    const modifiers = getModifiers(rules, day, date)
    const disabledModifiers = getModifiers(disabledRules, day, date)
    const isDisabled = disabledModifiers.length
    let className = this.props.className

    // build the final class name string with all respective modifiers
    className += modifiers.concat(disabledModifiers).map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <td
        key={day}
        className={className}
        onClick={() => !isDisabled && onDateSelect(day)}
      >
        {renderDay(day)}
      </td>
    )
  }
}

export default withCalendarProps(Day)
