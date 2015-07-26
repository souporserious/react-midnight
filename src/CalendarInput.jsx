import React, { Component, PropTypes } from 'react';
import Calendar from './Calendar';

class CalendarInput extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    calendarProps: PropTypes.object,
    hiddenValue: PropTypes.bool,
    formatDate: PropTypes.func,
    onDateSelect: PropTypes.func
  }

  static defaultProps = {
    date: new Date(),
    wrapperClassName: null,
    inputClassName: null,
    placeholder: null,
    calendarProps: {
      modifiers: 'small',
      trimWeekdays: 2
    },
    hiddenValue: false, // strips name from main input into a hidden one
    formatDate: date => date,
    onDateSelect: () => null
  }

  state = {
    isOpen: false
  }

  _documentClickHandler = null

  componentWillMount() {
    this._documentClickHandler = (e) => this._documentClick(e);
    document.addEventListener('click', this._documentClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._documentClickHandler);
  }

  _documentClick(e) {
    const componentNode = React.findDOMNode(this);
    this.setState({isOpen: componentNode.contains(e.target)});
  }

  _handleCalendarClick(date) {
    this.props.onDateSelect(date);
    this.setState({isOpen: false});
  }

  render() {

    let {date, wrapperClassName, inputClassName, placeholder, calendarProps, hiddenValue} = this.props;
    let formattedDate = this.props.formatDate(date);

    return(
      <div className={wrapperClassName}>
        <input
          type="text"
          className={inputClassName}
          aria-haspopup={true}
          aria-readonly={false}
          aria-expanded={this.state.isOpen}
          placeholder={placeholder}
          value={formattedDate}
          readOnly
        />
        {
          this.state.isOpen &&
          <Calendar
            date={date}
            onDateSelect={::this._handleCalendarClick}
            {...calendarProps}
          />
        } {
          hiddenValue &&
          <input type="hidden" value={date.getTime()} />
        }
      </div>
    );
  }
}

export default CalendarInput;