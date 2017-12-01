import React, { Component } from 'react';
import Checkboxes from './Checkboxes';
import SendButton from './SendButton';

class SixthQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      chosenCountries: {},
      loading: true,
    };
    this.toggleCountries = this.toggleCountries.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('Awesome. Pick the countries that your family fancies visiting in the next 2 years.');
    this.props.getCountries();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.countries.length && nextProps.countries.length) {
      this.setState({
        countries: nextProps.countries,
        loading: false,
      });
    }
    if (nextProps.travelGroup.preferredCountries) {
      const countries = nextProps.countries.filter((country) => {
        return this.state.chosenCountries[country._id];
      });

      nextProps.addAnswer(
        <Checkboxes
          elements={countries}
          activeElements={this.state.chosenCountries}
        />
      );

      nextProps.questionsNavigation.next();
    }
  }

  toggleCountries(e) {
    const clickedCountry = e.currentTarget.id;
    const countries = Object.assign({}, this.state.chosenCountries);
    if (!countries[clickedCountry]) {
      countries[clickedCountry] = 1;
    } else {
      delete countries[clickedCountry];
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
    this.props.setCountries(Object.keys(this.state.chosenCountries));
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-panel">
          <div className="answer-variants">
            <Checkboxes
              elements={this.state.countries}
              activeElements={this.state.chosenCountries}
              toggleCheckbox={this.toggleCountries}
            />
          </div>
          <SendButton loading={this.state.loading} handler={this.save} />
        </div>
      </div>
    );
  }
}

export default SixthQuestion;
