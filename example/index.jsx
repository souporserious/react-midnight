import React, { Component, PropTypes } from 'react';
import { Calendar, Time, utils } from '../src/react-dately';
import CalendarInput from './CalendarInput';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../src/calendar.scss';
import './main.scss';

const { isSame, isBeforeDay, isAfterDay, getDaysBetween } = utils;

injectTapEventPlugin();

class TimeSelect extends Component {

  _handleOnChange(e) {
    this.props.onTimeChange(e);
  }

  render() {
    return(
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
    );
  }
}

class FromTo extends Component {

  state = {
    startDate: new Date(),
    startTime: 6 * 60,
    endDate: new Date(),
    endTime: 23.5 * 60
  }

  _handleDateSelect(key, value) {
    let date = {};
    date[key] = value;
    this.setState(date);
  }

  _handleTimeChange(key, e) {
    let date = {};
    date[key] = e.target.value;
    this.setState(date);
  }

  render() {
    const { startDate, startTime, endDate, endTime } = this.state;

    return(
      <div>
        <h2>From:</h2>
        <CalendarInput
          date={startDate}
          maxDay={endDate}
          onDateSelect={this._handleDateSelect.bind(this, 'startDate')}
        />
        <TimeSelect
          minTime={startTime/60}
          maxTime={endTime/60}
          onTimeChange={this._handleTimeChange.bind(this, 'startTime')}
        />

        <h2>To:</h2>
        <CalendarInput
          date={endDate}
          minDay={startDate}
          onDateSelect={this._handleDateSelect.bind(this, 'endDate')}
        />
        <TimeSelect
          defaultTime={23.5 * 60}
          minTime={startTime/60}
          onTimeChange={this._handleTimeChange.bind(this, 'endTime')}
        />
      </div>
    );
  }
}

class App extends Component {
  
  state = {
    startDate: null,
    endDate: null
  }
  _mouseDown = false

  _renderDay(day) {
    day = isSame(day, new Date()) ? 'today' : day.getDate();

    return(
      <div>
        {day}
      </div>
    );
  }

  _selectRange(currDate, {type}) {
    let { startDate } = this.state;

    if(type === 'mousedown') {
      this._mouseDown = true;
      this.setState({startDate: currDate});
    }
    else if(type === 'mousemove' && this._mouseDown) {
      this.setState({startDate, endDate: currDate});
    }
    else if(type === 'mouseup') {
      this._mouseDown = false;

      // swap values if start date is after current date
      if(isAfterDay(startDate, currDate)) {
        [startDate, currDate] = [currDate, startDate];
      }

      this.setState({startDate, endDate: currDate}, () => {
        //this.refs['calendar'].setMonth(date);
      });
    }
  }
  
  render() {
    const { startDate, endDate } = this.state
    const inRange = startDate && endDate && getDaysBetween(startDate, endDate)

    return(
      <div className="app">
        <Calendar
          ref="calendar"
          trimWeekdays={3}
          minDay={new Date()}
          renderDay={this._renderDay}
          onMouseDown={this._selectRange.bind(this)}
          onMouseMove={this._selectRange.bind(this)}
          onMouseUp={this._selectRange.bind(this)}
          rules={{
            startDate: (date) => isSame(date, startDate),
            endDate: (date) => isSame(date, endDate),
            inRange: (date) => isSame(date, inRange),
          }}
        />

        <CalendarInput />

        <FromTo />
      </div>
    );
  }
}

React.render(<App />, document.body);