/* eslint-disable react/forbid-prop-types, function-paren-newline */
import React from 'react'
import Banner from './Banner'
import Marketing from './Marketing'
import PopularRoutes from './PopularRoutes'
import SearchCargo from './SearchCargo'

const IndexScene = () =>
  <div>
    <Banner />
    <SearchCargo />
    <PopularRoutes />
    <Marketing />
  </div>

export default IndexScene
