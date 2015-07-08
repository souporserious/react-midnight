import React from 'react';
import Velocity from 'velocity-animate';
import moment from 'moment';
import classNames from 'classnames';
import VelocityTransitionGroup from 'velocitytransitiongroup';

import Calendar from './Calendar'

import 'velocity-animate/velocity.ui';
import './main.scss';

var App = React.createClass({
  
  getInitialState: function () {
    return {
      rules: this.props.data,
      editing: false
    }  
  },

  _handleCalendarClick: function (date) {
    console.log(date);
  },
  
  render: function () {
    return(
      <div className="app">
        <Calendar onDaySelect={this._handleCalendarClick} />
      </div>
    );
  }
});

React.render(<App />, document.body);