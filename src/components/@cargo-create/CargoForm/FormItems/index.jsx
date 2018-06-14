/* eslint-disable no-prototype-builtins */
import React from 'react'
import PropTypes from 'prop-types'
import formItems from './formItems'
import FormItem from './FormItem'
import connector from '../connector'

const decorator = params => Input => React.cloneElement(Input, params)

const FormItems = ({ required, selected, actions, form }) =>
  selected.map((name, index) => {
    if (!formItems.hasOwnProperty(name)) {
      throw new Error('form item was not found')
    }

    const {
      values,
      errors,
      handleChange,
      handleBlur,
      setFieldValue,
      setFieldTouched,
    } = form

    const { component, label } = formItems[name]

    let Input = decorator({
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      error: !!errors[name],
      helperText: errors[name],

    })(component)

    if (name === 'from' || name === 'to') {
      Input = decorator({
        value: values[name],
        error: !!errors[name],
        onChange: setFieldValue,
        onBlur: setFieldTouched,
        helperText: errors[name],
      })(component)
    }

    return (
      <FormItem
        isRequired={!!required[index]}
        onClose={() => actions.filter.remove(name)}
        key={index}
        title={label}
      >
        {Input}
      </FormItem>
    )
  })

FormItems.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  required: PropTypes.array.isRequired,
  form: PropTypes.object.isRequired,

}

export default connector(FormItems)