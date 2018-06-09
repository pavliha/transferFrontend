/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
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

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Container>
          <AppBar position="static">
            <Toolbar disableGutters>
              <Typography onClick={this.handleClick} variant="title" color="inherit" className={classes.flex}>
                Transfer
              </Typography>
              <Link to="/cargo/create"><TransparentButton>Добавить Груз</TransparentButton></Link>
              <Button color="inherit">Войти</Button>
              <Button color="inherit">Зарегистрироваться</Button>
            </Toolbar>
          </AppBar>
        </Container>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any.isRequired,
}

export default withRouter(withStyles(styles)(Header))
