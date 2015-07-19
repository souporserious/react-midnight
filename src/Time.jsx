import React, { Component, PropTypes } from 'react';

const HOURS_IN_DAY = 24;
const HOURS_TO_NOON = HOURS_IN_DAY / 2;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

class Time extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    interval: PropTypes.number,
    separator: PropTypes.string,
    pad: PropTypes.bool,
    twelveHourClock: PropTypes.bool,
    humanize: PropTypes.bool,
    humanizeStrings: PropTypes.object,
    onTimeSelect: PropTypes.func,
  }

  static defaultProps = {
    date: new Date(),
    defaultTime: 0,
    startTime: 0,
    endTime: 24,
    interval: 60,
    separator: ':',
    pad: true,
    twelveHourClock: true,
    humanize: false,
    humanizeStrings: {
      begin: 'Beginning of Day',
      middle: 'Noon',
      end: 'End of Day'
    },
    onTimeSelect: () => null
    // showSeconds: false
  }

  _pad(n) {
    return (n > 9) ? n : '0' + n;
  }

  // would be cool to allow formatting like this:
  // https://github.com/amsul/pickadate.js/blob/master/lib/picker.time.js#L593-L648
  // would get rid of the need for a shit load of props
  _format(minuteInterval) {

    const {humanize, humanizeStrings, startTime, endTime, interval, twelveHourClock, pad, separator} = this.props;

    let hour = Math.floor(minuteInterval / MINUTES_IN_HOUR);
    let minute = (minuteInterval / MINUTES_IN_HOUR);
    
    // strip the decimal to find the minute value 
    minute = ((minute - Math.floor(minute)) * MINUTES_IN_HOUR).toFixed(0);

    // make sure we are dealing with numbers
    hour = parseInt(hour);
    minute = parseInt(minute);

    let AMPM = (hour < HOURS_TO_NOON) ? 'AM' : 'PM';

    if(humanize) {
      if(hour === startTime && minute === 0) {
        return humanizeStrings.begin;
      }

      if(hour === HOURS_TO_NOON && minute === 0) {
        return humanizeStrings.middle;
      }

      if(hour === (endTime - 1) &&
         minute === MINUTES_IN_HOUR - interval) {
        return humanizeStrings.end;
      }
    }

    // convert to 12 hour clock
    if(twelveHourClock) {
      hour = (hour % HOURS_TO_NOON) || HOURS_TO_NOON;
    }

    // pad with a 0
    if(pad) {
      hour = this._pad(hour);
      minute = this._pad(minute);
    }

    return twelveHourClock ?
      `${hour}${separator}${minute} ${AMPM}` :
      `${hour}${separator}${minute}`;
  }

  _getOptions() {

    const {interval, startTime, endTime} = this.props;

    let options = [];
    let timeLength = (endTime * MINUTES_IN_HOUR);
    let i = startTime * MINUTES_IN_HOUR;

    for(; i < timeLength; i += interval) {

      let formatted = this._format(i);

      options.push(
        <option
          key={i}
          value={i}
        >
          {formatted}
        </option>
      );
    }

    return options;
  }

  _handleChange(e) {

    // set to beginning of day
    this.props.date.setHours(0, 0, 0, 0);

    // get selected minutes and merge dates
    let minutes = React.findDOMNode(e.target).value;
    let date = new Date(this.props.date.getTime() + (minutes * 60000));

    // return selected date
    this.props.onTimeSelect(date);
  }

  render() {

    let defaultTime = this.props.defaultTime * MINUTES_IN_HOUR;

    return(
      <select {...this.props} defaultValue={defaultTime} onChange={this._handleChange.bind(this)}>
        {this._getOptions()}
      </select>
    );
  }
}

export default Time;