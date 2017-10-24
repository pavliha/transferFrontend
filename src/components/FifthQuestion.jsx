import React, { Component } from 'react';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class FifthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      groupNames: this.props.chosenGroups,
      chosenActivities: {},
      loading: false,
    };
    this.save = this.save.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    this.toggleActivity = this.toggleActivity.bind(this);
    this.extractName = this.extractName.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(`What do you think your ${this.extractName(this.state.groupNames[this.state.index])} would like to do?`);
  }

  save() {
    const activities = Object.keys(this.state.chosenActivities);
    if (!activities.length) return;
    this.setState({
      loading: true,
    });
    const travelGroupId = this.props.travelGroupId;
    const ageGroupId = this.props.childrenGroups[this.state.groupNames[this.state.index]].id;
    sendData(`http://api.vacations.cafe:81/customers/?travelGroup=${travelGroupId}&ageGroup=${ageGroupId}`, 'PATCH', {
      preferredActivities: activities,
    }).then(() => {
      const answer = (
        <div className="activities">
          {
            activities.map((activity) => {
              return (
                <div className="activity active">
                  {this.state.chosenActivities[activity]}
                </div>
              );
            })
          }
        </div>
      );
      this.props.addAnswer(answer);
      if (this.state.groupNames[this.state.index + 1]) {
        this.props.addQuestion(`What do you think your ${this.extractName(this.state.groupNames[this.state.index + 1])} would like to do?`);
        this.setState({
          index: this.state.index + 1,
          chosenActivities: {},
          loading: false,
        });
      } else {
        this.props.nextQuestion();
      }
    });
  }

  extractName(name) {
    return name.slice(0, name.indexOf(' ')).toLowerCase();
  }

  toggleActivity(e) {
    const clickedActivity = e.currentTarget;
    const name = clickedActivity.getAttribute('name');
    const activities = Object.assign({}, this.state.chosenActivities);
    if (!activities[clickedActivity.id]) {
      activities[clickedActivity.id] = name;
    } else {
      delete activities[clickedActivity.id];
    }
    this.setState({
      chosenActivities: activities,
    });
  }

  renderActivities() {
    return this.props.childrenGroups[this.state.groupNames[this.state.index]].activities.map((activity) => {
      return (
        <div
          className={`activity ${this.state.chosenActivities[activity._id] ? 'active' : ''}`}
          key={activity._id}
          id={activity._id}
          name={activity.text}
          onClick={this.toggleActivity}
        >
          {activity.text}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="activities">
            {this.renderActivities()}
          </div>
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default FifthQuestion;
