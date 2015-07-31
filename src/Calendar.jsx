import React, { Component, PropTypes } from 'react';
import PrevMonth from './PrevMonth';
import NextMonth from './NextMonth';
import { getWeeks, navigateMonth, isSame, isBeforeDay, isAfterDay, isOutsideMonth, formatMonth, formatYear } from './utils';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Day extends Component {

  _handleDateSelect(day) {
    this.props.onDateSelect(day);
  }

  _renderDay(day) {
    return this.props.renderDay(day);
  }

  render() {

    const {month, date, disabledDays, minDay, maxDay, selectedDays, outsideDays, onClick} = this.props;

    let className = 'cal__day';
    let modifiers = [];
    let onDayClick = this._handleDateSelect.bind(this, date);

    const isToday = isSame(date, new Date());

    if(isToday) {
      modifiers.push('today');
    }

    const isOutside = isOutsideMonth(date, month);

    if(isOutside) {
      modifiers.push('outside');
    }

    const isDisabled = disabledDays ? isSame(date, disabledDays) : null;
    const isBefore = minDay ? isBeforeDay(date, minDay) : null;
    const isAfter = maxDay ? isAfterDay(date, maxDay) : null;

    if(isDisabled || isBefore || isAfter) {
      modifiers.push('disabled');
      onDayClick = null;
    }

    if(selectedDays) {

      const isSelected = isSame(date, selectedDays);

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
        className={className}
        onClick={onDayClick}
      >
        {this._renderDay(date)}
      </td>
    );
  }
}

class Week extends Component {

  render() {

    let days = this.props.days.map(day =>
      <Day
        {...this.props}
        key={day.getTime()}
        date={day}
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
    minDay: PropTypes.instanceOf(Date),
    maxDay: PropTypes.instanceOf(Date),
    disabledDays: PropTypes.array,
    selectedDays: PropTypes.array,
    trimWeekdays: PropTypes.number,
    weekStartsOn: PropTypes.number,
    forceSixRows: PropTypes.bool,
    outsideDays: PropTypes.bool,
    prevHTML: PropTypes.node,
    nextHTML: PropTypes.node,
    prevDisabled: PropTypes.bool,
    nextDisabled: PropTypes.bool,
    onDateSelect: PropTypes.func,
    renderDay: PropTypes.func
  }

  static defaultProps = {
    date: new Date(),
    minDay: null,
    maxDay: null,
    disabledDays: null,
    selectedDays: null,
    trimWeekdays: null,
    weekStartsOn: 0,
    forceSixRows: true,
    outsideDays: true,
    prevHTML: '',
    nextHTML: '',
    onDateSelect: () => null,
    renderDay: day => day.getDate()
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
    if(this.props.month !== nextProps.month) {
      this.setState({month: nextProps.date});
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

    // finally sort the dates so they're in order
    mixed.sort((a, b) => {
      a = a.getTime();
      b = b.getTime();
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  _renderWeekdays() {

    let weekdays = WEEKDAYS.slice(0);
    let sortedWeekdays = weekdays.concat(weekdays.splice(0, this.props.weekStartsOn));

    var getDays = () => {
      return sortedWeekdays.map((weekday, index) => {
        let trim = this.props.trimWeekdays;
        let weekdayTrimmed = trim !== null ? weekday.substring(0, parseInt(trim)) : weekday;
        return (
          <th
            key={index}
            scope="col"
            title={weekday}
            className="cal__weekday"
          >
            {weekdayTrimmed}
          </th>
        );
      });
    };
    
    return(
      <thead>
        <tr className="cal__weekdays">
          {getDays()}
        </tr>
      </thead>
    );
  }

  _renderWeeksInMonth() {

    const { month } = this.state;
    const { weekStartsOn, forceSixRows } = this.props;

    let weeks = getWeeks(month, weekStartsOn, forceSixRows).map((week, index) =>
      <Week
        {...this.props}
        key={week[0].getTime()}
        days={week}
        month={month}
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

  render() {

    const { className, minDay, maxDay } = this.props;
    const { month } = this.state;

    let classes = [];
    let modifiers = this.props.modifiers ? this.props.modifiers.split(',') : null;
    let classNames = 'cal';

    if(className) {
      classes.push(className);
    }
    if(modifiers) {
      classes.push(modifiers);
    }

    classNames += classes.map(className => ` ${className}`).join('');

    let monthLabel = formatMonth(month);
    let yearLabel = formatYear(month);

    // disable prev/next buttons when min/max days set
    let prevDisabled, nextDisabled = false;

    if(minDay && isSame(month, minDay, 'month')) {
      prevDisabled = true;
    }

    if(maxDay && isSame(month, maxDay, 'month')) {
      nextDisabled = true;
    }

    return(
      <div className={classNames}>
        <header className="cal__header">
          <PrevMonth
            onClick={this._navigate.bind(this, -1)}
            inner={this.props.prevHTML}
            disable={prevDisabled}
          />
          <div className="cal__month-year">
            <div className="cal__month">{monthLabel}</div>
            <div className="cal__year">{yearLabel}</div>
          </div>
          <NextMonth
            onClick={this._navigate.bind(this, 1)}
            inner={this.props.nextHTML}
            disable={nextDisabled}
          />
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