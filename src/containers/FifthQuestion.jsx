import React, { Component } from 'react';
import Checkboxes from '../components/Checkboxes';
import SendButton from '../components/SendButton';

class FifthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      groupNames: Object.keys(this.props.children),
      chosenActivities: {},
      loading: false,
    };
    this.save = this.save.bind(this);
    this.toggleActivities = this.toggleActivities.bind(this);
    this.extractName = this.extractName.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(`What do you think your ${this.extractName(this.state.groupNames[this.state.index])} would like to do?`);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children[this.state.groupNames[this.state.index]].preferredActivities) {
      const activities = nextProps.ageGroups[this.state.groupNames[this.state.index]].activities.filter((activity) => {
        return this.state.chosenActivities[activity._id];
      });

      nextProps.addAnswer(
        <Checkboxes
          elements={activities}
          activeElements={this.state.chosenActivities}
        />
      );

      this.setState({
        loading: false,
        chosenActivities: {},
      });
      if (this.state.groupNames[this.state.index + 1]) {
        this.props.addQuestion(`What do you think your ${this.extractName(this.state.groupNames[this.state.index + 1])} would like to do?`);
        this.setState({
          index: this.state.index + 1,
        });
      } else {
        nextProps.questionsNavigation.next();
      }
    }
  }

  save() {
    const activities = Object.keys(this.state.chosenActivities);
    if (!activities.length) return;
    this.setState({
      loading: true,
    });
    this.props.setActivities(null, activities, this.state.groupNames[this.state.index]);
  }

  extractName(name) {
    return name.slice(0, name.indexOf(' ')).toLowerCase();
  }

  toggleActivities(e) {
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

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <Checkboxes
            elements={this.props.ageGroups[this.state.groupNames[this.state.index]].activities}
            activeElements={this.state.chosenActivities}
            toggleCheckbox={this.toggleActivities}
          />
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default FifthQuestion;
