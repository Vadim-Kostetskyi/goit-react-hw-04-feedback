import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import './style.css';

const { Component, default: React } = require('react');

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { id: 2000, label: 'good' },
    { id: 2010, label: 'neutral' },
    { id: 2100, label: 'bad' },
  ];

  plusOne = el => {
    this.setState(prevState => ({
      [`${el}`]: prevState[`${el}`] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const procent = Number(total > 0 ? (good * 100) / total : 0);
    return procent;
  };

  render() {
    const show =
      this.state.good || this.state.neutral || this.state.bad > 0
        ? true
        : false;
    return (
      <div className="box">
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.plusOne}
        ></FeedbackOptions>
        {show && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={parseInt(
              this.countPositiveFeedbackPercentage()
            )}
          ></Statistics>
        )}
        {!show && <p>No feedback given</p>}
      </div>
    );
  }
}

// fix

export const App = () => {
  return <div>{<Feedback />}</div>;
};
