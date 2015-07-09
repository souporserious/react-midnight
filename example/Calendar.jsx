import React, { Component, PropTypes } from 'react';
import { formatMonth, formatYear, isSameDay, isDayOutsideMonth, isDayDisabled, getWeekArray, navigateMonth } from './utils';

// Dependencies
import classNames from 'classnames';

// Styles
import './calendar.scss';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Day extends Component {
    
    render() {

        const {month, date, disabledDays} = this.props;

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

        const isDisabled = isDayDisabled(date, disabledDays);

        if(isDisabled) {
            modifiers.push('disabled');
        }

        className += modifiers.map(modifier => ` ${className}--${modifier}`).join('');

        // if(isOutside && !enableOutsideDays) {
        //     return <div key={`outside${i}`} className={className}></div>;
        // }
        
        //const { onDayMouseEnter, onDayMouseLeave, onDayTouchTap, onDayClick } = this.props;
        
        // let tabIndex = null;

        // if((onDayTouchTap || onDayClick) && !isOutside) {
        //     tabIndex = -1;

        //     // focus on the first day of the month
        //     if(day.getDate() === 1) {
        //         tabIndex = this.props.tabIndex;
        //     }
        // }

        return(
            <td
              role="presentation"
              aria-label={date}
              onClick={this.props.onClick}
              className={className}
              >
                {date.getDate()}
            </td>
        );
    }
}

class Week extends Component {

    static defaultProps = {
        onDaySelect: () => {}
    }

    render() {

        let date = this.props.date,
            month = this.props.month;
        
        let days = this.props.days.map(day =>
            <Day
                key={day}
                date={day}
                month={month}
                onClick={this.props.onDaySelect.bind(null, day)}
                disabledDays={this.props.disabledDays}
            />
        );

        return(
            <tr className="cal__week">
                {days}
            </tr>
        );
    }
}

function normalizeDates(month, mixed) {

    let dates = [];

    for(let i = mixed.length; i--;) {

        let mix = mixed[i];

        // if it's a Date object already then push it
        // and contiue
        if(mix instanceof Date) {
            dates.push(mix);
            continue;
        }

        // test if digit and in between current month
        // or test to block day of week out somehow
        // reference pickadate and how they do it
        // just block out day for now
        if(/^\d+$/.test(mix)) {
            dates.push(new Date(month.getFullYear(), month.getMonth(), mix));
            continue;
        }

        if(Array.isArray(mix)) {
            dates.push(new Date(mix[0], mix[1], mix[2]));
            continue;
        }
    }

    return dates;
}

let d1 = new Date(2015,6,9);
let d2 = [ 1, 4, 7, [2015,6,8], [2015,6,19], new Date(2015,6,26) ];
let myDates = normalizeDates(d1, d2);

class Calendar extends Component {

    static propTypes = {
        
    }

    static defaultProps = {
        trimWeekdays: 1,
        datesToDisable: myDates
    }
    
    constructor(props) {
        super(props);
        this.state = {
            month: new Date()
        };
    }
    
    renderWeekdays() {
        
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

    renderWeeksInMonth() {

        const month = this.state.month;

        let weeks = getWeekArray(month).map((week, index) =>
            <Week
                key={week[0].toString()}
                days={week}
                month={this.state.month}
                onDaySelect={this.props.onDaySelect}
                disabledDays={this.props.datesToDisable}
            />
        );

        return (
            <tbody>
                {weeks}
            </tbody>
        );
    }
    
    navigate(direction) {
        let month = this.state.month;
        this.setState({ month: navigateMonth(month, direction) });
    }
    
    getModifiers(modifiers) {
        
        let arr = [];
        let len = modifiers ? modifiers.length : -1;
        
        if(len < 0) return null;
        
        for(let i = 0; i < len; i++) {
            arr.push('cal--' + modifiers[i].replace(/\s/g, ''));
        }
        
        return arr;
    }
    
    render() {
        
        let modifiers = this.getModifiers(this.props.modifiers && this.props.modifiers.split(','));
        let classes = classNames('cal', modifiers, this.props.className);

        let monthLabel = formatMonth(this.state.month);
        let yearLabel = formatYear(this.state.month);
        
        return (
            <div className={classes}>
                <header className="cal__header">
                    <a className="cal__nav cal__nav--prev" role="button" title="Previous month" onClick={this.navigate.bind(this, -1)}>Prev</a>
                    <div className="cal__month-year">
                        <div className="cal__month">{monthLabel}</div>
                        <div className="cal__year">{yearLabel}</div>
                    </div>
                    <a className="cal__nav cal__nav--next" role="button" title="Next month" onClick={this.navigate.bind(this, 1)}>Next</a>
                </header>
                <table className="cal__table">
                    {this.renderWeekdays()}
                    {this.renderWeeksInMonth()}
                </table>
            </div>
        );
    }
}

// function getMonthDateRange(year, month) {
//     var moment = require('moment');

//     // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
//     // array is 'year', 'month', 'day', etc
//     var startDate = moment([year, month - 1]);

//     // Clone the value before .endOf()
//     var endDate = moment(startDate).endOf('month');

//     // just for demonstration:
//     console.log(startDate.toDate());
//     console.log(endDate.toDate());

//     // make sure to call toDate() for plain JavaScript date type
//     return { start: startDate, end: endDate };
// }

/*
allow user to build custom wrappers
so maybe they can extend a class to gain access to methods?
look into it, it would be a cool feature

api:
<Calendar
    forceSixRows={}
    onMonthChange={}
    onDaySelect={}
    disabled={}
/>

HEAVILY INSPIRED FROM: https://github.com/gpbl/react-day-picker/blob/master/src/DayPicker.js
*/

export default Calendar;