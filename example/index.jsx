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

  _handleTimeChange(date) {
    // don't change time when selecting new date
    // need to expose helper utility to merge dates
    // or store time in seconds or something
    console.log(date);
  },

  _formatDate(date) {
    return date;
  },

  _setDate() {
    this.setState({date: new Date('10-12-2010')});
  },
  
  render: function () {
    return(
      <div className="app">
        <Calendar
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
          selectedDays={[ 7, 8, 9, 10, 11, 12 ]}
          minDay={new Date('06-15-2015')}
          maxDay={new Date('07-31-2015')}
        />
        <CalendarInput
          date={this.state.date}
          onDateSelect={this._handleCalendarClick}
          formatDate={this._formatDate}
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