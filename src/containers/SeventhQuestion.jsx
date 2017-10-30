import React, { Component } from 'react';
import Checkboxes from '../components/Checkboxes';
import SendButton from '../components/SendButton';

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
      positions: {},
    };
    this.setBudget = this.setBudget.bind(this);
    this.calcPositions = this.calcPositions.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(`
      What is the average budget for your trips? 
      Not sure about this? Just set a random interval. You can adjust this fro each trip, later on.
    `);
    this.setState({
      positions: this.calcPositions(this.state.rangeValues),
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.travelGroup.budget) {
      this.props.addAnswer(`
        From £${this.state.budget.minimumBudget} to £${this.state.budget.maximumBudget}
      `);
      this.props.questionsNavigation.next();
    }
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
      positions: this.calcPositions(rangeValues),
    });
  }

  calcPositions(rangeValues) {
    const rangeBoxWidth = this.rangeBox.clientWidth;
    let leftPricePosition = (rangeValues.minimum * rangeBoxWidth) / 100;
    let rightPricePosition = ((rangeValues.maximum * rangeBoxWidth) / 100) - 45;

    if (leftPricePosition + 45 > rightPricePosition) {
      const shift = (leftPricePosition - rightPricePosition + 50) / 2;
      leftPricePosition -= shift;
      rightPricePosition += shift;
    }
    const positions = { leftPricePosition, rightPricePosition };
    return positions;
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
    this.props.setBudget(this.state.budget);
  }

  render() {
    return (
      <div className="answer-panel">
        <div className="answer-variants">
          <div className="budget">
            <div className="range-values" ref={(rangeBox) => this.rangeBox = rangeBox}>
              <div className="from" style={{ left: this.state.positions.leftPricePosition }} ref={(from) => this.from = from}>
                £{this.state.budget.minimumBudget}
              </div>
              <div className="to" style={{ left: this.state.positions.rightPricePosition }} ref={(to) => this.to = to}>
                £{this.state.budget.maximumBudget}
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
                    linear-gradient(to right, #c7c5c5 0%, #c7c5c5 ${this.state.rangeValues.minimum}%, ${this.state.rangeValues.minimum}%, 
                    #CE7D9E ${this.state.rangeValues.maximum}%, #c7c5c5 ${this.state.rangeValues.maximum}%)
                  `,
                }}
              />
            </div>
            <div className="text">
              <span>10£</span>
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
