import React, { Component } from 'react'
import contextTypes from './context-types'

export default function withCalendarProps(ComposedComponent) {
  return class extends Component {
    static displayName = 'calendarPropsDecorator'
    static contextTypes = contextTypes

    render() {
      return (
        <ComposedComponent {...this.props} calendar={{...this.context}}/>
      )
    }
  }
}
