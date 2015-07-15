import React from 'react';
import { Calendar, CalendarInput, Time } from '../src/index';

import '../src/calendar.scss';
import './main.scss';

var App = React.createClass({
  
  getInitialState: function () {
    return {
      date: new Date()
    }  
  },

  _handleCalendarClick: function (date) {
    this.setState({date: date});
  },

  _handleTimeChange(day) {
    // don't change time when selecting new date
    // need to expose helper utility to merge dates
    // or store time in seconds or something
    console.log(day);
  },
  
  render: function () {
    return(
      <div className="app">
        <Calendar
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
          disabledDays={[ 1, 2, 3, 4, 5, 6 ]}
          selectedDays={[ 7, 8, 9, 10, 11, 12 ]}
        />
        <CalendarInput
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
        />
        <Time
          date={this.state.date}
          onTimeSelect={this._handleCalendarClick}
        />
      </div>
    );
  }
});

React.render(<App />, document.body);