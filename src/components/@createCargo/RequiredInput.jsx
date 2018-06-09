import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PrimaryTextInput from '../@index/PrimaryTextInput'

const styles = theme => ({
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
      className={{}}
      placeholder={(errors = getFieldError(fieldError)) ? errors.join(',') : textPlaceholder}
      {...getFieldProps(fieldError, {
        onChange() {},
        rules: [{ required: true }],
      })}
    />)
}
RequiredInput.propTypes = {}

export default withStyles(styles)(RequiredInput)