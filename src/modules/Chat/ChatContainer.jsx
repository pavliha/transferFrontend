import React, {Component} from 'react';
import {connect} from 'react-redux';
import questionsAction from './actions/questions.action';
import membersAction from './actions/members.action';
import IntroContainer from './components/IntroContainer';
import FirstQuestion from './components/FirstQuestion';
import SecondQuestion from './components/SecondQuestion';
import ThirdQuestion from './components/ThirdQuestion';
import FourthQuestion from './components/FourthQuestion';
import FifthQuestion from './components/FifthQuestion';
import SixthQuestion from './components/SixthQuestion';
import SeventhQuestion from './components/SeventhQuestion';
import EighthQuestion from './components/EighthQuestion';
import './styles/style.scss'

SmoothScroll.polyfill();

class Chat extends Component {
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
            default:
                return false;
        }
    }

    scrollChat() {
        const chat = this.chat;
        if (!chat) return;
        chat.scrollBy({top: 2500, left: 0, behavior: 'smooth'});
    }

    addQuestion(question) {
        const questions = [...this.state.questions];
        const newQuestion = (
            <div className="question" key={`question-${questions.length + 1}`}>
                <div className="title">
                    <b>Peru</b>
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
            questions.push(<div style={{height}}/>);
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
        if (this.props.questionNumber === 0) {
            return (
                <div className="chat-container white-bg" ref={container => this.container = container}>
                    <IntroContainer
                        questionsNavigation={this.props.questionsNavigation}
                        ageGroups={this.props.ageGroups}
                        getAgeGroups={this.props.getAgeGroups}
                        leadMember={this.props.leadMember}
                        addLeadMember={this.props.addLeadMember}
                        addQuestion={this.addQuestion}
                        addAnswer={this.addAnswer}
                    />
                </div>
            );
        }
        return (
            <div className="chat-container" ref={container => this.container = container}>
                <div className="scroll-fix">
                    <div className="chat" ref={chat => this.chat = chat}>
                        {this.renderChatBody()}
                    </div>
                    <div>
                        {this.getQuestion()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ageGroups: state.chatReducer.members.ageGroups,
        questionNumber: state.chatReducer.questions.questionNumber,
        leadMember: state.chatReducer.members.leadMember,
        partner: state.chatReducer.members.partner,
        travelGroup: state.chatReducer.members.travelGroup,
        children: state.chatReducer.members.children,
        countries: state.chatReducer.members.countries,
        isLogged: state.chatReducer.members.isLogged,
        signUpError: state.chatReducer.members.signUpError,
        signUpData: state.chatReducer.members.signUpData,
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
