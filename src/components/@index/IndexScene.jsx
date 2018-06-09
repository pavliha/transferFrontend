/* eslint-disable react/forbid-prop-types, function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Banner from './Banner'
import CarriersCounter from './CarriersCounter'
import Container from '../Container'
import { loadPopularRoute } from '../../actions/popularRoutes.action'
import InfoScene from './InfoScene'

class IndexScene extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadPopularRoute())
  }

  render() {
    const { popularRoutes } = this.props
    return (
      <div>
        <Banner />

        <section className="bg-dark">
          <Container className="p-5 d-flex justify-content-around">
            {popularRoutes.map(route =>
              <CarriersCounter
                key={route.id}
                number={route.number}
                from={route.from}
                to={route.to}
              />,
            )}
          </Container>
        </section>
        <InfoScene />
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  popularRoutes: store.popularRoutes.popularRoutes,
})

IndexScene.propTypes = {
  popularRoutes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(IndexScene)
