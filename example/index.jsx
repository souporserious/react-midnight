import React, { Component, PropTypes } from 'react';
import { Calendar, Time, utils } from '../src/react-dately';
import CalendarInput from './CalendarInput';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../src/calendar.scss';
import './main.scss';

injectTapEventPlugin();

class TimeSelect extends Component {
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
            defaultValue={this.props.defaultTime}
            onChange={this.props.onTimeChange}
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
    date: new Date()
  }

  _handleCalendarClick(date) {
    this.setState({date: date}, () => {
      this.refs.calendar.setMonth(date);
    });
  }

  _renderDay(day) {

    day = utils.isSame(day, new Date()) ? 'today' : day.getDate();

    return(
      <div>
        {day}
      </div>
    );
  }
  
  render() {
    return(
      <div className="app">
        {this.state.date.toString()}
        <Calendar
          ref="calendar"
          date={this.state.date}
          onDateSelect={::this._handleCalendarClick}
          selectedDays={[7, 8, 9, 10, 11, 12]}
          trimWeekdays={3}
          minDay={new Date()}
          renderDay={this._renderDay}
        />

        <CalendarInput />

        <FromTo />
      </div>
    );
  }
}

React.render(<App />, document.body);