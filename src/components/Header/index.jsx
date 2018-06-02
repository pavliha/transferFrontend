/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '../Container'

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
})

const Header = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Container>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Transfer
            </Typography>
            <Button color="inherit">Войти</Button>
            <Button color="inherit">Зарегестрироваться</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
