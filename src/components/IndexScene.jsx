import React from 'react'
import { Icon } from '@material-ui/core'
// import PropTypes from 'prop-types'
import Header from './Header'
import Background from './Background'
import PrimaryTextInput from './PrimaryTextInput'


const IndexScene = () =>
  <div>
    <Header />
    <Background>
      <div style={{ padding: 100 }}>
        <PrimaryTextInput
          icon={<Icon>my_location</Icon>}
          placeholder="Откуда забрать ваш груз?"
        />
      </div>
    </Background>
  </div>

IndexScene.propTypes = {}

export default IndexScene
