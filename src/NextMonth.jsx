import React, { Component, PropTypes } from 'react'

class NextMonth extends Component {
  static propTypes = {
    innerHTML: PropTypes.node,
    disable: PropTypes.bool
  }

  static defaultProps = {
    innerHTML: 'Next',
    disable: false
  }

  handleClick = () => {
    let { onClick } = this.props
    if (this.props.disable) return;
    onClick && onClick.call(this);
  }

  render() {
    const { disable, controls, innerHTML } = this.props
    let classes = 'cal__nav cal__nav--next'

    if (disable) {
      classes += ' cal__nav--disabled'
    }

    return (
      <button
        className={classes}
        title="Next month"
        type="button"
        aria-disabled={disable}
        aria-controls={controls}
        onClick={this.handleClick}
      >
        {innerHTML}
      </button>
    )
  }
}

export default NextMonth
