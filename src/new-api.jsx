<Dately
  date={new Date()}
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
{(currDate, weekdays, weeks) => {
  let monthLabel = formatMonth(currDate);
  let yearLabel = formatYear(currDate);

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
        {weekdays.map(weekday =>
          <div>{weekday}</div>
        )}
        {weeks.map(week =>
          <div>
            {week.map(day =>
              <div>{day}</div>
            )}
          </div>
        )}
      </table>
    </div>
  );
}}
</Dately>