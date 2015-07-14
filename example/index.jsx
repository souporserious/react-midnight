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
    let dates = [date, new Date('07-14-2015')];
    this.setState({date: dates});
  },

  _handleTimeChange(day) {
    console.log(day);
  },
  
  render: function () {
    return(
      <div className="app">
        <Calendar
          onDaySelect={this._handleCalendarClick}
          disabledDays={[ 1, 2, 3, 4, 5, 6 ]}
          selectedDays={[ 7, 8, 9, 10, 11, 12 ]}
        />
        <Time onChange={this._handleTimeChange} />
        <CalendarInput />
        <CalendarInput />
        <CalendarInput />
      </div>
    );
  }
});

React.render(<App />, document.body);