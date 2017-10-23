import React, { Component } from 'react';
import { connect } from 'react-redux';
import questionsAction from '../actions/questions.action';
import membersAction from '../actions/members.action';

import Intro from './Intro';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';

import './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
    };
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.renderChatBody = this.renderChatBody.bind(this);
    this.scrollChat = this.scrollChat.bind(this);
  }

  getQuestion() {
    switch (this.props.questionNumber) {
      case 1: {
        return (
          <FirstQuestion
            addActivities={this.props.addActivities}
            nextQuestion={this.props.nextQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            leadMember={this.props.leadMember}
          />
        );
      }
      case 2: {
        return (
          <SecondQuestion
            addActivities={this.props.addActivities}
            nextQuestion={this.props.nextQuestion}
            goToQuestion={this.props.goToQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            leadMember={this.props.leadMember}
            createTravelGroup={this.props.createTravelGroup}
          />
        );
      }
      case 3: {
        return (
          <ThirdQuestion
            addActivities={this.props.addActivities}
            nextQuestion={this.props.nextQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            partner={this.props.partner}
          />
        );
      }
      case 4: {
        return (
          <FourthQuestion
            nextQuestion={this.props.nextQuestion}
            goToQuestion={this.props.goToQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            addChildrenGroups={this.props.addChildrenGroups}
            addChosenGroups={this.props.addChosenGroups}
            childrenGroups={this.props.childrenGroups}
            travelGroupId={this.props.travelGroupId}
          />
        );
      }
      default: return false;
    }
  }

  scrollChat() {
    this.chatBody.scrollTop = this.chatBody.scrollHeight;
  }

  addQuestion(question) {
    const questions = [...this.state.questions];
    const newQuestion = (
      <div className="question">
        <div className="title">
          <b>Chef Bot</b>
        </div>
        <div className="text">
          {question}
        </div>
      </div>
    );
    questions.push(newQuestion);
    setTimeout(() => {
      this.setState({
        questions,
      });
      this.scrollChat();
    }, 700);
  }

  addAnswer(answer) {
    const answers = [...this.state.answers];
    const newAnswer = (
      <div className="answer">
        <div className="title">
          <b>Me</b>
        </div>
        <div className="body">
          {answer}
        </div>
      </div>
    );
    answers.push(newAnswer);
    this.setState({
      answers,
    });
    this.scrollChat();
  }

  renderChatBody() {
    const chatBody = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      chatBody.push(this.state.questions[i]);
      if (this.state.answers[i]) {
        chatBody.push(this.state.answers[i]);
      }
    }
    return chatBody;
  }

  render() {
    return (
      <div className={`container ${this.props.questionNumber === 0 ? 'white-bg' : ''}`}>
        {
          this.props.questionNumber === 0 ?

            <Intro
              nextQuestion={this.props.nextQuestion}
              leadMember={this.props.leadMember}
              addLeadMember={this.props.addLeadMember}
            />
          :
            <div className="scroll-fix">
              <div className="chat-body" ref={(chatBody) => { this.chatBody = chatBody; }}>
                {this.renderChatBody()}
              </div>
              <div>
                {this.getQuestion()}
              </div>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionNumber: state.questionsReducer.questionNumber,
    leadMember: state.membersReducer.leadMember,
    partner: state.membersReducer.partner,
    travelGroupId: state.membersReducer.travelGroupId,
    childrenGroups: state.membersReducer.childrenGroups,
    chosenGroups: state.membersReducer.chosenGroups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextQuestion: () => {
      dispatch(questionsAction.nextQuestion());
    },
    goToQuestion: (number) => {
      dispatch(questionsAction.goToQuestion(number));
    },
    addLeadMember: (id) => {
      dispatch(membersAction.addLeadMember(id));
    },
    createTravelGroup: (travelGroupId, partnerId) => {
      dispatch(membersAction.createTravelGroup(travelGroupId, partnerId));
    },
    addChildrenGroups: (groups) => {
      dispatch(membersAction.addChildrenGroups(groups));
    },
    addChosenGroups: (groups) => {
      dispatch(membersAction.addChosenGroups(groups));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
