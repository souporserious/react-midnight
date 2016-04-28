import React, { Component, PropTypes } from 'react'
import { withCalendarProps } from './Solar'
import { isSame } from './utils'

function getModifiers(rules, day, month) {
  const modifiers = []

  Object.keys(rules).forEach(key => {
    if (rules[key](day, month)) {
      // camelCase to hyphen friendly class name
      const modifier = key.replace(/[a-z][A-Z]/g, str =>
        `${str[0]}-${str[1].toLowerCase()}`
      )
      modifiers.push(modifier)
    }
  })

  return modifiers
}

class Day extends Component {
  static defaultProps = {
    day: PropTypes.instanceOf(Date),
    className: 'cal__day',
    children: this._renderDay
  }

  _handleDaySelect(day) {
    this.props.onDaySelect(day)
  }

  render() {
    const { calendar, component, day, dately, ...otherProps } = this.props
    const { date, onDateSelect, rules, disabledRules } = calendar
    const modifiers = getModifiers(rules, day, date)
    const disabledModifiers = getModifiers(disabledRules, day, date)
    const isDisabled = (disabledModifiers.length > 1)
    let className = this.props.className

    // build the final class name string with all respective modifiers
    className += modifiers.concat(disabledModifiers).map(modifier => ` ${className}--${modifier}`).join('')

    return (
      <td
        key={day}
        className={className}
        style={{flex: 1, color: isSame(day, new Date()) ? 'red' : ''}}
        onClick={() => onDateSelect(day)}
      >
        {day.getDate()}
      </td>
    )

    return createElement(
      component,
      {
        ...otherProps,
        className,
        onClick: isDisabled ? (e) => e.preventDefault() : this._handleDaySelect.bind(this, day)
      },
      children(day)
    )
  }
}

export default withCalendarProps(Day)
