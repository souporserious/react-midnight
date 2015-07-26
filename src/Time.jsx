import React, { Component, PropTypes, Children } from 'react';

const HOURS_IN_DAY = 24;
const HOURS_TO_NOON = HOURS_IN_DAY / 2;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

class Times extends Component {

  static propTypes = {
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    interval: PropTypes.number,
    separator: PropTypes.string,
    pad: PropTypes.bool,
    twelveHourClock: PropTypes.bool,
    humanize: PropTypes.bool,
    humanizeStrings: PropTypes.object,
    onTimeSelect: PropTypes.func,
    renderTime: PropTypes.func,
  }

  static defaultProps = {
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
    onTimeSelect: () => null,
    renderTime: (formatted, minutes) => {
      return(
        <option
          key={minutes}
          value={minutes}
        >
          {formatted}
        </option>
      )
    },
    // showSeconds: false
  }

  static toDate(minutes, date) {

    let newDate;

    // default to today's date
    date = date || new Date();

    // set to beginning of day
    date.setHours(0, 0, 0, 0);

    // merge dates
    newDate = new Date(date.getTime() + (minutes * 60000));

    // return selected date
    return newDate;
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

  _renderTime(formatted, minutes) {
    return this.props.renderTime(formatted, minutes);
  }

  _getTimes() {

    const {interval, startTime, endTime} = this.props;
    const timeLength = (endTime * MINUTES_IN_HOUR);
    let minutes = startTime * MINUTES_IN_HOUR;
    let times = [];

    for(; minutes < timeLength; minutes += interval) {
      let formatted = this._format(minutes);
      times.push(this._renderTime(formatted, minutes));
    }

    return times;
  }

  render() {

    let times = this._getTimes();

    return Children.only(
      this.props.children(times)
    );
  }
}

export default Times;