import React from 'react'
import InputDecorator from './InputDecorator'

const FormBaseHOC = (Component) =>
  class extends React.Component {
    state = {
      form: {},
    }

    formItemDecorator = params => Input => {
      const { form } = this.state
      const onChange = (key, value) => {
        form[key] = value
        this.setState({ form })
      }
      const NewInput = InputDecorator(params, Input, onChange, form)
      return <NewInput />
    }

    render() {
      return <Component
        {...this.props}
        form={this.state.form}
        formItemDecorator={this.formItemDecorator}
      />
    }
  }

export default FormBaseHOC
