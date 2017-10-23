import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.createLeadMember = this.createLeadMember.bind(this);
  }

  createLeadMember() {
    if (this.props.leadMember) {
      return this.props.nextQuestion();
    }
    getData('http://api.vacations.cafe:81/age-groups?text=Adult&$select=id').then((response) => {
      const id = response.data[0]._id;
      const data = {
        ageGroup: id,
      };
      return sendData('http://api.vacations.cafe:81/customers/', 'POST', data);
    }).then((response) => {
      this.props.addLeadMember(response._id);
      this.props.nextQuestion();
    });
  }

  render() {
    return (
      <div className="intro">
        <img src="/assets/snowman.png" className="snowman"/>
        <h1>Lets get started</h1>
        <p>
          Hey, I'm Peru, COO ("Chef" Coordinating Officer) at vacations cafe. I'll guide you today to let us unserstand a little about your family's likes and dislikes for vacations. It takes just around 5 minutes.
        </p>
        <p>
          Claimer: Nobody else in this world cares better for your precious vacations than my vacation chefs that handbook vacations experiances for your tastes.
        </p>
        <p>
          Shall we begin?
        </p>
        <div className="next-btn" onClick={this.createLeadMember}>
          <img src="/assets/next-btn.png" />
        </div>
      </div>
    );
  }
}

export default Intro;
