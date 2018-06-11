/* eslint-disable object-curly-newline,camelcase */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/es/Button/Button'
import Card from '@material-ui/core/es/Card/Card'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import CargoBadges from './CargoBadges'
import PictureCargoBadge from './CargoBadges/PictureCargoBadge'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
    padding: theme.spacing.size2,
  },
  locations: {
    marginBottom: theme.spacing.size2,
  },
  location: {
    display: 'flex',
  },
  location_text: {
    paddingLeft: theme.spacing.size1,
  },
  rotated: {
    transform: 'rotate(45deg)',
  },
  detailsButton: {
    marginTop: theme.spacing.size1,
  },
})

const CargoCard = ({ classes, cargo }) => {
  const { id, from, to, pictures, primary_picture, title, ...rest } = cargo

  const other = Object.keys(rest).map(key => ({
    key,
    value: rest[key],
  }))

  return (
    <Card className={classes.root} key={id}>
      <Grid container>
        <Grid item xs={9}>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <Typography gutterBottom variant="headline">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <PictureCargoBadge pictures={pictures} />
            </Grid>
          </Grid>
          <div className={classes.locations}>
            <div className={classes.location}>
              <Icon>send</Icon>
              <Typography className={classes.location_text}>{from}</Typography>
            </div>
            <div className={classes.location}>
              <Icon className={classes.rotated}>call_missed_outgoing</Icon>
              <Typography className={classes.location_text}>{to}</Typography>
            </div>
          </div>
          <CargoBadges badges={other} />
        </Grid>
        <Grid item xs={3}>
          <img src={primary_picture} alt="primary" width="100%" />
          <Button fullWidth color="primary" variant="raised" className={classes.detailsButton}>
            Подробее
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

CargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoCard)
