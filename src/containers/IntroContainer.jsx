import React, { Component } from 'react';
import Intro from '../components/Intro';

class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.createLeadMember = this.createLeadMember.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(
      <div>
        <p>
          Hey, I'm Peru, COO ("Chef" Coordinating Officer) at vacations cafe. I'll guide you today to let us unserstand a little about your family's likes and dislikes for vacations. It takes just around 5 minutes.
        </p>
        <p>
          Claimer: Nobody else in this world cares better for your precious vacations than my vacation chefs that handbook vacations experiances for your tastes.
        </p>
        <p>
          Shall we begin?
        </p>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.loading && Object.keys(nextProps.ageGroups).length) {
      if(!nextProps.leadMember.id) {
        nextProps.addLeadMember();
      } else {
        nextProps.addAnswer('Yes!');
        nextProps.questionsNavigation.next();
      }
    }
  }

  createLeadMember() {
    if(this.state.loading) return;

    this.props.getAgeGroups();
    this.setState({
      loading: true,
    });
  }

  render() {
    return <Intro loading={this.state.loading} handler={this.createLeadMember} />
  }
}

export default IntroContainer;
