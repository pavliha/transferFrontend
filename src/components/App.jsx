import React, { Component } from 'react';
import { connect } from 'react-redux';
import questionsAction from '../actions/questions.action';
import membersAction from '../actions/members.action';

import Intro from './Intro';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import FifthQuestion from './FifthQuestion';
import SixthQuestion from './SixthQuestion';
import SeventhQuestion from './SeventhQuestion';
import EighthQuestion from './EighthQuestion';

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
      case 5: {
        return (
          <FifthQuestion
            nextQuestion={this.props.nextQuestion}
            goToQuestion={this.props.goToQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            chosenGroups={this.props.chosenGroups}
            travelGroupId={this.props.travelGroupId}
            childrenGroups={this.props.childrenGroups}
          />
        );
      }
      case 6: {
        return (
          <SixthQuestion
            nextQuestion={this.props.nextQuestion}
            goToQuestion={this.props.goToQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            travelGroupId={this.props.travelGroupId}
          />
        );
      }
      case 7: {
        return (
          <SeventhQuestion
            nextQuestion={this.props.nextQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            travelGroupId={this.props.travelGroupId}
          />
        );
      }
      case 8: {
        return (
          <EighthQuestion
            nextQuestion={this.props.nextQuestion}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
          />
        );
      }
      default: return false;
    }
  }

  scrollChat() {
    const lastQuestion = this.chat.querySelector('.question:last-child');
    const answerPanel = document.querySelector('.answer-panel');
    if (lastQuestion.getBoundingClientRect().bottom + 100 >= answerPanel.getBoundingClientRect().top) {
      this.chatBody.scroll({
        top: this.chatBody.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
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
      }, () => {
        setTimeout(() => {
          this.scrollChat();
        }, 500);
      });
    }, 600);
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
  }

  renderChatBody() {
    const chatBody = [
      <div className="question" key='intro'>
        <div className="title">
          <b>Chef Bot</b>
        </div>
        <div className="text">
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
      </div>,
    ];
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
            <div>
              <div className="chat-body" ref={(chatBody) => { this.chatBody = chatBody; }} onWheel={this.shiftPosition}>
                <div className="messages-list" ref={(chat) => { this.chat = chat; }}>
                  {this.renderChatBody()}
                </div>
              </div>
              {this.getQuestion()}
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
