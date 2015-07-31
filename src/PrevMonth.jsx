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

    const { disable } = this.props;
    let classes = 'cal__nav cal__nav--prev';

    if(disable) {
      classes += ' cal__nav--disabled';
    }

    return(
      <button
        className={classes}
        role="button"
        title="Previous month"
        type="button"
        aria-disabled={disable}
        onClick={::this.handleClick}
      >
        {this.props.inner}
      </button>
    )
  }
}

export default PrevMonth;
