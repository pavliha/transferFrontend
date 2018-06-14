import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import TextField from '@material-ui/core/es/TextField/TextField'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import loginFormik from './loginFormik'
import connector from './connector'

const styles = theme => ({
  root: {
    width: 400,
  },
  input: {
    marginBottom: theme.spacing.size4,
  },
  inputGroup: {
    marginTop: theme.spacing.size3,
  },
})

class RegisterCard extends React.Component {
  state = {
    isSubmited: false,
  }
  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })
    handleSubmit(e)
  }

  render() {
    const { classes, values, errors, handleChange, handleBlur, isSubmitting, touched } = this.props
    const { isSubmited } = this.state
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <CardContent className={classes.inputGroup}>
            <Typography variant="subheading">Введите ваш email:</Typography>
            <TextField
              className={classes.input}
              fullWidth
              error={!!errors.email && touched.email && isSubmited}
              helperText={touched.email && errors.email}
              type="email"
              name="email"
              label="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Typography variant="subheading">Придумайте пароль:</Typography>
            <TextField
              className={classes.input}
              fullWidth
              name="password"
              error={!!errors.password && touched.password && isSubmited}
              helperText={errors.password}
              type="password"
              label="пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="raised"
              type="submit"
              color="primary"
              disabled={isSubmitting}
            >
              Войти
            </Button>
          </CardActions>
        </form>
      </Card>
    )
  }
}

RegisterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

export default withStyles(styles)(loginFormik(connector(RegisterCard)))
