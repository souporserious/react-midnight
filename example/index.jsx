import React, { Component, PropTypes } from 'react';
import { Calendar, Time, utils } from '../src/react-dately';
import CalendarInput from './CalendarInput';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../src/calendar.scss';
import './main.scss';

const { isSame, isAfterDay } = utils;

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
    startDate: new Date(),
    endDate: new Date(),
    date: new Date(),
    selected: []
  }
  _mouseDown = false

  _handleCalendarClick(date) {
    this.setState({date}, () => {
      this.refs['calendar'].setMonth(date);
    });
  }

  _renderDay(day) {
    day = isSame(day, new Date()) ? 'today' : day.getDate();

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
          selectedDays={this.state.selected}
          trimWeekdays={3}
          minDay={new Date()}
          renderDay={this._renderDay}
          onMouseDown={(startDate) => {
            this.setState({startDate});
            this._mouseDown = true
          }}
          onMouseMove={(date, e) => {

            let { selected } = this.state;
            let index = selected.indexOf(date);

            // TODO:
            // need to check if next date is either previous or next to a current selected one
            // if not then we need to start over so clear the array and get set the new value
            // 
            // JK!
            // need to check start mouse down date and current moused over date when the user
            // releases the mouse that shall be the end date they've chosen
            // just read all the dates in between the first and start duhh

            if(this._mouseDown) {
              e.preventDefault();

              // check whether to remove or add date
              if(index > -1) {
                selected.splice(index, 1);
              } else {
                selected.push(date);
              }

              this.setState({selected});
            }
          }}
          onMouseUp={(endDate) => {
            // need to check here if mouse went out of calendar just use last day in selection
            // can check if endDate is less or greater than startDate and flip values depending on what's up
            // also need to make sure a disabled day can't be set. shouldn't be since we aren't adding e handlers 

            this.setState({endDate});
            this._mouseDown = false
          }}
        />

        <CalendarInput />

        <FromTo />
      </div>
    );
  }
}

React.render(<App />, document.body);