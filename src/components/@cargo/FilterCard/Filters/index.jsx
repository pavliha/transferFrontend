/* eslint-disable no-prototype-builtins */
import React from 'react'
import PropTypes from 'prop-types'
import filters from './filters'
import FilterLabel from './FilterLabel'
import connector from '../connector'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { selected, actions } = this.props

    return selected.map((filterName, index) => {
      if (!filters.hasOwnProperty(filterName)) {
        throw new Error('filter was not found')
      }

      const filter = filters[filterName]
      return (
        <FilterLabel
          onClose={() => actions.filter.remove(filterName)}
          key={index}
          title={filter.label}
        >
          {filter.component}
        </FilterLabel>
      )
    })
  }
}

Filters.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
}

export default connector(Filters)
