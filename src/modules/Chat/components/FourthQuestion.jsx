import React, { Component } from 'react';
import SendButton from './SendButton';
import ChildrenGroups from './ChildrenGroups';

class FourthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childrenGroups: {},
      childrenGroupsCount: {},
      loading: false,
    };
    this.save = this.save.bind(this);
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.extractName = this.extractName.bind(this);
    this.getChildrenGroups = this.getChildrenGroups.bind(this);
    this.createAnswer = this.createAnswer.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('Good. How many kids have you got that will travel with you on your vacations?');
    this.getChildrenGroups();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children) {
      if (Object.keys(nextProps.children).length) {
        const answer = this.createAnswer();
        nextProps.addAnswer(answer);
        nextProps.questionsNavigation.next();
      } else {
        nextProps.addAnswer('I travel without children.');
        nextProps.questionsNavigation.goTo(6);
      }
    }
  }

  getChildrenGroups() {
    const childrenGroups = Object.assign({}, this.props.ageGroups);
    delete childrenGroups.Adult;
    const childrenGroupsCount = {};
    Object.keys(childrenGroups).forEach((group) => {
      childrenGroupsCount[group] = 0;
    });
    this.setState({
      childrenGroups,
      childrenGroupsCount,
    });
  }

  addChild(e) {
    const childrenGroupsCount = Object.assign({}, this.state.childrenGroupsCount);
    childrenGroupsCount[e.currentTarget.id]++;
    this.setState({
      childrenGroupsCount,
    });
  }

  removeChild(e) {
    const childrenGroupsCount = Object.assign({}, this.state.childrenGroupsCount);
    childrenGroupsCount[e.currentTarget.id]--;
    this.setState({
      childrenGroupsCount,
    });
  }

  createAnswer() {
    let answer = ['I am travelling with '];
    Object.keys(this.state.childrenGroupsCount).forEach((groupName) => {
      if (!this.state.childrenGroupsCount[groupName]) return;
      if (this.state.childrenGroupsCount[groupName] > 1) {
        if (this.extractName(groupName) === 'baby') {
          answer.push(`${this.state.childrenGroupsCount[groupName]} of my babies, `);
        } else {
          answer.push(`${this.state.childrenGroupsCount[groupName]} of my ${this.extractName(groupName)}s, `);
        }
      } else {
        answer.push(`my ${this.extractName(groupName)}, `);
      }
    });

    if (answer.length > 2) {
      answer.splice(-1, 0, ' and ');
    }
    const stringAnswer = answer.join('');
    answer = stringAnswer.slice(0, stringAnswer.length - 2) + '.';

    if (answer.length === 1) answer = false;

    return answer;
  }

  save() {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    const newGroups = {};
    Object.keys(this.state.childrenGroupsCount).forEach((groupName) => {
      if (this.state.childrenGroupsCount[groupName]) {
        newGroups[groupName] = this.state.childrenGroupsCount[groupName];
      }
    });
    this.props.addChildren(newGroups);
  }

  extractName(name) {
    return name.slice(0, name.indexOf(' ')).toLowerCase();
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <ChildrenGroups
            groups={this.state.childrenGroups}
            counter={this.state.childrenGroupsCount}
            add={this.addChild}
            remove={this.removeChild}
          />
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default FourthQuestion;
