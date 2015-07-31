import React from 'react';
import { Calendar } from '../src/react-dately';

class CalendarInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this._documentClickHandler = (e) => this._documentClick(e);
  }

  componentDidMount() {
    document.addEventListener('click', this._documentClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._documentClickHandler);
  }

  _documentClick(e) {
    var componentNode = React.findDOMNode(this);
    this.setState({isOpen: componentNode.contains(e.target)});
  }

  _handleCalendarClick(date) {
    this.props.onDateSelect(date);
    this.setState({isOpen: false});
  }

  render() {

    var { date, wrapperClassName, inputClassName, placeholder, calendarProps, hiddenValue, formatDate } = this.props;
    
    return(
      <div className="cool">
        <input
          type="text"
          className={inputClassName}
          aria-haspopup={true}
          aria-readonly={false}
          aria-expanded={this.state.isOpen}
          placeholder={placeholder}
          value={formatDate(date)}
          readOnly
        />
        {
          this.state.isOpen &&
          <Calendar
            date={date}
            onDateSelect={this._handleCalendarClick.bind(this)}
            minDay={this.props.minDay}
            maxDay={this.props.maxDay}
            {...calendarProps}
          />
        }
      </div>
    );
  }
}

CalendarInput.propTypes = {
  date: React.PropTypes.instanceOf(Date),
  wrapperClassName: React.PropTypes.oneOfType(
    [React.PropTypes.string, React.PropTypes.object]
  ),
  inputClassName: React.PropTypes.oneOfType(
    [React.PropTypes.string, React.PropTypes.object]
  ),
  placeholder: React.PropTypes.string,
  calendarProps: React.PropTypes.object,
  hiddenValue: React.PropTypes.bool,
  formatDate: React.PropTypes.func,
  onDateSelect: React.PropTypes.func
};

CalendarInput.defaultProps = {
  date: new Date(),
  wrapperClassName: null,
  inputClassName: null,
  placeholder: null,
  minDay: new Date(),
  calendarProps: {
    modifiers: 'cal--small',
    trimWeekdays: 2
  },
  formatDate: date => date,
  onDateSelect: date => date
};

export default CalendarInput;