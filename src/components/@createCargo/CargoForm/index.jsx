import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import Button from '@material-ui/core/es/Button/Button'
import AdditionalFormItems from './AdditionalFormItems'
import FormItems from './FormItems'
import Form from '../../../utils/form/index'

const style = theme => ({
  root: {
    margin: theme.spacing.size4,
  },
})

class CargoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { form, validate } = this.props

    validate().then(result => {
      // eslint-disable-next-line no-console
      console.log(result)
    })
  }

  render() {
    const { classes, formItemDecorator } = this.props

    return (
      <Card className={classes.root}>
        <CardContent>
          <FormItems formItemDecorator={formItemDecorator} />
          <AdditionalFormItems />
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="raised"
            size="large"
            color="primary"
            onClick={this.handleSubmit}
          >
            Добавить груз
          </Button>
        </CardActions>
      </Card>
    )
  }
}

CargoForm.propTypes = {
  form: PropTypes.object.isRequired,
  validate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  formItemDecorator: PropTypes.func.isRequired,
}

export default withStyles(style)(Form(CargoForm))
