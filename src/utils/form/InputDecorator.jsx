/* eslint-disable class-methods-use-this */
import React from 'react'
import isEmpty from 'lodash/isEmpty'
import isPrimitive from '../isPrimitive'
import validationRules from './rules'

const InputDecorator = ({ name }, Input, onChange, formValues) =>
  class extends React.Component {
    constructor(props) {
      super(props)
      const initialValue = formValues[name] || Input.props.initial || ''
      this.state = {
        value: initialValue,
        showValidation: false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.showValidationMessage = this.showValidationMessage.bind(this)

      onChange(name, initialValue)
    }

    handleChange(e) {
      const value = isPrimitive(e) ? e : e.target.value
      this.setState({ value })
      onChange(name, value)
    }

    validate(value, rule) {
      // eslint-disable-next-line no-prototype-builtins
      if (!validationRules.hasOwnProperty(rule)) {
        return true
      }
      const validator = validationRules[rule]

      if (validator.validate(this.state.value)) {
        return validator.message
      }

      return null
    }

    showValidationMessage(rules) {
      const messages = rules.map(rule =>
        this.validate(this.state.value, rule))
        .filter(e => e)

      if (isEmpty(messages)) {
        return false
      } else if (messages.length === 1) {
        return messages[0]
      }

      return messages.join(', ')
    }

    render() {
      return React.cloneElement(Input, {
        error: false,
        value: this.state.value,
        helperText: this.showValidationMessage(Input.props.rules),
        onChange: this.handleChange,
      })
    }
  }

export default InputDecorator

