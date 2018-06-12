/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import Yup from 'yup'
import Card from '@material-ui/core/es/Card/Card'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import Button from '@material-ui/core/es/Button/Button'
import AdditionalFormItems from './AdditionalFormItems'
import FormItems from './FormItems'

const style = theme => ({
  root: {
    margin: theme.spacing.size4,
  },
})

class CargoForm extends React.Component {
  render() {
    const { classes, ...form } = this.props

    return (
      <Card className={classes.root}>
        <form onSubmit={form.handleSubmit}>
          <CardContent>
            <FormItems form={form} />
            <AdditionalFormItems />
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              type="submit"
              variant="raised"
              size="large"
              color="primary"
              disabled={form.isSubmitting}
            >
              Добавить груз
            </Button>
          </CardActions>
        </form>
      </Card>
    )
  }
}

CargoForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({ from: '' }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    from: Yup.object(),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 100)
  },

  displayName: 'CargoForm', // helps with React DevTools
})(CargoForm)

export default withStyles(style)(EnhancedForm)
