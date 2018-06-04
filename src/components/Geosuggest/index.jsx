import TextField from '@material-ui/core/es/TextField/TextField'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Geosuggest extends Component {
  constructor(props) {
    super(props)

    this.onPlaceChange = props.onPlaceChange
  }

  componentDidMount() {
    if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {

      const inputElement = document.getElementsByName(this.props.name)[0]

      this.apiObj = new window.google.maps.places.Autocomplete(inputElement, this.props.options)

      this.apiObj.addListener('place_changed', () => {
        this.onPlaceChange(this.apiObj.getPlace())
      })
    } else {
      console.error('Google API object is not defined')
    }
  }

  render() {
    const {
      options,
      onPlaceChange,
      ...props
    } = this.props

    if (onPlaceChange !== this.onPlaceChange) {
      this.onPlaceChange = onPlaceChange
    }

    const finalProps = {
      ...props,
      placeholder: props.floatingLabelText || props.hintText ? '' : props.placeholder,
    }

    return (
      <TextField {...finalProps} />
    )
  }
}

Geosuggest.propTypes = {
  name: PropTypes.string,
  onPlaceChange: PropTypes.func,
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  name: 'muiGeoSuggest',
  onPlaceChange: () => {
  },
  floatingLabelText: '',
  hintText: '',
  options: {},
}

export default Geosuggest
