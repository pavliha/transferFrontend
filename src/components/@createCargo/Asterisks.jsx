import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const style = theme => {
  return {
    color: {
      color: theme.palette.error.dark,
    },
  }
}

const Asterisks = ({ classes }) =>
  <span className={classes.color}>* </span>

Asterisks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(Asterisks)
