import React, { Component, PropTypes } from 'react';
import { Calendar, CalendarInput, Time } from '../src/index';

import '../src/calendar.scss';
import './main.scss';

class TimeSelect extends Component {
  render() {
    return(
      <Time
        startTime={6}
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

class App extends Component {
  
  state = {
    startDate: new Date(),
    endDate: new Date()
  }

  _handleCalendarClick(date) {
    this.setState({startDate: date});
  }

  _setDate() {
    this.setState({startDate: new Date('10-12-2010')});
  }

  _formatDate(date) {
    return date.toLocaleString();
  }

  _handleTimeChange(key, e) {

    let currDate = this.state[key];
    let newDate = Time.toDate(e.target.value, currDate);

    console.log(newDate);
  }
  
  render() {
    return(
      <div className="app">
        <Calendar
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
          selectedDays={[7, 8, 9, 10, 11, 12]}
          trimWeekdays={3}
          minDay={new Date('06-15-2015')}
          maxDay={new Date('07-31-2015')}
        />

        <CalendarInput
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
          formatDate={this._formatDate}
        />

        <TimeSelect
          onTimeChange={this._handleTimeChange.bind(this, 'startDate')}
        />

        <TimeSelect
          defaultTime={23.5 * 60}
          onTimeChange={this._handleTimeChange.bind(this, 'endDate')}
        />
      </div>
    );
  }
}

React.render(<App />, document.body);