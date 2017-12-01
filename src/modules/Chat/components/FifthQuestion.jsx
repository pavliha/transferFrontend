import React, { Component } from 'react';
import SendButton from "./SendButton";
import Checkboxes from "./Checkboxes";

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
    this.props.addQuestion(this.getQuestion(this.state.index));
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
        this.props.addQuestion(this.getQuestion(this.state.index + 1));
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

  getQuestion(stateIndex) {
    switch (this.extractName(this.state.groupNames[stateIndex])) {
      case "toddler":
        return `I know this is difficult but what do you think your little toddler wants to do on their vacations?`;
      case "schoolgoer":
        return `This is very difficult but what do you think your little schoolgoer wants to do on their vacations?`;
      case "teen":
        return `Teens wander in their own new world. Hoping that you understand them better, what do you think
        yours will want to do on their vacations?`;
      case "baby":
        return `A babysitter would do a great help to take care of your baby while you want to take a fresh breath out.
        Do you think it is better to arrange a babysitter for your trips?`;
      case "adult":
        return `What do you think your grownup kid would like to do on their vacations?`;
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
