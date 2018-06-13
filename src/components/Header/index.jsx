/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '../Container'
import TransparentButton from '../@index/TransparentButton'

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
  },

  flex: {
    flex: 1,
  },
})

const Header = ({ classes }) =>
  <div className={classes.root}>
    <Container>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/">Transfer</Link>
          </Typography>
          <Link to="/cargo/create"><TransparentButton>Добавить Груз</TransparentButton></Link>
          <Link to="/login"><Button color="inherit">Войти</Button></Link>
          <Link to="/register"><Button color="inherit">Зарегистрироваться</Button></Link>
        </Toolbar>
      </AppBar>
    </Container>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
