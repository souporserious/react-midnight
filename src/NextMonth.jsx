import React, { Component, PropTypes } from 'react';

class NextMonth extends Component {

  static propTypes = {
    inner: PropTypes.node,
    disable: PropTypes.bool
  }

  static defaultProps = {
    inner: 'Next',
    disable: false
  }

  handleClick() {
    let {onClick} = this.props;
    if(this.props.disable) return;
    onClick && onClick.call(this);
  }

  render() {

    let classes = 'cal__nav cal__nav--next';

    if(this.props.disable) {
      classes += ' cal__nav--disabled';
    }

    return(
      <button
        className={classes}
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