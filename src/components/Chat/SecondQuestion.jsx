import React, { Component } from 'react';
import Partners from './Partners';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.travelGroup.id) {
      if (this.state.hasPartner && !nextProps.partner.id)  {
        nextProps.addPartner();
      } else if (this.state.hasPartner && nextProps.partner.id) {
        nextProps.addAnswer('Yes');
        nextProps.questionsNavigation.next();
      } else {
        nextProps.addAnswer('No');
        nextProps.questionsNavigation.goTo(4);
      }
    }
  }

  save(e) {
    if (this.state.loading) return;
    this.setState({
      loading: true,
      hasPartner: e.currentTarget.id === 'hasPartner',
    });
    this.props.createTravelGroup();
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <Partners handler={this.save} />
        </div>
      </div>
    );
  }
}

export default SecondQuestion;
