import React from 'react'
import InputDecorator from './InputDecorator'

const FormBaseHOC = (Component) =>
  class extends React.Component {
    state = {
      formItems: {},
      showErrors: true,
    }

    setFormItemValue = (name, value) => {
      const { formItems } = this.state

      formItems[name] = {
        value,
        displayErrors: false,
        errorMessages: '',
      }

      this.setState({ formItems })
    }

    invalid = (name, message) => {
      const { formItems } = this.state

      if (this.state.showErrors) {
        formItems[name].displayErrors = true
        formItems[name].errorMessages = message
      }
      this.setState({ formItems })
    }

    formItemDecorator = Input => {
      const { formItems } = this.state

      const NewInput = InputDecorator(Input, formItems, this.setFormItemValue, this.invalid)

      return <NewInput />
    }

    validate = () => {
      this.setState({ showErrors: true })
      return new Promise((resolve, reject) => {
        resolve(this.state.formItems)
      })
    }

    render() {
      const form = {
        validate: this.validate,
      }
      return <Component
        {...this.props}
        form={form}
        validate={this.validate}
        formItemDecorator={this.formItemDecorator}
      />
    }
  }

export default FormBaseHOC
