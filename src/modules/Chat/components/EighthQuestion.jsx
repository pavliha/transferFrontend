import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import SendButton from "./SendButton";

class EighthQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: '',
                email: '',
                password: '',
            },
            loading: false,
            showPassword: 0,
            errors: [],
        };
        this.setValue = this.setValue.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        this.props.addQuestion(
            <div>
                <p>Great, we have enough information about your family's tastes for vacations.</p>
                <p>
                    We are a community of travellers that help each other. We have some influencing
                    family travellers who had witnessed years of travelling to exotic countries.
                </p>
                <p>Become a part of this close-knit community and enjoy unique trips that your
                    friends may have not experienced.</p>
                <p>Sign up and see those inspiring trips for yourselves.</p>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signUpData) {
            if (!nextProps.isLogged) {
                this.props.logIn({
                    email: this.state.userData.email,
                    password: this.state.userData.password,
                    strategy: 'local',
                });
            } else {
                this.props.addQuestion(`
          Congratulations! You are now an official member of Vacations Café.
          Now go ahead and setup your first travel to get to our band of specialists design your next trip.
        `);
                this.props.addOffsetBlock();
                this.props.questionsNavigation.next();
            }
        } else if (nextProps.signUpError) {
            var errorMessage = nextProps.signUpError.message;
            if (nextProps.signUpError.name === 'Conflict') {
                errorMessage = "The email you entered already has an account. Try a different email."
            }
            this.setState({
                loading: false,
                errors: [errorMessage],
            });
        }
    }

    setValue(e) {
        const userData = Object.assign({}, this.state.userData);
        userData[e.currentTarget.id] = e.currentTarget.value;
        const errors = Object.assign({}, this.state.errors);

        const result = this.validateField(e.currentTarget.id, e.currentTarget.value);
        if (result === true) {
            delete errors[e.currentTarget.id];
        } else {
            errors[e.currentTarget.id] = result;
        }

        this.setState({
            userData,
            errors,
        });
    }

    showPassword() {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    }

    validateField(fieldName, value) {
        switch (fieldName) {
            case 'name': {
                const fullName = value.split(' ');
                return fullName.length >= 2 && fullName[1] ? true : 'Please, enter your full name';
            }
            case 'email': {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(value) ? true : 'Email is not valid';
            }
            case 'password': {
                const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                return re.test(value) ? true : 'Password should contail at least 8 characters, at least one letter and one number';
            }
            default:
                return false;
        }
    }

    validateForm() {
        const errors = {};
        Object.keys(this.state.userData).forEach((field) => {
            const result = this.validateField(field, this.state.userData[field]);
            if (result === true) return;
            errors[field] = result;
        });
        return errors;
    }

    save(history) {
        if (this.state.loading) return;
        const errors = this.validateForm();
        this.setState({
            errors,
        });
        if (Object.keys(errors).length) return;
        this.setState({
            loading: true,
        });

        const [firstName, lastName] = this.state.userData.name.split(' ');

        this.props.signUp({
            firstName,
            lastName,
            email: this.state.userData.email,
            password: this.state.userData.password,
        });

        history.push('/join/welcome')
    }

    render() {
        return (
            <div className="answer-panel">
                <div className="answer-variants">
                    <div className="send-form">
                        <div className="input-field">
                            <div>Name:</div>
                            <input type="text" id="name" value={this.state.userData.name} onChange={this.setValue}/>
                        </div>
                        <div className="input-field">
                            <div>Email address:</div>
                            <input type="email" id="email" value={this.state.userData.email} onChange={this.setValue}/>
                        </div>
                        <div className="input-field">
                            <div>Create password:</div>
                            <input type={this.state.showPassword ? 'text' : 'password'} id="password"
                                   value={this.state.userData.password} onChange={this.setValue}/>
                            <div className="show-password"
                                 onClick={this.showPassword}>{this.state.showPassword ? 'Hide' : 'Show'}</div>
                            <div className="login-error">
                                {
                                    Object.keys(this.state.errors).map((error) => {
                                        return <div key={Math.random()}>{this.state.errors[error]}</div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Route render={({history}) => (
                    <SendButton loading={this.state.loading} handler={this.save.bind(this, history)}/>
                )}/>


            </div>
        );
    }
}

export default EighthQuestion;
