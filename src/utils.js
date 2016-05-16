const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS_IN_WEEK = 7

const utils = {
  clone(d) {
    return new Date(d.getTime())
  },

  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1)
  },

  getLastDayOfMonth(d) {
    const resultDate = utils.getFirstDayOfMonth(d)

    resultDate.setMonth(resultDate.getMonth() + 1)
    resultDate.setDate(resultDate.getDate() - 1)

    return resultDate.getDate()
  },

  getDaysInMonth(d) {
    const numberOfDaysInMonth = utils.getLastDayOfMonth(d)
    const days = []

    // get all days in a month
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      days.push(new Date(d.getFullYear(), d.getMonth(), i))
    }

    return days
  },

  getWeeks(d, firstDayOfWeek = 0, forceSixRows = false) {
    let days = utils.getDaysInMonth(d)
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

  navigateMonth(d, direction) {
    const currMonth = utils.clone(d)
    const newMonth = currMonth.setMonth(d.getMonth() + direction, 1)
    return new Date(newMonth)
  },

  navigateWeek(d, direction) {
    const currWeek = utils.clone(d)
    const newWeek = currWeek.setDate(d.getDate() + (7 * direction))
    return new Date(newWeek)
  },

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

  isBeforeDay(d1, d2) {
    d2 = utils.clone(d2)
    d2.setHours(0, 0, 0, 0)
    return d1 < d2
  },

  isAfterDay(d1, d2) {
    d2 = utils.clone(d2)
    d2.setHours(0, 0, 0, 0)
    return d1 > d2
  },

  isOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth()
  },

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
      current = new Date(current.getTime() + (24 * 60 * 60 * 1000))
    }

    return days
  },

  getMonths() {
    return MONTHS
  },

  formatMonth(d) {
    return `${MONTHS[d.getMonth()]}`
  },

  formatYear(d) {
    return d.getFullYear()
  },

  addMinutesToDay(date, minutes) {
    // default to today's date
    date = date || new Date()

    // set to beginning of day
    date.setHours(0, 0, 0, 0)

    return new Date(date.getTime() + (minutes * 60000))
  },

  getMinutesFromDay(date) {

  },

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
