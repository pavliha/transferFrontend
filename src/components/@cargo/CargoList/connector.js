import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/cargo.action'

const initMapStateToProps = state => state.cargoReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    filter: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
