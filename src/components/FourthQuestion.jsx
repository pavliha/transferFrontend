import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class FourthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childrenGroups: {},
      loading: true,
    };
    this.save = this.save.bind(this);
    this.getAgeGroups = this.getAgeGroups.bind(this);
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.addToTravelGroup = this.addToTravelGroup.bind(this);
    this.createCustomers = this.createCustomers.bind(this);
    this.extractName = this.extractName.bind(this);
  }
  componentDidMount() {
    this.props.addQuestion('Good. What kids have you got that will travel with you on your vacation?');
    this.getAgeGroups();
  }

  getAgeGroups() {
    getData('http://api.vacations.cafe:81/age-groups?$select=text&$select=activities&$populate=activities')
      .then((response) => {
        const childrenGroups = response.data.slice(1);
        const newGroups = {};
        childrenGroups.forEach((group) => {
          newGroups[group.text] = {
            id: group._id,
            activities: group.activities,
          };
        });
        const groupNames = {};
        Object.keys(newGroups).forEach((group) => {
          groupNames[group] = 0;
        });
        this.setState({
          childrenGroups: groupNames,
          loading: false,
        });
        this.props.addChildrenGroups(newGroups);
      });
  }
  addChild(e) {
    const childrenGroups = Object.assign({}, this.state.childrenGroups);
    childrenGroups[e.currentTarget.id]++;
    this.setState({
      childrenGroups,
    });
  }
  removeChild(e) {
    const childrenGroups = Object.assign({}, this.state.childrenGroups);
    childrenGroups[e.currentTarget.id]--;
    this.setState({
      childrenGroups,
    });
  }
  save() {
    this.setState({
      loading: true,
    });
    this.createCustomers().then(this.addToTravelGroup).then(() => {
      const chosenGroups = [];
      Object.keys(this.state.childrenGroups).forEach((group) => {
        if (!this.state.childrenGroups[group]) return;
        chosenGroups.push(group);
      });
      if (!chosenGroups.length) {
        this.props.addAnswer('I travel without children');
        return this.props.goToQuestion(6);
      }
      this.props.addChosenGroups(chosenGroups);
      const extractedNames = chosenGroups.map(name => this.extractName(name));
      this.props.addAnswer(`I am traveling with: ${extractedNames.join(', ')}`);
      this.props.nextQuestion();
    });
  }
  addToTravelGroup(customers) {
    const promises = [];
    customers.forEach((customer) => {
      const data = {
        $addToSet: {
          members: customer._id,
        },
      };
      promises.push(sendData(`http://api.vacations.cafe:81/travel-groups?_id=${this.props.travelGroupId}`, 'PATCH', data));
    });
    return Promise.all(promises);
  }
  createCustomers() {
    const promises = [];
    Object.keys(this.state.childrenGroups).forEach((groupName) => {
      const childrenCount = this.state.childrenGroups[groupName];
      for (let i = 0; i < childrenCount; i++) {
        const data = {
          ageGroup: this.props.childrenGroups[groupName].id,
          travelGroup: this.props.travelGroupId,
        };
        promises.push(sendData('http://api.vacations.cafe:81/customers', 'POST', data));
      }
    });
    return Promise.all(promises);
  }

  extractName(name) {
    return name.slice(0, name.indexOf(' ')).toLowerCase();
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="children">
            {
              Object.keys(this.state.childrenGroups).map((groupName) => {
                return (
                  <div className="child" key={groupName}>
                    <div className="child-group">
                      {groupName}
                    </div>
                    <div className="child-counter">
                      <div className={`minus ${this.state.childrenGroups[groupName] === 0 ? 'hidden' : ''}`} onClick={this.removeChild} id={groupName}>-</div>
                      {this.state.childrenGroups[groupName]}
                      <div className="plus" onClick={this.addChild} id={groupName}>+</div>
                    </div>
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

export default FourthQuestion;
