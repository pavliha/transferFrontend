/* eslint-disable object-curly-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = theme => ({
  root: {
    padding: theme.spacing.size3,
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
})

const CargoCard = ({ classes, cargo }) => {
  // noinspection JSUnusedLocalSymbols
  const { from, to, title, ...rest } = cargo

  return (
    <Card className={classes.root}>
      <Typography gutterBottom variant="headline">
        {title}
      </Typography>
      <div className={classes.location}>
        <Icon>send</Icon>
        <Typography className={classes.location_text}>{from}</Typography>
      </div>
      <div className={classes.location}>
        <Icon className={classes.rotated}>call_missed_outgoing</Icon>
        <Typography className={classes.location_text}>{to}</Typography>
      </div>

      {/* <CargoBadges badges={rest} /> */}

    </Card>
  )
}

CargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CargoCard)
