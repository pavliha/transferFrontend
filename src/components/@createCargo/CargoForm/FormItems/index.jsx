/* eslint-disable no-prototype-builtins */
import React from 'react'
import PropTypes from 'prop-types'
import filters from './formItems'
import FormLabel from './FormLabel'
import connector from '../connector'

class FormItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { required, selected, actions } = this.props

    return selected.map((filterName, index) => {
      if (!filters.hasOwnProperty(filterName)) {
        throw new Error('filter was not found')
      }

      const filter = filters[filterName]
      return (
        <FormLabel
          isRequired={!!required[index]}
          onClose={() => actions.filter.remove(filterName)}
          key={index}
          title={filter.label}
        >
          {filter.component}
        </FormLabel>
      )
    })
  }
}

FormItems.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  required: PropTypes.array.isRequired,

}

export default connector(FormItems)
