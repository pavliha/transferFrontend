import React, { Component } from 'react';
import getData from '../services/getData';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class SixthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: {},
      chosenCountries: {},
      loading: true,
    };
    this.toggleCountry = this.toggleCountry.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('What countries to visit within the next 2 years?');
    this.getServedCountries();
  }

  getServedCountries() {
    const countries = {};
    getData('http://api.vacations.cafe:81/countries?isServed=true&$limit=50').then((response) => {
      response.data.forEach((country) => {
        countries[country._id] = country.text;
      });

      this.setState({
        countries,
        loading: false,
      });
    });
  }

  toggleCountry(e) {
    const clickedCountry = e.currentTarget;
    const countries = Object.assign({}, this.state.chosenCountries);
    if (!countries[clickedCountry.id]) {
      countries[clickedCountry.id] = clickedCountry.getAttribute('name');
    } else {
      delete countries[clickedCountry.id];
    }
    this.setState({
      chosenCountries: countries,
    });
  }

  save() {
    const countries = Object.keys(this.state.chosenCountries);
    if (!countries.length) return;
    this.setState({
      loading: true,
    });
    sendData(`http://api.vacations.cafe:81/travel-groups/?_id=${this.props.travelGroupId}`, 'PATCH', {
      preferredCountries: countries,
    }).then(() => {
      const answer = (
        <div className="countries">
          {
            countries.map((id) => {
              return (
                <div className="country active">
                  {this.state.countries[id]}
                </div>
              );
            })
          }
        </div>
      );
      this.props.addAnswer(answer);
      this.props.nextQuestion();
    });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="countries">
            {
              Object.keys(this.state.countries).map((country) => {
                return (
                  <div
                    className={`country ${this.state.chosenCountries[country] ? 'active' : ''}`}
                    key={country}
                    id={country}
                    name={this.state.countries[country]}
                    onClick={this.toggleCountry}
                  >
                    {this.state.countries[country]}
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

export default SixthQuestion;
