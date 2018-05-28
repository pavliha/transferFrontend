import React from 'react'
import { Icon } from '@material-ui/core'
import Grid from '@material-ui/core/es/Grid/Grid'

// import PropTypes from 'prop-types'
import Header from './Header'
import Background from './Background'
import PrimaryTextInput from './PrimaryTextInput'
import TransparentButton from './TransparentButton'


const IndexScene = () =>
  <main>
    <Header />
    <Background>
      <Grid style={{ height: '80vh' }} container alignItems="flex-end" justify="center">
        <Grid item xs={2} />
        <Grid item xs={6}>
          <div className="d-flex justify-content-between">
            <PrimaryTextInput
              icon={<Icon>my_location</Icon>}
              placeholder="Откуда забрать ваш груз?"
            />
            <PrimaryTextInput
              icon={<Icon>my_location</Icon>}
              placeholder="Куда отвезти ваш груз?"
            />
            <TransparentButton>доставить</TransparentButton>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Background>
  </main>

IndexScene.propTypes = {}

export default IndexScene
