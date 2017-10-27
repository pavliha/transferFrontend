import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class FirstQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {},
      chosenActivities: {},
      loading: true,
    };
    this.toggleActivity = this.toggleActivity.bind(this);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    this.props.addQuestion(`
      Good. Thanks. Now close your eyes and imagine about your vacations for the next 2 years. 
      What do you typically fancy doing? Forget about your family for this moment.
    `);
    this.getActivities();
  }

  getActivities() {
    const activities = {};
    getData('http://api.vacations.cafe:81/age-groups?text=Adult&$populate=activities&$select=activities').then((response) => {
      response.data[0].activities.forEach((activity) => {
        activities[activity._id] = activity.text;
      });
      this.setState({
        activities,
        loading: false,
      });
    });
  }

  toggleActivity(e) {
    const clickedActivity = e.currentTarget.id;
    const activities = Object.assign({}, this.state.chosenActivities);
    if (!activities[clickedActivity]) {
      activities[clickedActivity] = 1;
    } else {
      delete activities[clickedActivity];
    }
    this.setState({
      chosenActivities: activities,
    });
  }

  save() {
    const activities = Object.keys(this.state.chosenActivities);
    if (!activities.length) return;
    this.setState({
      loading: true,
    });
    sendData(`http://api.vacations.cafe:81/customers?_id=${this.props.leadMember}`, 'PATCH', {
      preferredActivities: activities,
    }).then(() => {
      const answer = (
        <div className="activities">
          {
            activities.map((id) => {
              return (
                <div className="activity active">
                  {this.state.activities[id]}
                </div>
              );
            })
          }
        </div>
      );
      this.props.addAnswer(answer);
      this.props.nextQuestion();
    });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="activities">
            {
              Object.keys(this.state.activities).map((activity) => {
                return (
                  <div
                    className={`activity ${this.state.chosenActivities[activity] ? 'active' : ''}`}
                    key={activity}
                    id={activity}
                    onClick={this.toggleActivity}
                  >
                    {this.state.activities[activity]}
                  </div>
                );
              })
            }
          </div>
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default FirstQuestion;
