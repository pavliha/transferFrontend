/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import CargoCard from './CargoCard'
import connector from './connector'


const CargoList = ({ classes, cargos }) =>
  cargos.map(cargo =>
    <CargoCard key={cargo.id} cargo={cargo} />,
  )

CargoList.propTypes = {
  cargos: PropTypes.array.isRequired,
}

export default connector(CargoList)
