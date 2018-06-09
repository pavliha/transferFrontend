import React from 'react'
import { createForm, formShape } from 'rc-form'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/es/Icon/Icon'
import Typography from '@material-ui/core/es/Typography'
import PrimaryTextInput from '../@index/PrimaryTextInput'
// import ClearIcon from '@material-ui/icons/Clear'
import Container from '../Container'
import Asterisks from './Asterisks'
import TransparentButton from '../@index/TransparentButton'
import { createCargo } from '../../actions/createCargo.action'

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
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

const RequiredInput = ({ getFieldError, getFieldProps, icon, fieldError, textPlaceholder }) => {
  let errors
  return (
    <PrimaryTextInput
      icon={<Icon>{icon}</Icon>}
      placeholder={(errors = getFieldError(fieldError)) ? errors.join(',') : textPlaceholder}
      {...getFieldProps(fieldError, {
        onChange() {},
        rules: [{ required: true }],
      })}
    />)
}

class CargoCreateScene extends React.Component {

  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch(createCargo(value))
    })
  }

  render() {
    const { classes } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className={classes.root}>
        <Container>

          <Grid container>
            <Grid item md={4}>
              <div className="my-3">
                <Typography variant="subheading" color="inherit">
                  <Asterisks />
                  Укажите заголовок груза
                </Typography>
                <RequiredInput
                  icon="add_circle"
                  fieldError="name"
                  textPlaceholder="Коробка конфет, мешок картошки"
                  getFieldProps={getFieldProps}
                  getFieldError={getFieldError}
                />
              </div>

              <div className="my-3">
                <Typography variant="subheading" color="inherit">
                  <Asterisks />
                  Откуда забрать?
                </Typography>
                <RequiredInput
                  icon="my_location"
                  fieldError="whence"
                  textPlaceholder="Запорожье"
                  getFieldProps={getFieldProps}
                  getFieldError={getFieldError}
                />
              </div>

              <div className="my-3">
                <Typography variant="subheading" color="inherit">
                  <Asterisks />
                  Куда доставить?
                </Typography>
                <RequiredInput
                  icon="my_location"
                  fieldError="where"
                  textPlaceholder="Днепр"
                  getFieldProps={getFieldProps}
                  getFieldError={getFieldError}
                />
              </div>

              <div className="my-3">
                <Typography variant="subheading" color="inherit">Когда забрать?</Typography>
                <PrimaryTextInput
                  {...getFieldProps('time_1')}
                  fullWidth
                  icon={<Icon>query_builder</Icon>}
                  placeholder="Например: 18:00-20:00"
                />
                <Typography variant="caption" color="inherit">
                  Укажите время когда вам будет удобно передать перевозщику груз
                </Typography>
              </div>
              <div className="my-3">
                <Typography variant="subheading" color="inherit">Когда будетет отправлять?</Typography>
                <PrimaryTextInput
                  {...getFieldProps('date_1')}
                  icon={<Icon>date_range</Icon>}
                  placeholder="Например: 11 июля 2018"
                />
                <Typography variant="caption" color="inherit">
                  Укажите дату когда вы будете передавать груз перевозщику
                </Typography>
              </div>
              <div className="my-3">
                <Typography variant="subheading" color="inherit">Когда вам нужно доставить?</Typography>
                <PrimaryTextInput
                  {...getFieldProps('date_2')}
                  icon={<Icon>date_range</Icon>}
                  placeholder="Например: 12 июля 2018"
                />
                {/* <ClearIcon /> */}
                <Typography variant="caption" color="inherit">
                  Укажите дату когда вы будете забирать груз у перевозщика
                </Typography>
              </div>
              <TransparentButton onClick={this.submit}>добавить</TransparentButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

CargoCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
  form: formShape,
  createCargo: PropTypes.element,
}

export default connect()(createForm()(withStyles(styles)(CargoCreateScene)))
