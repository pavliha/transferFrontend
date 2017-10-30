import React, { Component } from 'react';
import SendButton from '../components/SendButton';

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
    this.save = this.save.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('One final step. Let\'s setup user login info for your account.');
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
          Congratulations! You are now an official member of vacations cafe. 
          Now go ahead and setup your first travel to get to our band of specialists design your next trip.
        `);
        this.props.addOffsetBlock();
        this.props.questionsNavigation.next();
      }
    } else if (nextProps.signUpError) {
      this.setState({
        loading: false,
        errors: [nextProps.signUpError.message],
      });
    }
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
    const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRE = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!userData.name || !userData.email || !userData.password) errors.push('All fields must be filled');
    if (userData.name.indexOf(' ') === -1) errors.push('Please, enter your full name');
    if (!emailRE.test(userData.email)) errors.push('Email is not valid');
    if (!passwordRE.test(userData.password)) errors.push('Password should contail at least 8 characters, at least one letter and one number');

    return errors;
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

    const [firstName, lastName] = this.state.userData.name.split(' ');

    this.props.signUp({
      firstName,
      lastName,
      email: this.state.userData.email,
      password: this.state.userData.password,
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
                    return <div key={Math.random()}>{error}</div>;
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
