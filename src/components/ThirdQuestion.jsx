import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';

class ThirdQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {},
      chosenActivities: {},
      isDisabled: true,
    };
    this.toggleActivity = this.toggleActivity.bind(this);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    this.props.addQuestion('Who knows your partner better than you? Now think about your partner and what do they typically fancy doing?');
    this.getActivities();
  }

  getActivities() {
    const activities = {};
    getData('http://www.vacations.cafe/api/age-groups?text=Adult&$populate=activities&$select=activities').then((response) => {
      response.data[0].activities.forEach((activity) => {
        activities[activity._id] = activity.text;
      });
      this.setState({
        activities,
      });
    });
  }

  toggleActivity(e) {
    const clickedActivity = e.currentTarget.id;
    const activities = Object.assign({}, this.state.chosenActivities);
    let isDisabled;
    if (!activities[clickedActivity]) {
      activities[clickedActivity] = 1;
    } else {
      delete activities[clickedActivity];
    }
    if (Object.keys(activities).length) {
      isDisabled = false;
    } else {
      isDisabled = true;
    }
    this.setState({
      chosenActivities: activities,
      isDisabled,
    });
  }

  save() {
    const activities = Object.keys(this.state.chosenActivities);
    if (!activities.length) return;
    sendData(`http://www.vacations.cafe/api/customers/?_id=${this.props.partner}`, 'PATCH', {
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
        <div className="send">
          <button className="sen-btn" onClick={this.save}>Send</button>
        </div>
      </div>
    );
  }
}

export default ThirdQuestion;
