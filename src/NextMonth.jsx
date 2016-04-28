import React, { Component, PropTypes } from 'react'

class NextMonth extends Component {
  static propTypes = {
    innerHTML: PropTypes.node,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    innerHTML: '',
    disabled: false
  }

  handleClick = () => {
    const { disabled, onClick } = this.props
    if (!disabled && onClick) {
      onClick.call(this)
    }
  }

  render() {
    const { disabled, controls, innerHTML } = this.props
    let classes = 'cal__nav cal__nav--next'

    if (disabled) {
      classes += ' cal__nav--disabled'
    }

    return (
      <button
        type="button"
        disabled={disabled}
        aria-controls={controls}
        title="Next month"
        className={classes}
        onClick={this.handleClick}
      >
        {innerHTML}
      </button>
    )
  }
}

export default NextMonth
