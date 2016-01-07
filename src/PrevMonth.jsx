import React, { Component, PropTypes } from 'react'

class PrevMonth extends Component {
  static propTypes = {
    innerHTML: PropTypes.node,
    disable: PropTypes.bool
  }

  static defaultProps = {
    innerHTML: 'Prev',
    disable: false
  }

  handleClick = () => {
    let { onClick } = this.props
    if (this.props.disable) return;
    onClick && onClick.call(this);
  }

  render() {
    const { disable, controls, innerHTML } = this.props
    let classes = 'cal__nav cal__nav--prev'

    if (disable) {
      classes += ' cal__nav--disabled'
    }

    return (
      <button
        className={classes}
        title="Previous month"
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

export default PrevMonth
