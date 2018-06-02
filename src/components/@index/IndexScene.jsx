import React from 'react'
// import PropTypes from 'prop-types'
import Banner from './Banner'
import CarriersCounter from './CarriersCounter'
import Container from '../Container'

const IndexScene = () =>
  <div>
    <Banner />

    <section className="bg-dark">
      <Container className="p-5 d-flex justify-content-around">
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
      </Container>
    </section>
  </div>

IndexScene.propTypes = {}

export default IndexScene
