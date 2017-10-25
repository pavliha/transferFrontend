import React, { Component } from 'react';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class EighthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: 'test name',
        email: 'email@mail.com',
        password: '123456',
      },
      loading: false,
      showPassword: 0,
      errors: [],
    };
    this.setValue = this.setValue.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.save = this.save.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.auth = this.auth.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('One final step. Let\'s setup user login info for your account.');
  }

  setValue(e) {
    const userData = Object.assign({}, this.state.userData);
    userData[e.currentTarget.id] = e.currentTarget.value;
    this.setState({
      userData,
    });
  }

  showPassword() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  validateForm() {
    const errors = [];
    const userData = this.state.userData;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!userData.name || !userData.email || !userData.password) errors.push('All fields must be filled');
    if (userData.name.indexOf(' ') === -1) errors.push('Please, enter your full name');
    if (!re.test(userData.email)) errors.push('Email is not valid');
    if (userData.password.length < 6) errors.push('Password should contail at least 6 characters');

    return errors;
  }

  createUser() {
    const [firstName, lastName] = this.state.userData.name.split(' ');
    return sendData('http://api.vacations.cafe:81/users', 'POST', {
      firstName,
      lastName,
      email: this.state.userData.email,
      password: this.state.userData.password,
    });
  }

  auth() {
    return sendData('http://api.vacations.cafe:81/auth', 'POST', {
      email: this.state.userData.email,
      password: this.state.userData.password,
      strategy: 'local',
    });
  }

  save() {
    if (this.state.loading) return;
    const errors = this.validateForm();
    this.setState({
      errors,
    });
    if (errors.length) return;
    this.setState({
      loading: true,
    });

    this.createUser().then(this.auth).then((response) => {
      this.props.nextQuestion();
      this.props.addAnswer('Congratulations! You are now an official member of vacations cafe. Now go ahead and setup your first travel to get to our band of specialists design your next trip.');
    }, (error) => {
      this.setState({
        errors: [error.message],
        loading: false,
      });
    });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="send-form">
            <div className="input-field">
              <div>Name:</div>
              <input type="text" id="name" value={this.state.userData.name} onChange={this.setValue} />
            </div>
            <div className="input-field">
              <div>Email address:</div>
              <input type="email" id="email" value={this.state.userData.email} onChange={this.setValue} />
            </div>
            <div className="input-field">
              <div>Create password:</div>
              <input type={this.state.showPassword ? 'text' : 'password'} id="password" value={this.state.userData.password} onChange={this.setValue} />
              <div className="show-password" onClick={this.showPassword}>{ this.state.showPassword ? 'Hide' : 'Show' }</div>
              <div className="login-error">
                {
                  this.state.errors.map((error) => {
                    return <div>{error}</div>;
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default EighthQuestion;
