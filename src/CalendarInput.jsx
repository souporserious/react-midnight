import React, { Component, PropTypes } from 'react';
import Calendar from './Calendar';

class CalendarInput extends Component {

  static defaultProps = {
    placeholderText: null
    // format: 'DD/MM/YYYY', coming soon
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

  render() {
    return(
      <div className="cal__input">
        <input type="text" placeholder={this.props.placeholderText} readOnly />
        {this.state.isOpen && <Calendar />}
      </div>
    );
  }
}

export default CalendarInput;