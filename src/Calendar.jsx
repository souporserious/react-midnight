import React, { Component, PropTypes } from 'react';
import { formatMonth, formatYear, isSameDay, isDaySame, isDayOutsideMonth, getWeekArray, navigateMonth } from './utils';

// Dependencies
import classNames from 'classnames';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Day extends Component {

  _handleDateSelect(day) {
    this.props.onDateSelect(day);
  }

  render() {

    const {month, date, disabledDays, selectedDays, outsideDays, onClick} = this.props;

    let className = 'cal__day';
    let modifiers = [];

    const isToday = isSameDay(date, new Date());

    if(isToday) {
      modifiers.push('today');
    }

    const isOutside = isDayOutsideMonth(date, month);

    if(isOutside) {
      modifiers.push('outside');
    }

    const isDisabled = isDaySame(date, disabledDays);

    if(isDisabled) {
      modifiers.push('disabled');
    }

    if(selectedDays) {

      const isSelected = isDaySame(date, selectedDays);

      if(isSelected || isSelected === 0) {
        modifiers.push('selected');
      }

      if(isSelected === 0) {
        modifiers.push('selected-first');
      }

      if(isSelected === selectedDays.length - 1) {
        modifiers.push('selected-last');
      }
    }

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join('');

    if(isOutside && !outsideDays) {
      return <td aria-hidden="true" className={className} />;
    }

    return(
      <td
        role="presentation"
        aria-label={date}
        onClick={!isDisabled && this._handleDateSelect.bind(this, date)}
        className={className}
      >
        {date.getDate()}
      </td>
    );
  }
}

class Week extends Component {

  render() {

    const {date, month} = this.props;

    let days = this.props.days.map(day =>
      <Day
        key={day}
        date={day}
        month={month}
        disabledDays={this.props.disabledDays}
        selectedDays={this.props.selectedDays}
        outsideDays={this.props.outsideDays}
        onDateSelect={this.props.onDateSelect}
      />
    );

    return(
      <tr className="cal__week">
        {days}
      </tr>
    );
  }
}

class Calendar extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    weekdays: PropTypes.array,
    trimWeekdays: PropTypes.number,
    forceSixRows: PropTypes.bool,
    outsideDays: PropTypes.bool,
    events: PropTypes.array,
    onDateSelect: PropTypes.func
  }

  static defaultProps = {
    date: new Date(), // default month
    disabledDays: null,
    selectedDays: null,
    weekdays: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'], // custom weekdays (for locale)
    trimWeekdays: 1,
    forceSixRows: true,
    outsideDays: true,
    // show how we could map events using microformat
    // https://moz.com/blog/markup-events-hcalendar-microformat
    // https://developer.mozilla.org/en-US/docs/The_hCalendar_microformat
    events: [],
    onDateSelect: () => null
  }

  state = {
    month: this.props.date
  }

  componentWillMount() {
    if(this.props.selectedDays) {
      this._normalizeDates(this.props.selectedDays);
    }
    if(this.props.disabledDays) {
      this._normalizeDates(this.props.disabledDays);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedDays) {
      this._normalizeDates(nextProps.selectedDays);
    }
    if(nextProps.disabledDays) {
      this._normalizeDates(nextProps.disabledDays);
    }
  }

  _normalizeDates(mixed) {

    let month = new Date();

    for(let i = mixed.length; i--;) {

      let mix = mixed[i];

        // if it's a Date object already then push it
        // and contiue
        if(mix instanceof Date) {
          mixed[i] = mix;
          continue;
        }

        // test if digit and in between current month
        // or test to block day of week out somehow
        // reference pickadate and how they do it
        // just block out day for now
        if(/^\d+$/.test(mix)) {
          mixed[i] = new Date(month.getFullYear(), month.getMonth(), mix);
          continue;
        }

        if(Array.isArray(mix)) {
          mixed[i] = new Date(mix[0], mix[1], mix[2]);
          continue;
        }
      }

    // finally sort the array so it's in order
    mixed.sort((a, b) => {
      a = a.getTime();
      b = b.getTime();
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  _renderWeekdays() {

    var getDays = () => {
      return WEEKDAYS.map((weekday, index) => {
        let trim = this.props.trimWeekdays;
        let weekdayTrimmed = trim !== null ? weekday.substring(0, parseInt(trim)) : weekday;
        return <th key={index} scope="col" title={weekday}>{weekdayTrimmed}</th>
      });
    };
    
    return(
      <thead>
        <tr>
          {getDays()}
        </tr>
      </thead>
    );
  }

  _renderWeeksInMonth() {

    const month = this.state.month;

    let weeks = getWeekArray(month).map((week, index) =>
      <Week
        key={week[0].toString()}
        days={week}
        month={this.state.month}
        disabledDays={this.props.disabledDays}
        selectedDays={this.props.selectedDays}
        outsideDays={this.props.outsideDays}
        onDateSelect={this.props.onDateSelect}
      />
    );

    return(
      <tbody>
        {weeks}
      </tbody>
    );
  }

  _navigate(direction) {
    let month = this.state.month;
    this.setState({ month: navigateMonth(month, direction) });
  }

  _getModifiers(modifiers) {

    let arr = [];
    let len = modifiers ? modifiers.length : -1;
    
    if(len < 0) return null;
    
    for(let i = 0; i < len; i++) {
      arr.push('cal--' + modifiers[i].replace(/\s/g, ''));
    }
    
    return arr;
  }

  render() {

    let modifiers = this._getModifiers(this.props.modifiers && this.props.modifiers.split(','));
    let classes = classNames('cal', modifiers, this.props.className);

    let monthLabel = formatMonth(this.state.month);
    let yearLabel = formatYear(this.state.month);

    return (
      <div className={classes}>
        <header className="cal__header">
          <a className="cal__nav cal__nav--prev" role="button" title="Previous month" onClick={this._navigate.bind(this, -1)}>Prev</a>
          <div className="cal__month-year">
            <div className="cal__month">{monthLabel}</div>
            <div className="cal__year">{yearLabel}</div>
          </div>
          <a className="cal__nav cal__nav--next" role="button" title="Next month" onClick={this._navigate.bind(this, 1)}>Next</a>
        </header>
        <table className="cal__table">
          {this._renderWeekdays()}
          {this._renderWeeksInMonth()}
        </table>
      </div>
    );
  }
}

export default Calendar;