import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import 'expose?Perf!react-addons-perf'
import { Calendar, Time, utils } from '../src/react-midnight'
import MyCalendar from './MyCalendar'
import CalendarInput from './CalendarInput'
import './calendar.scss'
import './main.scss'

const { isSame, isBeforeDay, isAfterDay, getDaysBetween } = utils

class TimeSelect extends Component {
  _handleOnChange({ target: { value } }) {
    this.props.onTimeChange(value)
  }

  render() {
    return (
      <Time
        minTime={this.props.minTime}
        maxTime={this.props.maxTime}
        interval={30}
        humanize={true}
      >
        {times =>
          <select
            value={this.props.value}
            onChange={this._handleOnChange.bind(this)}
            className="select"
          >
            {times}
          </select>
        }
      </Time>
    )
  }
}

class FromTo extends Component {
  state = {
    startDate: new Date(),
    startTime: 6 * 60,
    endDate: new Date(),
    endTime: 23.5 * 60
  }

  _handleDateChange(key, value) {
    this.setState({ [key]: value })
  }

  render() {
    const { startDate, startTime, endDate, endTime } = this.state

    return (
      <div>
        <h2>From:</h2>
        <CalendarInput
          date={startDate}
          maxDay={endDate}
          onDateSelect={this._handleDateChange.bind(this, 'startDate')}
        />
        <TimeSelect
          minTime={startTime/60}
          maxTime={endTime/60}
          onTimeChange={this._handleDateChange.bind(this, 'startTime')}
        />

        <h2>To:</h2>
        <CalendarInput
          date={endDate}
          minDay={startDate}
          onDateSelect={this._handleDateChange.bind(this, 'endDate')}
        />
        <TimeSelect
          defaultTime={23.5 * 60}
          minTime={startTime/60}
          onTimeChange={this._handleDateChange.bind(this, 'endTime')}
        />
      </div>
    )
  }
}

class App extends Component {
  state = {
    startDate: null,
    endDate: null,
    currMonth: new Date()
  }
  _mouseDown = false

  _renderDay(day) {
    return (
      <div>
        { isSame(day, new Date()) ? 'today' : day.getDate() }
      </div>
    )
  }

  _selectRange(currDate, { type }) {
    let { startDate } = this.state

    if (type === 'mousedown') {
      this._mouseDown = true
      this.setState({ startDate: currDate, endDate: null })
    }
    else if (type === 'mousemove' && this._mouseDown) {
      this.setState({ startDate, endDate: currDate })
    }
    else if (type === 'mouseup') {
      this._mouseDown = false

      // swap values if start date is after current date
      if(isAfterDay(startDate, currDate)) {
        [startDate, currDate] = [currDate, startDate]
      }

      this.setState({ startDate, endDate: currDate, currMonth: startDate })
    }
  }

  render() {
    const { startDate, endDate, currMonth } = this.state
    const inRange = startDate && endDate && getDaysBetween(startDate, endDate)

    return (
      <div className="app">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <MyCalendar
          ref="calendar"
          date={currMonth}
          trimWeekdays={3}
          minDay={new Date()}
          renderDay={this._renderDay}
          dayEvents={{
            onMouseDown: this._selectRange.bind(this),
            onMouseMove: this._selectRange.bind(this),
            onMouseUp: this._selectRange.bind(this)
          }}
          rules={{
            startDate: (date) => isSame(date, startDate),
            endDate: (date) => isSame(date, endDate),
            inRange: (date) => isSame(date, inRange),
          }}
        />
        <FromTo />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
