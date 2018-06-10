/* eslint-disable no-prototype-builtins */
import React from 'react'
import PropTypes from 'prop-types'
import formItems from './formItems'
import FormItem from './FormItem'
import connector from '../connector'

const FormItems = ({ required, selected, actions, formItemDecorator }) =>
  selected.map((name, index) => {
    if (!formItems.hasOwnProperty(name)) {
      throw new Error('form item was not found')
    }

    const { component, rules, label } = formItems[name]

    return (
      <FormItem
        isRequired={!!required[index]}
        onClose={() => actions.filter.remove(name)}
        key={index}
        title={label}
      >
        {formItemDecorator({ name, rules })(component)}
      </FormItem>
    )
  })

FormItems.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  required: PropTypes.array.isRequired,
  formItemDecorator: PropTypes.func.isRequired,

}

export default connector(FormItems)
