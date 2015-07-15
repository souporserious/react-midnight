import React, { Component, PropTypes } from 'react';

class Time extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    pad: PropTypes.bool,
    onTimeSelect: React.PropTypes.func
  }

  static defaultProps = {
    date: new Date(),
    pad: true,
    onTimeSelect: () => null
  }

  _pad(n) {
    return (n > 9) ? n : '0' + n;
  }

  _format(d) {

    let h = d.getHours();
    let m = this._pad(d.getMinutes());
    let AMPM = (h < 12) ? 'AM' : 'PM';

    // convert to 12 hour clock
    h = (h % 12) || 12;
    
    // pad with a 0
    if(this.props.pad) {
      h = this._pad(h);
    }
    
    return `${h}:${m} ${AMPM}`;
  }

  // look into optimizing, probably don't need to get a new date for every time
  // should be able to store current day and add whatever seconds we need
  // formatting should be easy if we have a start date and increment that
  _getOptions() {

    let date = this.props.date;
    let options = [];
    
    // set to beginning of day
    date.setHours(0, 0, 0, 0);
    
    // loop through half hour increments
    for(let i = 0; i < 48; i++) {
      let time = new Date(date.getTime() + (i * 1800000)); // should allow different increments
      let display = this._format(time);
      options.push(<option key={time} value={time}>{display}</option>);
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