/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import moment from 'moment'
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
  mapPropsToValues: () => ({
    from: '',
    to: '',
    time: '18:30',
    date_from: moment().format('YYYY-MM-DD'),
    date_to: moment().format('YYYY-MM-DD'),
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    from: Yup.string().required('Это поле является обязательным для заполнения!'),
    to: Yup.string().required('Это поле является обязательным для заполнения!'),
    date_from: Yup.date(),
    date_to: Yup.date(),
    pictures: Yup.array(),
    dimensions: Yup.string(),
    weight: Yup.number(),
    volume: Yup.number(),
    description: Yup.string(),
    transport_type: Yup.string(),
    payment: Yup.number(),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(values)
      setSubmitting(false)
    }, 100)
  },

  displayName: 'CargoForm', // helps with React DevTools
})(CargoForm)

export default withStyles(style)(EnhancedForm)
