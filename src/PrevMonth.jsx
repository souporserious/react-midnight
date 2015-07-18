import React, { Component, PropTypes } from 'react';

class PrevMonth extends Component {

  static propTypes = {
    inner: PropTypes.node,
    disable: PropTypes.bool
  }

  static defaultProps = {
    inner: 'Prev',
    disable: false
  }

  handleClick() {
    let {onClick} = this.props;
    if(this.props.disable) return;
    onClick && onClick.call(this);
  }

  render() {

    let classes = 'cal__nav cal__nav--prev';

    if(this.props.disable) {
      classes += ' cal__nav--disabled';
    }

    return(
      <button
        className={classes}
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