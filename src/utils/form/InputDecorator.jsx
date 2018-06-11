/* eslint-disable class-methods-use-this */
import React from 'react'
import isPrimitive from '../isPrimitive'
import validationRules from './rules'
import Validator from './Validator'

const InputDecorator = (Input, formItems, setFormItemValue, setInvalid) =>
  class extends React.Component {
    constructor(props) {
      super(props)
      const formItem = formItems[Input.props.name]

      let initialValue = Input.props.initial || ''

      if (formItem) {
        initialValue = formItem.value
      }

      this.state = {
        value: initialValue,
      }

      this.validateAndSetFormItem(initialValue)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      const value = isPrimitive(e) ? e : e.target.value

      this.setState({ value })

      this.validateAndSetFormItem(value)
    }

    validateAndSetFormItem(value) {
      const { name } = Input.props

      setFormItemValue(name, value)

      const validator = new Validator(value, validationRules)

      validator.fails((messages) => {
        const message = validator.compose(messages)
        setInvalid(name, message)
      })
    }

    render() {
      const { name } = Input.props

      const formItem = formItems[name]

      return React.cloneElement(Input, {
        error: formItem.displayErrors,
        value: this.state.value,
        helperText: formItem.errorMessages,
        onChange: this.handleChange,
      })
    }
  }

export default InputDecorator

