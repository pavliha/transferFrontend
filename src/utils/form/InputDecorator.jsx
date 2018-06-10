import React from 'react'
import isPrimitive from '../isPrimitive'

const InputDecorator = ({ name }, Input, onChange, form) =>
  class extends React.Component {
    constructor(props) {
      super(props)
      const initialValue = form[name] || Input.props.initial || ''
      this.state = { value: initialValue }
      this.handleChange = this.handleChange.bind(this)
      onChange(name, initialValue)
    }

    handleChange(e) {
      const value = isPrimitive(e) ? e : e.target.value
      this.setState({ value })
      onChange(name, value)
    }

    render() {
      return React.cloneElement(Input, {
        value: this.state.value,
        onChange: this.handleChange,
      })
    }
  }

export default InputDecorator

