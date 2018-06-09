import React from 'react'
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

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
})

class CargoCreateScene extends React.Component {
  render() {
    const { classes } = this.props
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
                  <PrimaryTextInput
                    icon={<Icon>add_circle</Icon>}
                    placeholder="Коробка конфет, мешок картошки"
                  />
                </div>

                <div className="my-3">
                  <Typography variant="subheading" color="inherit">
                    <Asterisks />
                    Откуда забрать?
                  </Typography>
                  <PrimaryTextInput
                    icon={<Icon>my_location</Icon>}
                    placeholder="Запорожье"
                  />
                </div>

                <div className="my-3">
                  <Typography variant="subheading" color="inherit">
                    <Asterisks />
                    Куда доставить?
                  </Typography>
                  <PrimaryTextInput
                    icon={<Icon>my_location</Icon>}
                    placeholder="Днепр"
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
                  {/*<ClearIcon />*/}
                  <Typography variant="caption" color="inherit">
                    Укажите дату когда вы будете забирать груз у перевозщика
                  </Typography>

                </div>
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

export default withStyles(styles)(CargoCreateScene)
