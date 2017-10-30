import React, { Component } from 'react';
import Checkboxes from '../components/Checkboxes';
import SendButton from '../components/SendButton';

class FirstQuestion extends Component {
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
    this.props.addQuestion(`
      Good. Thanks. Now close your eyes and imagine about your vacations for the next 2 years. 
      What do you typically fancy doing? Forget about your family for this moment.
    `);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading && nextProps.leadMember.preferredActivities) {
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

    this.props.setActivities(this.props.leadMember.id, activities, 'lead');
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

export default FirstQuestion;
