/* eslint-disable object-curly-newline,jsx-a11y/click-events-have-key-events */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
  },
  icon: {
    cursor: 'pointer',
    color: theme.palette.error.dark,
    fontSize: theme.typography.caption.fontSize,
  },
})

const FilterLabel = ({ title, children, classes, onClose }) =>
  <div className={classes.root}>
    <Typography variant="subheading">
      <a role="button" tabIndex="1" onClick={onClose}>
        <Icon className={classes.icon}>close</Icon>
      </a> {title}
    </Typography>
    {children}
  </div>

FilterLabel.propTypes = ({
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  classes: PropTypes.object.isRequired,
})

// noinspection JSUnusedGlobalSymbols
FilterLabel.defaultProps = {
  onClose: () => {},
}

export default withStyles(styles)(FilterLabel)
