import React, { Component } from 'react';
import sendData from '../services/sendData';

class SecondQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPartner: true,
      loading: false,
    };
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('Good. Do you have a partner to travel with?');
  }

  createPartner(travelGroupId, cb) {
    let partnerId;
    sendData('http://api.vacations.cafe:81/customers', 'POST', {})
      .then((response) => {
        partnerId = response._id;
        const newMember = {
          $addToSet: {
            members: partnerId,
          },
        };
        return sendData(`http://api.vacations.cafe:81/travel-groups?_id=${travelGroupId}`, 'PATCH', newMember);
      })
      .then(() => {
        cb(partnerId);
      });
  }

  save(e) {
    const hasPartner = e.currentTarget.id === 'hasPartner';
    const data = {
      leadMember: this.props.leadMember,
    };
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    sendData('http://api.vacations.cafe:81/travel-groups', 'POST', data)
      .then((response) => {
        if (hasPartner) {
          this.createPartner(response._id, (partnerId) => {
            this.props.createTravelGroup(response._id, partnerId);
            this.props.addAnswer('Yes I do!');
            this.props.nextQuestion();
          });
        } else {
          this.props.createTravelGroup(response._id, false);
          this.props.addAnswer('No');
          this.props.goToQuestion(4);
        }
      });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="partners">
            <div onClick={this.save} id="hasPartner">
              <img src="/assets/partner.png" />
              <div>Yes I do</div>
            </div>
            <div onClick={this.save} id="noPartner">
              <img src="/assets/alone.png" />
              <div>No</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondQuestion;
