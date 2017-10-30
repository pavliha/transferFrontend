import React, { Component } from 'react';
import { connect } from 'react-redux';
import questionsAction from '../actions/questions.action';
import membersAction from '../actions/members.action';
import IntroContainer from './IntroContainer';
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
    this.addOffsetBlock = this.addOffsetBlock.bind(this);
  }

  getQuestion() {
    switch (this.props.questionNumber) {
      case 1: {
        return (
          <FirstQuestion
            questionsNavigation={this.props.questionsNavigation}
            ageGroups={this.props.ageGroups}
            leadMember={this.props.leadMember}
            setActivities={this.props.setActivities}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
          />
        );
      }
      case 2: {
        return (
          <SecondQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            partner={this.props.partner}
            createTravelGroup={this.props.createTravelGroup}
            addPartner={this.props.addPartner}
            travelGroup={this.props.travelGroup}
          />
        );
      }
      case 3: {
        return (
          <ThirdQuestion
            questionsNavigation={this.props.questionsNavigation}
            partner={this.props.partner}
            ageGroups={this.props.ageGroups}
            setActivities={this.props.setActivities}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
          />
        );
      }
      case 4: {
        return (
          <FourthQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            ageGroups={this.props.ageGroups}
            addChildren={this.props.addChildren}
            children={this.props.children}
          />
        );
      }
      case 5: {
        return (
          <FifthQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            children={this.props.children}
            setActivities={this.props.setActivities}
            ageGroups={this.props.ageGroups}
          />
        );
      }
      case 6: {
        return (
          <SixthQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            countries={this.props.countries}
            getCountries={this.props.getCountries}
            setCountries={this.props.setCountries}
            travelGroup={this.props.travelGroup}
          />
        );
      }
      case 7: {
        return (
          <SeventhQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            setBudget={this.props.setBudget}
            travelGroup={this.props.travelGroup}
          />
        );
      }
      case 8: {
        return (
          <EighthQuestion
            questionsNavigation={this.props.questionsNavigation}
            addQuestion={this.addQuestion}
            addAnswer={this.addAnswer}
            signUp={this.props.signUp}
            signUpData={this.props.signUpData}
            signUpError={this.props.signUpError}
            logIn={this.props.logIn}
            isLogged={this.props.isLogged}
            addOffsetBlock={this.addOffsetBlock}
          />
        );
      }
      default: return false;
    }
  }

  scrollChat() {
    const chat = this.chat;
    if (!chat) return;
    chat.scrollBy({ top: 2500, left: 0, behavior: 'smooth' });
  }

  addQuestion(question) {
    const questions = [...this.state.questions];
    const newQuestion = (
      <div className="question" key={`question-${questions.length + 1}`}>
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
        this.scrollChat();
      });
    }, 600);
  }

  addAnswer(answer) {
    const answers = [...this.state.answers];
    const newAnswer = (
      <div className="answer" key={`answer-${answers.length + 1}`}>
        <div className="title">
          <b>Me</b>
        </div>
        <div className="body">
          {answer}
        </div>
      </div>
    );
    answers.push(newAnswer);
    setTimeout(() => {
      this.setState({
        answers,
      }, () => {
        this.scrollChat();
      });
    }, 5);
  }

  addOffsetBlock() {
    setTimeout(() => {
      const questions = [...this.state.questions];
      const lastElementHeight = this.chat.querySelector('.question:last-child').clientHeight + 30;
      const height = this.container.clientHeight - lastElementHeight;
      questions.push(<div style={{ height }} />);
      this.setState({
        questions,
      }, () => {
        this.scrollChat();
      });
    }, 600);
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
      <div className={`container ${this.props.questionNumber === 0 ? 'white-bg' : ''}`} ref={container => this.container = container}>
        {
          this.props.questionNumber === 0 ?

            <IntroContainer
              questionsNavigation={this.props.questionsNavigation}
              ageGroups={this.props.ageGroups}
              getAgeGroups={this.props.getAgeGroups}
              leadMember={this.props.leadMember}
              addLeadMember={this.props.addLeadMember}
              addQuestion={this.addQuestion}
              addAnswer={this.addAnswer}
            />
          :
            <div className="scroll-fix">
              <div className="chat" ref={chat => this.chat = chat}>
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
    ageGroups: state.membersReducer.ageGroups,
    questionNumber: state.questionsReducer.questionNumber,
    leadMember: state.membersReducer.leadMember,
    partner: state.membersReducer.partner,
    travelGroup: state.membersReducer.travelGroup,
    children: state.membersReducer.children,
    countries: state.membersReducer.countries,
    isLogged: state.membersReducer.isLogged,
    signUpError: state.membersReducer.signUpError,
    signUpData: state.membersReducer.signUpData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    questionsNavigation: {
      prev: () => {
        dispatch(questionsAction.prevQuestion());
      },
      next: () => {
        dispatch(questionsAction.nextQuestion());
      },
      goTo: (number) => {
        dispatch(questionsAction.goToQuestion(number));
      },
    },
    addLeadMember: () => {
      dispatch(membersAction.addLeadMember());
    },
    getAgeGroups: () => {
      dispatch(membersAction.getAgeGroups());
    },
    setActivities: (id, activities, memberType) => {
      dispatch(membersAction.setActivities(id, activities, memberType));
    },
    createTravelGroup: () => {
      dispatch(membersAction.createTravelGroup());
    },
    addPartner: () => {
      dispatch(membersAction.addPartner());
    },
    addChildren: (childrenCount) => {
      dispatch(membersAction.addChildren(childrenCount));
    },
    getCountries: () => {
      dispatch(membersAction.getCountries());
    },
    setCountries: (countries) => {
      dispatch(membersAction.setCountries(countries));
    },
    setBudget: (budget) => {
      dispatch(membersAction.setBudget(budget));
    },
    signUp: (data) => {
      dispatch(membersAction.signUp(data));
    },
    logIn: (data) => {
      dispatch(membersAction.logIn(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
