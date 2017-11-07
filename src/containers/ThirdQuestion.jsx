import React, { Component } from 'react';
import Checkboxes from '../components/Checkboxes';
import SendButton from '../components/SendButton';

class ThirdQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: this.props.ageGroups.Adult.activities,
      chosenActivities: {},
      loading: false,
    };
    this.toggleActivities = this.toggleActivities.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(`Who knows your partner better than you? Now think about your partner and what do
    they typically fancy doing on a trip?`);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading && nextProps.partner.preferredActivities) {
      const activities = this.state.activities.filter((activity) => {
        return this.state.chosenActivities[activity._id];
      });
      nextProps.addAnswer(
        <Checkboxes
          elements={activities}
          activeElements={this.state.chosenActivities}
        />
      );
      nextProps.questionsNavigation.next();
    }
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

  save() {
    const activities = Object.keys(this.state.chosenActivities);
    if (!activities.length) return;
    this.setState({
      loading: true,
    });

    this.props.setActivities(this.props.partner.id, activities, 'partner');
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <Checkboxes
            elements={this.state.activities}
            activeElements={this.state.chosenActivities}
            toggleCheckbox={this.toggleActivities}
          />
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default ThirdQuestion;
