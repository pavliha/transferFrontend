import React, { Component } from 'react';
import Checkboxes from '../components/Checkboxes';
import SendButton from '../components/SendButton';

class SeventhQuestion extends Component {
  constructor(props) {
    super(props);

    this.stepIncrement = 100;
    this.rangeMinimum = 200;
    this.rangeMaximum = 30000;

    this.state = {
      loading: false,
      budget: {},
      rangeValues: {},
      positions: {},
    };

    this.setBudget = this.setBudget.bind(this);
    this.calcPositions = this.calcPositions.bind(this);
    this.save = this.save.bind(this);
    this.getInitialValues = this.getInitialValues.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(`
      For the next 2 years, what is the average budget for your trips? 
      Not sure about this? Fret not. You can adjust this for each trip, later on.
    `);

    this.getInitialValues();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.travelGroup.budget) {
      this.props.addAnswer(`
        From £${this.state.budget.minimumBudget} to £${this.state.budget.maximumBudget}
      `);
      this.props.questionsNavigation.next();
    }
  }

  getInitialValues() {
    const minValue = (this.rangeMinimum * 100) / this.rangeMaximum;
    const maxValue = 20;

    const rangeValues = {
      minimum: minValue,
      maximum: maxValue,
    };
    const budget = this.calcBudget({ minimum: minValue, maximum: maxValue });
    const positions = this.calcPositions({ minimum: minValue, maximum: maxValue });

    this.setState({ rangeValues, budget, positions });
  }

  setBudget(e) {
    const element = e.currentTarget;
    const rangeValues = Object.assign({}, this.state.rangeValues);

    if (element.id === 'maximumBudget') {
      if (+element.value - rangeValues.minimum < 4) {
        rangeValues.maximum = rangeValues.minimum + 4;
      } else {
        rangeValues.maximum = +element.value;
      }
    } else {
      if (rangeValues.maximum - +element.value < 4) {
        rangeValues.minimum = rangeValues.maximum - 4;
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
      minimumBudget: ((values.minimum * this.rangeMaximum) / 100).toFixed(0),
      maximumBudget: ((values.maximum * this.rangeMaximum) / 100).toFixed(0),
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
                step={(this.stepIncrement*100)/this.rangeMaximum}
                min={(this.rangeMinimum*100)/this.rangeMaximum}
              />
              <input
                type="range"
                id="maximumBudget"
                value={this.state.rangeValues.maximum}
                onChange={this.setBudget}
                step={(this.stepIncrement*100)/this.rangeMaximum}
                style={{
                  background: `
                    linear-gradient(to right, #c7c5c5 0%, #c7c5c5 ${this.state.rangeValues.minimum}%, ${this.state.rangeValues.minimum}%, 
                    #CE7D9E ${this.state.rangeValues.maximum}%, #c7c5c5 ${this.state.rangeValues.maximum}%)
                  `,
                }}
              />
            </div>
            <div className="text">
              <span>{this.rangeMinimum}£</span>
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
