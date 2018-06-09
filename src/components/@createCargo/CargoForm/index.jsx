import React from 'react'
import PropTypes from 'prop-types'
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
const CargoForm = ({ classes }) =>
  <Card className={classes.root}>
    <CardContent>
      <FormItems />
      <AdditionalFormItems />
    </CardContent>
    <CardActions>
      <Button fullWidth variant="raised" size="large" color="primary">Добавить груз</Button>
    </CardActions>
  </Card>

CargoForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(CargoForm)
