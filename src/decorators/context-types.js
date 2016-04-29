import { PropTypes } from 'react'

export default {
  id: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weeks: PropTypes.array,
  weekdays: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  rules: PropTypes.objectOf(PropTypes.func),
  disabledRules: PropTypes.objectOf(PropTypes.func),
  dayEvents: PropTypes.objectOf(PropTypes.func),
  renderDay: PropTypes.func,
  setDate: PropTypes.func,
  navigateWeek: PropTypes.func,
  navigateMonth: PropTypes.func
}
