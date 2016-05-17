import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import TetherComponent from 'react-tether'
import Calendar from './Calendar'

const propTypes = {
  date: React.PropTypes.instanceOf(Date),
  placeholder: React.PropTypes.string,
  calendarProps: React.PropTypes.object,
  hiddenValue: React.PropTypes.bool,
  formatDate: React.PropTypes.func,
  onDateSelect: React.PropTypes.func
}

const defaultProps = {
  date: new Date(),
  placeholder: null,
  minDay: new Date(),
  calendarProps: {
    modifiers: ['small'],
    trimWeekdays: 2
  },
  formatDate: date => date,
  onDateSelect: date => date
}

class CalendarInput extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this._documentClickHandler = (e) => this._documentClick(e)
    this._handleCalendarClick = this._handleCalendarClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this._documentClickHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._documentClickHandler)
  }

  _documentClick(e) {
    if (this._input.contains(e.target)) {
      this.setState({isOpen: !this.state.isOpen})
    } else if (this._calendar && !this._calendar.contains(e.target)) {
      this.setState({isOpen: false})
    }
  }

  _handleCalendarClick(date) {
    this.props.onDateSelect(date)
    this.setState({isOpen: false})
  }

  render() {
    const { date, inputClassName, placeholder, calendarProps, hiddenValue, formatDate,  } = this.props
    const { isOpen } = this.state
    const value = placeholder ? (placeholder || null) : formatDate(date)

    return (
      <TetherComponent
        attachment="top right"
        targetAttachment="bottom right"
        constraints={[
          {
            to: 'window',
            attachment: 'together'
          }
        ]}
      >
        <input
          ref={c => this._input = findDOMNode(c)}
          type="text"
          className="cal-input"
          aria-haspopup={true}
          aria-readonly={false}
          aria-expanded={isOpen}
          value={value}
          readOnly
        />
        { isOpen &&
          <div
            ref={c => this._calendar = findDOMNode(c)}
            className="cal-input-calendar"
          >
            <Calendar
              date={date}
              minDay={this.props.minDay}
              maxDay={this.props.maxDay}
              dayEvents={{ onClick: this._handleCalendarClick }}
              {...calendarProps}
            />
          </div>
        }
      </TetherComponent>
    )
  }
}

CalendarInput.propTypes = propTypes
CalendarInput.defaultProps = defaultProps

export default CalendarInput
