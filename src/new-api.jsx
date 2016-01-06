const currDate = new Date()

<Dately
  date={currDate}
  minDay={null}
  maxDay={null}
  disabledDays={null}
  selectedDays={null}
  trimWeekdays={null}
  weekStartsOn={0}
  forceSixRows={true}
  onDateSelect={() => null}
  renderWeek={(days) => days}
  renderDay={(day) => day}
>
  {(weekdays, weeks) => {
    let monthLabel = formatMonth(currDate)
    let yearLabel = formatYear(currDate)

    return (
      <div className={classNames}>
        <header className="cal__header">
          <PrevMonth />
          <div className="cal__month-year">
            <div className="cal__month">{monthLabel}</div>
            <div className="cal__year">{yearLabel}</div>
          </div>
          <NextMonth />
        </header>
        <table className="cal__table">
          <thead>
            <tr className="cal__weekdays">
              {weekdays.map(weekday =>
                <th
                  scope="col"
                  title={weekday}
                  className="cal__weekday"
                >
                  {weekday}
                </div>
              )}
            </tr>
          </thead>
          {weeks.map(week =>
            <tr className="cal__week">
              {week.map(day =>
                <div>{day}</div>
              )}
            </tr>
          )}
        </table>
      </div>
    )
  }}
</Dately>