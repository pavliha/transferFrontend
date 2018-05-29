import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../Header/index'
import Banner from './Banner'
import CarriersCounter from './CarriersCounter'
import Container from '../Container'

const IndexScene = () =>
  <main>

    <Header />

    <Banner />

    <section className="bg-dark">
      <Container className="p-5 d-flex justify-content-around">
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
        <CarriersCounter number={90} from="Запорожье" to="Киев" />
      </Container>
    </section>
  </main>

IndexScene.propTypes = {}

export default IndexScene
