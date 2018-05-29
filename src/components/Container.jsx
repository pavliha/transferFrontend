import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, className }) =>
  <div className={`mx-auto ${className}`} style={{ maxWidth: 1280 }}>
    {children}
  </div>

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
Container.defaultProps = {
  className: '',
}

export default Container
