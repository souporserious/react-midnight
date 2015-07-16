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
    // showSeconds: true
  }

  _pad(n) {
    return (n > 9) ? n : '0' + n;
  }

  // would be cool to allow formatting like this:
  // https://github.com/amsul/pickadate.js/blob/master/lib/picker.time.js#L593-L648
  // would get rid of the need for a shit load of props
  _format(d) {

    const {humanize, humanizeStrings, startTime, endTime, interval, twelveHourClock, pad, separator} = this.props;

    let h = d.getHours();
    let m = this._pad(d.getMinutes());
    let AMPM = (h < 12) ? 'AM' : 'PM';

    if(humanize) {
      if(h === startTime && m === '00') {
        return humanizeStrings.begin;
      }

      if(h === 12 && m === '00') {
        return humanizeStrings.middle;
      }

      if(h === (endTime - 1)) {
        if(interval === 60 || m === interval * ((MINUTES_IN_HOUR / interval) - 1)) {
          return humanizeStrings.end;
        }
      }
    }

    // convert to 12 hour clock
    if(twelveHourClock) {
      h = (h % 12) || 12;
    }

    // pad with a 0
    if(pad) {
      h = this._pad(h);
    }

    return twelveHourClock ? `${h}${separator}${m} ${AMPM}`: `${h}${separator}${m}`;
  }

  // look into optimizing, probably don't need to get a new date for every time
  // should be able to store current day and add whatever seconds we need
  // formatting should be easy if we have a start date and merge seconds in that
  _getOptions() {

    const {date, interval, startTime, endTime} = this.props;

    let options = [];
    let incrementLength = endTime * (MINUTES_IN_HOUR / interval);
    let i = startTime * (MINUTES_IN_HOUR / interval);

    // set to beginning of day
    date.setHours(0, 0, 0, 0);
    
    for(; i < incrementLength; i++) {
      let time = new Date(date.getTime() + (i * interval * 60000));
      let formatted = this._format(time);
      options.push(<option key={time} value={time}>{formatted}</option>);
    }

    return options;
  }

  _handleChange(e) {
    let date = new Date(React.findDOMNode(e.target).value);
    this.props.onTimeSelect(date);
  }

  render() {
    return(
      <select {...this.props} onChange={this._handleChange.bind(this)}>
        {this._getOptions()}
      </select>
    );
  }
}

export default Time;