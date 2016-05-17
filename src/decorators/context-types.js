import { PropTypes } from 'react'

export default {
  id: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weeks: PropTypes.array,
  weekdays: PropTypes.array,
  monthLabel: PropTypes.string,
  yearLabel: PropTypes.number,
  minDay: PropTypes.instanceOf(Date),
  maxDay: PropTypes.instanceOf(Date),
  rules: PropTypes.objectOf(PropTypes.func),
  disabledRules: PropTypes.objectOf(PropTypes.func),
  dayEvents: PropTypes.objectOf(PropTypes.func),
  renderDay: PropTypes.func,
  setDate: PropTypes.func,
  navigateWeek: PropTypes.func,
  navigateMonth: PropTypes.func
}
