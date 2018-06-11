import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/addCargoForm.action'

const initMapStateToProps = state => state.addCargoFormReducer

const initMapDispatchToProps = dispatch => ({
  actions: {
    filter: bindActionCreators(actions, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
