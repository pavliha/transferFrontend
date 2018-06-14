import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {},
})
const SearchCargo = ({ classes }) =>
  <div className={classes.root}>
ок

  </div>

SearchCargo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchCargo)
