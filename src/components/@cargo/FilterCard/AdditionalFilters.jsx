import React from 'react'
import Typography from '@material-ui/core/es/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import connector from './connector'
import FilterBadges from './FilterBadges/index'
import filterBadges from '../../../utils/filterBadges'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
  },
})
const AdditionalFilters = ({ badges, selected, classes }) =>
  <div className={classes.root}>
    {(filterBadges(badges, selected)).length ?
      <Typography gutterBottom variant="subheading">Дополнительные фильтры</Typography> : ''}
    <FilterBadges />
  </div>

AdditionalFilters.propTypes = {
  badges: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
}

export default connector(withStyles(styles)(AdditionalFilters))
