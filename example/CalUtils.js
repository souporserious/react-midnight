const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// export function isPastDay(d) {
//   let today = new Date();
//   today.setHours(0, 0, 0, 0);
//   return d < today;
// }

// export function isSameDay(d1, d2) {
//   d1.setHours(0, 0, 0, 0);
//   d2.setHours(0, 0, 0, 0);
//   return d1.getTime() === d2.getTime();
// }

// export function isBetween(d, d1, d2) {
//   d.setHours(0, 0, 0, 0);
//   d1.setHours(0, 0, 0, 0);
//   d2.setHours(0, 0, 0, 0);
//   return d1 < d && d < d2;
// }

export default {

  addMonths(d, months) {
    const newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  clone(d) {
    return new Date(d.getTime());
  },

  startOfMonth(d) {
    const newDate = this.clone(d);
    newDate.setDate(1);
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
  },

  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getLastDayOfMonth(d) {
    const daysInMonth = this.getDaysInMonth(d);
    return new Date(d.getFullYear(), d.getMonth(), daysInMonth);
  },

  getFirstDayOfWeek(d) {

    let day = d.getDay() || 7;
    
    if(day !== 1) {
      d.setHours(-24 * (day - 1));
    }
    
    return d.getDay();
  },

  getDaysInMonth(d) {

    let resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  navigateMonth(d, direction) {
    
    let currMonth = d.getMonth();
    let newDate = new Date(d.setMonth(direction + currMonth)); 

    return newDate;
  },

  getWeekArray(d, firstDayOfWeek = 0) {

    const daysInMonth = this.getDaysInMonth(d);

    let dayArray = [];
    let week = [];
    let weekArray = [];
    let dayCount = 0;

    // get all days in a month
    for(let i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
      dayCount++;
    }

    // build weeks array
    dayArray.forEach(day => {
      if(week.length > 0 && day.getDay() === firstDayOfWeek) {
        weekArray.push(week);
        week = [];
      }
      
      week.push(day);

      if(dayArray.indexOf(day) === dayArray.length - 1) {
        weekArray.push(week);
      }
    });

    // unshift days to start the first week
    const firstWeek = weekArray[0];

    for(let i = 7 - firstWeek.length; i > 0; i--) {
      let outsideDate = this.clone(firstWeek[0]);
      outsideDate.setDate(firstWeek[0].getDate() - 1);
      firstWeek.unshift(outsideDate);
      dayCount++;
    }

    // push days until the end of the last week
    const lastWeek = weekArray[weekArray.length - 1];

    for(let i = lastWeek.length; i < 7; i++) {
      let outsideDate = this.clone(lastWeek[lastWeek.length - 1]);
      outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
      lastWeek.push(outsideDate);
      dayCount++;
    }

    // if less than 42 days we know it won't have 6 rows
    // so lets add however many we need to equal 42
    if(dayCount < 42) {

      let lastDayOfMonth = (weekArray[weekArray.length - 1][6]);
      let lastWeek = [];
      let i = 1;

      while(dayCount < 42) {

        let lastDayOfMonthClone = this.clone(lastDayOfMonth);
        let day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i));

        if(lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
          weekArray.push(lastWeek);
          lastWeek = [];
        }
        
        lastWeek.push(day);

        dayCount++;
        i++;
      }

      // push last week after finishing loop
      weekArray.push(lastWeek);
    }

    // let prependWeek = this.getFirstDayOfMonth(d).getDay() >= 4;
    // let appendWeek = this.getLastDayOfMonth(d).getDay() <= 4;

    // // prepend a week if the first day begins before Thursday
    // if(prependWeek && daysInMonth < 28) {

    //   let prependSixthRow = [];

    //   for(let i = 7; i > 0; i--) {
    //     let outsideDate = this.clone(firstWeek[0]);
    //     outsideDate.setDate(firstWeek[0].getDate() - i);
    //     prependSixthRow.push(outsideDate);
    //   }

    //   weekArray.unshift(prependSixthRow);
    // }

    // add a week if the last day is on a Saturday
    // if(prependWeek || appendWeek) {

    //   let appendSixthRow = [];

    //   for(let i = 1; i < 8; i++) {
    //     let outsideDate = this.clone(lastWeek[lastWeek.length - 1]);
    //     outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + i);
    //     appendSixthRow.push(outsideDate);
    //   }

    //   weekArray.push(appendSixthRow);
    // }

    return weekArray;
  },

  getModifiersForDay() {

    let modifiers = [];

    if(modifierFunctions) {
      for(let modifier in modifierFunctions) {
        
        let func = modifierFunctions[modifier];

        if(func(d)) {
          modifiers.push(modifier);
        }
      }
    }

    return modifiers;
  },

  isDayOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth();
  },

  isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();
  },

  formatMonthTitle(d) {
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  },

  formatMonth(d) {
    return `${MONTHS[d.getMonth()]}`;
  },

  formatYear(d) {
    return d.getFullYear();
  }
};