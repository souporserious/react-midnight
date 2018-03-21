const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS_IN_WEEK = 7

const utils = {
  // Make a new Date pointing to the same time as `d`
  clone(d) {
    return new Date(d.getTime())
  },

  // Make a new date pointing to the first day of `d`'s month
  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1)
  },

  // Return the number of days in `d`'s month
  getDaysInMonth(d) {
    const resultDate = utils.getFirstDayOfMonth(d)

    // Bump it to the next month, then remove a day
    // so that it's on the last day of its original month
    resultDate.setMonth(resultDate.getMonth() + 1)
    resultDate.setDate(resultDate.getDate() - 1)

    return resultDate.getDate()
  },

  // Return an array of Dates, with one date
  // for each day in `d`'s month
  getDays(d) {
    let daysInMonth = utils.getDaysInMonth(d)
    let days = []

    // get all days in a month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(d.getFullYear(), d.getMonth(), i))
    }

    return days
  },

  // Get a two-dimensional array of Dates for `d`'s month.
  // Each inner array is one week.
  // Extra days will be added from other months to make each week complete.
  // Pass `0-7` as `firstDayOfWeek` to specify when weeks should begin (values correspond to `Date.getDay()`).
  // Pass `true` to `forceSixRows` to make sure each month gets six rows (this is for UI consistency).
  getWeeks(d, firstDayOfWeek = 0, forceSixRows = false) {
    let days = utils.getDays(d)
    let daysInMonth = days.length
    let week = []
    let weeks = []

    // build weeks array
    days.forEach(day => {
      if (week.length > 0 && day.getDay() === firstDayOfWeek) {
        weeks.push(week)
        week = []
      }

      week.push(day)

      if (days.indexOf(day) === days.length - 1) {
        weeks.push(week)
      }
    })

    // unshift days to start the first week
    const firstWeek = weeks[0]

    for (let i = DAYS_IN_WEEK - firstWeek.length; i > 0; i--) {
      const outsideDate = utils.clone(firstWeek[0])
      outsideDate.setDate(firstWeek[0].getDate() - 1)
      firstWeek.unshift(outsideDate)
      daysInMonth++
    }

    // push days until the end of the last week
    const lastWeek = weeks[weeks.length - 1]

    for (let i = lastWeek.length; i < DAYS_IN_WEEK; i++) {
      const outsideDate = utils.clone(lastWeek[lastWeek.length - 1])
      outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1)
      lastWeek.push(outsideDate)
      daysInMonth++
    }

    // handle six rows if we need to
    if (forceSixRows && daysInMonth < 42) {
      let lastDayOfMonth = (weeks[weeks.length - 1][6])
      let lastWeek = []
      let i = 1

      while (daysInMonth < 42) {
        let lastDayOfMonthClone = utils.clone(lastDayOfMonth)
        let day = new Date(lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + i))

        if (lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
          weeks.push(lastWeek)
          lastWeek = []
        }

        lastWeek.push(day)

        daysInMonth++
        i++
      }

      // push last week after finishing loop
      weeks.push(lastWeek)
    }

    return weeks
  },

  // Return a new date which is `direction` months away from `d`
  // (negative `direction` returns a date towards the past)
  navigateMonth(d, direction) {
    const currMonth = utils.clone(d)
    const newMonth = currMonth.setMonth(d.getMonth() + direction, 1)
    return new Date(newMonth)
  },

  // Return a new date which is `7 * direction` days away from `d`
  // (negative `direction` returns a date towards the past)
  navigateWeek(d, direction) {
    const currWeek = utils.clone(d)
    const newWeek = currWeek.setDate(d.getDate() + (7 * direction))
    return new Date(newWeek)
  },

  // Compare `d1` & `d2` with varying degrees of specificity: `"day"`, `"month"` or `"year"`
  // If `d2` is an array of dates, return true if _any_ dates match `d1`
  isSame(d1, d2, type = 'day') {
    const is = {}

    is.year = (d1, d2) => (
      d1.getFullYear() === d2.getFullYear()
    )

    is.month = (d1, d2) => (
      d1.getMonth() === d2.getMonth() && is.year(d1, d2)
    )

    is.day = (d1, d2) => (
      d1.getDate() === d2.getDate() && is.month(d1, d2)
    )

    if (!d1 || !d2) return false;

    if (d2.constructor === Array) {
      for (let i = d2.length; i--;) {
        if (is[type](d1, d2[i])) {
          return true
        }
      }
      return false
    } else {
      return is[type](d1, d2)
    }
  },

  // `true` if `d1` is before the beginning of `d2`'s day
  isBeforeDay(d1, d2) {
    d2 = utils.clone(d2)
    d2.setHours(0, 0, 0, 0)
    return d1 < d2
  },

  // `true` if `d1` is after the beginning of `d2`'s day
  isAfterDay(d1, d2) {
    d2 = utils.clone(d2)
    d2.setHours(0, 0, 0, 0)
    return d1 > d2
  },

  // `true` if d1 is in a different month than d2
  isOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth()
  },

  // Return an array of dates between `startDate` and `endDate`
  // The array will be ascending
  getDaysBetween(startDate, endDate) {
    // swap values if start date is after end date
    if (utils.isAfterDay(startDate, endDate)) {
      [startDate, endDate] = [endDate, startDate]
    }

    // if days are the same bail
    if (utils.isSame(startDate, endDate)) {
      return [startDate]
    }

    let days = []
    let current = startDate

    while (current <= endDate) {
      days.push(current)
      // Clone it to avoid side effects, then increment the date by 1
      current = new Date(current.getTime())
      current.setDate(current.getDate() + 1)
    }

    return days
  },

  // zero-indexed array of month names
  // eg, `getMonths()[0] // "January"`
  getMonths() {
    return MONTHS
  },

  // Get the month name for `d`'s month
  formatMonth(d) {
    return `${MONTHS[d.getMonth()]}`
  },

  // Get 4-digit year from `d`
  formatYear(d) {
    return d.getFullYear()
  },

  // Make a new date comprised of day(date) + minutes
  addMinutesToDay(date, minutes) {
    // default to today's date
    date = date || new Date()

    // set to beginning of day
    date.setHours(0, 0, 0, 0)

    return new Date(date.getTime() + (minutes * 60000))
  },

  getMinutesFromDay(date) {

  },

  // Returns hyphenized keys from `rules` where its tests return true
  // - `rules`: modifier-test pairs where:
  //   - `test` will be called with `test(day, month)` for each calendar day
  //   - `modifier` will be hyphenized into a class name if `test(day, month)` returns true
  getModifiers(rules, day, month) {
    const modifiers = []

    Object.keys(rules).forEach(key => {
      if (rules[key](day, month)) {
        // camelCase to hyphen friendly class name
        const modifier = key.replace(/[a-z][A-Z]/g, str =>
          `${str[0]}-${str[1].toLowerCase()}`
        )
        modifiers.push(modifier)
      }
    })

    return modifiers
  }
}

export default utils
