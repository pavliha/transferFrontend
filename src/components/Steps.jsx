import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
// import PropTypes from 'prop-types';
import stepActions from '../actions/step.action';
import membersActions from '../actions/members.action';
import Intro from './Intro';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import './main.scss';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getStep = this.getStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.setComponentsCallback = this.setComponentsCallback.bind(this);
  }

  getStep() {
    switch(this.props.stepNumber) {
      case 0: return <Intro setCallback={this.setComponentsCallback} />
      default: return <Intro />
    }
  }

  nextStep() {
    this.state.componentsCallback(this);
  }

  prevStep() {
    this.props.prevStep();
  }

  setComponentsCallback(componentsCallback) {
    this.setState({
      componentsCallback,
    });
  }

  render() {
    return (
      <div className="container">
        <div className={`wrapper ${this.props.stepNumber === 0 ? 'intro-wrapper' : ''}`}>
          <div className="step">
            <div className={`steps-progress ${this.props.stepNumber === 0 ? 'hidden' : ''}`}>
              {this.props.stepNumber} of 7
            </div>
            {this.getStep()}
          </div>
          <div className={`navigation-panel ${this.props.stepNumber === 0 ? 'flex-push' : ''}`}>
            <div className={`prev-btn ${this.props.stepNumber === 0 ? 'hidden' : ''}`} onClick={this.prevStep}>
              <i className="fa fa-arrow-left" aria-hidden="true" />
              <span>Back</span>
            </div>
            <div className="next-btn" onClick={this.nextStep}>Continue</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stepNumber: state.stepsReducer.stepNumber,
    leadMember: state.membersReducer.leadMember,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => {
      dispatch(stepActions.nextStep());
    },
    prevStep: () => {
      dispatch(stepActions.prevStep());
    },
    goToStep: (number) => {
      dispatch(stepsActions.goToStep(number));
    },
    addLeadMember: (id) => {
      dispatch(membersAction.addLeadMember(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
