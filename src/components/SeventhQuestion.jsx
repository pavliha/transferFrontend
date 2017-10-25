import React, { Component } from 'react';
import sendData from '../services/sendData';
import SendButton from './SendButton';

class SeventhQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValues: {
        minimum: 5,
        maximum: 70,
      },
      budget: {
        minimumBudget: 2500,
        maximumBudget: 35000,
      },
      loading: false,
    };
    this.setBudget = this.setBudget.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion('What is the average budget for your trips? Not sure about this? Just set a random interval. You can adjust this fro each trip, later on.');
  }

  setBudget(e) {
    const element = e.currentTarget;
    const rangeValues = Object.assign({}, this.state.rangeValues);

    if (element.id === 'maximumBudget') {
      if (+element.value - rangeValues.minimum < 10) {
        rangeValues.maximum = rangeValues.minimum + 10;
      } else {
        rangeValues.maximum = +element.value;
      }
    } else {
      if (rangeValues.maximum - +element.value < 10) {
        rangeValues.minimum = rangeValues.maximum - 10;
      } else {
        rangeValues.minimum = +element.value;
      }
    }
    this.setState({
      budget: this.calcBudget(rangeValues),
      rangeValues,
    });
  }

  calcBudget(values) {
    return {
      minimumBudget: ((values.minimum / 100) * 50000).toFixed(0),
      maximumBudget: ((values.maximum / 100) * 50000).toFixed(0),
    };
  }

  save() {
    if (this.state.loading) return;
    this.setState({
      loading: true,
    });
    sendData(`http://api.vacations.cafe:81/travel-groups?_id=${this.props.travelGroupId}`, 'PATCH', this.state.budget)
      .then(() => {
        this.props.addAnswer(`From $${this.state.budget.minimumBudget} to $${this.state.budget.maximumBudget}.`);
        this.props.nextQuestion();
      });
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="budget">
            <div className="range-values">
              <div className="from" style={{ left: this.state.rangeValues.minimum + '%' }}>
                ${this.state.budget.minimumBudget}
              </div>
              <div className="to" style={{ right: (100 - this.state.rangeValues.maximum) + '%' }}>
                ${this.state.budget.maximumBudget}
              </div>
            </div>
            <div className="range-sliders">
              <input
                type="range"
                id="minimumBudget"
                value={this.state.rangeValues.minimum}
                onChange={this.setBudget}
                step="0.02"
                min="0.02"
              />
              <input
                type="range"
                id="maximumBudget"
                value={this.state.rangeValues.maximum}
                onChange={this.setBudget}
                step="0.02"
                style={{
                  background: `
                    linear-gradient(to right, #c7c5c5 0%, #c7c5c5 ${this.state.rangeValues.minimum}%, ${this.state.rangeValues.minimum}%, #CE7D9E ${this.state.rangeValues.maximum}%, #c7c5c5 ${this.state.rangeValues.maximum}%)
                  `,
                }}
              />
            </div>
            <div className="text">
              <span>10$</span>
              <span>Go crazy chef!</span>
            </div>
          </div>
        </div>
        <SendButton loading={this.state.loading} handler={this.save} />
      </div>
    );
  }
}

export default SeventhQuestion;
