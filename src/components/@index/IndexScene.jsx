/* eslint-disable react/forbid-prop-types, function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Banner from './Banner'
import CarriersCounter from './CarriersCounter'
import Container from '../Container'
import { loadPopularRoute } from '../../actions/popularRoute.action'

class IndexScene extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadPopularRoute())
  }

  render() {
    const { popularRoute } = this.props
    return (
      <div>
        <Banner />

        <section className="bg-dark">
          <Container className="p-5 d-flex justify-content-around">
            {popularRoute.map(route =>
              <CarriersCounter
                key={route.id}
                number={route.number}
                from={route.from}
                to={route.to}
              />,
            )}
          </Container>
        </section>

      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  popularRoute: store.popularRoute.popularRoute,
})

IndexScene.propTypes = {
  popularRoute: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(IndexScene)
