import { PropTypes } from 'react'

export default {
  id: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weeks: PropTypes.array,
  weekdays: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  rules: PropTypes.object,
  disabledRules: PropTypes.object,
  onDateSelect: PropTypes.func,
  renderDay: PropTypes.func,
  setDate: PropTypes.func,
  navigateWeek: PropTypes.func,
  navigateMonth: PropTypes.func,

  onDayEvents: PropTypes.object
}
