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
    endDate: null,
    date: new Date(),
    selected: []
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
  
  render() {
    const { startDate, endDate } = this.state;

    return(
      <div className="app">
        <Calendar
          ref="calendar"
          date={this.state.date}
          selectedDays={this.state.selected}
          trimWeekdays={3}
          minDay={new Date()}
          renderDay={this._renderDay}
          onMouseDown={(startDate) => {
            this.setState({startDate, endDate: null, selected: null});
            this._mouseDown = true;
          }}
          onMouseMove={(date, e) => {
            if(!this._mouseDown) return;
            
            let { startDate, selected } = this.state;
            
            e.preventDefault();

            this.setState({
              selected: getDaysBetween(startDate, date)
            });
          }}
          onMouseUp={(endDate) => {
            // could look at listening outside of calendar
            // would get tricky though
            // see here: http://jsfiddle.net/jWkCT/
            let { startDate } = this.state;

            // we've stopped dragging
            this._mouseDown = false;

            // swap values if start date is after end date
            if(isAfterDay(startDate, endDate)) {
              [startDate, endDate] = [endDate, startDate];
            }

            this.setState({startDate, endDate}, () => {
              this.refs['calendar'].setMonth(endDate);
            });
          }}
          rules={{
            startDate: (date) => isSame(date, this.state.startDate),
            endDate: (date) => isSame(date, this.state.endDate)
          }}
        />

        <CalendarInput />

        <FromTo />
      </div>
    );
  }
}

React.render(<App />, document.body);