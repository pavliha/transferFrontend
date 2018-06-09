import React from 'react'
import { createForm, formShape } from 'rc-form'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/es/Icon/Icon'
import Typography from '@material-ui/core/es/Typography'
import AppBar from '@material-ui/core/es/AppBar/AppBar'
import PrimaryTextInput from '../@index/PrimaryTextInput'
// import ClearIcon from '@material-ui/icons/Clear'
import Container from '../Container'
import Asterisks from './Asterisks'
import TransparentButton from '../@index/TransparentButton'
import RequiredInput from './RequiredInput'


const styles = theme => ({
  root: {
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


class CargoCreateScene extends React.Component {
  static propTypes = {
    form: formShape,
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value)
    })
  }

  render() {
    const { classes } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className={classes.root}>
        <Container>
          <AppBar position="static">
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
          </AppBar>
        </Container>
      </div>
    )
  }
}

CargoCreateScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default createForm()(withStyles(styles)(CargoCreateScene))
