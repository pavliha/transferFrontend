/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line max-len
const url = 'https://d1a3f4spazzrp4.cloudfront.net/ambassador/0.0.5/d1a3f4spazzrp4.cloudfront.net/static/images/join/background_new-bcfeff309a.jpg'

const style = {
  backgroundImage: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '93.3vh',
  position: 'relative',
}

const Background = ({ children }) =>
  <div style={style}>
    {children}
  </div>

Background.propTypes = {
  children: PropTypes.any,
}

Background.defaultProps = {
  children: '',
}

export default Background
