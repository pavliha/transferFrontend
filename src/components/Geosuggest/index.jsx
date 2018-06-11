/* eslint-disable no-console */
import TextField from '@material-ui/core/es/TextField/TextField'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Geosuggest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
      const inputElement = document.getElementsByName(this.props.name)[0]
      this.apiObj = new window.google.maps.places.Autocomplete(inputElement, this.props.options)
      this.apiObj.addListener('place_changed', () => {
        this.props.onChange(this.apiObj.getPlace().formatted_address)
      })
    } else {
      console.error('Google API object is not defined')
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const {
      ...props
    } = this.props

    return (
      <TextField value={this.state.value} {...props} />
    )
  }
}

Geosuggest.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.shape({}),
}

Geosuggest.defaultProps = {
  name: 'gesuggest',
  value: '',
  onChange: () => {},
  options: {},
}

export default Geosuggest
