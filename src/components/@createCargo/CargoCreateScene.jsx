import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'
import Container from '../Container'
import CargoForm from './CargoForm'

const styles = theme => ({
  root: {
    // color: theme.palette.common.white,
    background: theme.palette.primary.main,
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  color: {
    '&::-webkit-input-placeholder': {
      color: theme.palette.error.dark,
    },
    color: theme.palette.error.dark,
  },

})

const CargoCreateScene = ({ classes }) => (
  <div className={classes.root}>
    <Container>
      <Grid container>
        <Grid item md={5}>
          <CargoForm />
        </Grid>
      </Grid>
    </Container>
  </div>
)

CargoCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoCreateScene)
