import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.createLeadMember = this.createLeadMember.bind(this);
  }

  componentDidMount() {
    this.props.setCallback(this.createLeadMember);
  }

  createLeadMember(component) {
    if(component.props.leadMember) {
     return component.props.nextStep();
    }
    getData('http://www.vacations.cafe/api/age-groups?text=Adult&$select=id').then((response) => {
      const id = response.data[0]._id;
      const data = {
        ageGroup: id,
      };
      return sendData('http://www.vacations.cafe/api/customers/', 'POST', data)
    }).then((response) => {
      component.props.addLeadMember(response.ageGroup);
      console.log(response);
      //component.props.nextStep();
    })
  }

  render() {
    return (
      <div className="intro">
        <div className="intro-text">
          <img src="/assets/snowman.png" />
          <h1>Lets get started</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;
