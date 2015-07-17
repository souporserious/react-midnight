import React, { Component, PropTypes } from 'react';

class NextMonth extends Component {

  static propTypes = {
    inner: PropTypes.node
  }

  static defaultProps = {
    inner: 'Next'
  }

  handleClick() {
    let {onClick} = this.props;
    onClick && onClick.call(this);
  }

  render() {
    return(
      <button
        className="cal__nav cal__nav--next"
        role="button"
        title="Next month"
        onClick={::this.handleClick}
      >
        {this.props.inner}
      </button>
    )
  }
}

export default NextMonth;