/* eslint-disable function-paren-newline,indent */
/* eslint-disable-next-line object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import CargoBadge from './CargoBadge'
import connector from '../../connector'

const CargoBadges = ({ badges }) =>
  badges.map(() => (
    <CargoBadge />
))

CargoBadges.propTypes = {
  badges: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
}

// noinspection JSUnusedGlobalSymbols
export default connector(CargoBadges)
