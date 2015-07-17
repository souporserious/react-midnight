import React, { Component, PropTypes } from 'react';

class PrevMonth extends Component {

  static propTypes = {
    inner: PropTypes.node
  }

  static defaultProps = {
    inner: 'Prev'
  }

  handleClick() {
    let {onClick} = this.props;
    onClick && onClick.call(this);
  }

  render() {
    return(
      <button
        className="cal__nav cal__nav--prev"
        role="button"
        title="Previous month"
        onClick={::this.handleClick}
      >
        {this.props.inner}
      </button>
    )
  }
}

export default PrevMonth;