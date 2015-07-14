import React, { Component, PropTypes } from 'react';
import Calendar from './Calendar';

class CalendarInput extends Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    calendarProps: PropTypes.object,
    formatDate: PropTypes.func,
    onDateSelect: PropTypes.func
  }

  static defaultProps = {
    date: new Date(),
    wrapperClassName: null,
    inputClassName: null,
    placeholder: null,
    calendarProps: {modifiers: 'small'},
    formatDate: day => day,
    onDateSelect: () => null
  }

  state = {
    isOpen: false
  }

  componentDidMount() {
    document.addEventListener('click', ::this._documentClickHandler);
  }

  componentDidUnmount() {
    document.removeEventListener('click', ::this._documentClickHandler);
  }

  _documentClickHandler(e) {
    const componentNode = React.findDOMNode(this);
    this.setState({isOpen: componentNode.contains(e.target)});
  }

  _handleCalendarClick(day) {
    this.props.onDateSelect(day);
  }

  render() {

    const formattedDate = this.props.formatDate(this.props.date);

    return(
      <div className={this.props.wrapperClassName}>
        <input
          type="text"
          className={this.props.inputClassName}
          placeholder={this.props.placeholder}
          value={formattedDate}
          readOnly
        />
        {
          this.state.isOpen &&
          <Calendar
            onDaySelect={::this._handleCalendarClick}
            {...this.props.calendarProps}
          />
        }
      </div>
    );
  }
}

export default CalendarInput;