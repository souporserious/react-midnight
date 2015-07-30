const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function clone(d) {
  return new Date(d.getTime());
}

export function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function getDaysInMonth(d) {

  let resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

export function getWeeks(d, firstDayOfWeek = 0, forceSixRows = false) {

  let daysInMonth = getDaysInMonth(d);
  let days = [];
  let week = [];
  let weeks = [];

  // get all days in a month
  for(let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(d.getFullYear(), d.getMonth(), i));
  }

  // build weeks array
  days.forEach(day => {
    if(week.length > 0 && day.getDay() === firstDayOfWeek) {
      weeks.push(week);
      week = [];
    }
    
    week.push(day);

    if(days.indexOf(day) === days.length - 1) {
      weeks.push(week);
    }
  });

  // unshift days to start the first week
  const firstWeek = weeks[0];

  for(let i = 7 - firstWeek.length; i > 0; i--) {
    let outsideDate = clone(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
    daysInMonth++;
  }

  // push days until the end of the last week
  const lastWeek = weeks[weeks.length - 1];

  for(let i = lastWeek.length; i < 7; i++) {
    let outsideDate = clone(lastWeek[lastWeek.length - 1]);
    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(outsideDate);
    daysInMonth++;
  }

  // handle six rows if we need to
  if(forceSixRows && daysInMonth < 42) {

    let lastDayOfMonth = (weeks[weeks.length - 1][6]);
    let lastWeek = [];
    let i = 1;

    while(daysInMonth < 42) {

      let lastDayOfMonthClone = clone(lastDayOfMonth);
      let day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i));

      if(lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
        weeks.push(lastWeek);
        lastWeek = [];
      }
      
      lastWeek.push(day);

      daysInMonth++;
      i++;
    }

    // push last week after finishing loop
    weeks.push(lastWeek);
  }

  return weeks;
}

export function navigateMonth(d, direction) {
  let currMonth = clone(d);
  let newMonth = currMonth.setMonth(d.getMonth() + direction);
  return new Date(newMonth); 
}

export function isOutsideMonth(d1, d2) {
  return d1.getMonth() !== d2.getMonth();
}

export function isBeforeDay(d1, d2) {
  d2 = clone(d2);
  d2.setHours(0, 0, 0, 0);
  return d1 < d2;
}

export function isAfterDay(d1, d2) {
  d2 = clone(d2);
  d2.setHours(0, 0, 0, 0);
  return d1 > d2;
}

export function isSame(d1, d2, type = 'day') {

  const is = {};

  is.year = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear();

  is.month = (d1, d2) =>
    d1.getMonth() === d2.getMonth() && is.year(d1, d2);

  is.day = (d1, d2) =>
    d1.getDate() === d2.getDate() && is.month(d1, d2);

  if(Array.isArray(d2)) {
    for(let i = d2.length; i--;) {
      if(is[type](d1, d2[i])) return i;
    }
    return false;
  } else {
    return is[type](d1, d2);
  }
}

export function formatMonth(d) {
  return `${MONTHS[d.getMonth()]}`;
}

export function formatYear(d) {
  return d.getFullYear();
}