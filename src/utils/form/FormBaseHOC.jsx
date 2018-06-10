import React from 'react'
import InputDecorator from './InputDecorator'

const FormBaseHOC = (Component) =>
  class extends React.Component {
    state = {
      formValues: {},
    }

    formItemDecorator = params => Input => {
      const { formValues } = this.state
      const onChange = (key, value) => {
        formValues[key] = value
        this.setState({ formValues })
      }

      const NewInput = InputDecorator(params, Input, onChange, formValues)
      return <NewInput />
    }

    render() {
      return <Component
        {...this.props}
        form={this.state.formValues}
        formItemDecorator={this.formItemDecorator}
      />
    }
  }

export default FormBaseHOC
