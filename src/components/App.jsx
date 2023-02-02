import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import './style.css';
import { logDOM } from '@testing-library/react';
const { useState, useEffect } = require('react');

const Feedback = () => {
  const [good, setFilter] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { id: 2000, label: 'good' },
    { id: 2010, label: 'neutral' },
    { id: 2100, label: 'bad' },
  ];

  const plusOne = el => {
    switch (el) {
      case 'good':
        setFilter(e => e + 1);
        break;
      case 'neutral':
        setNeutral(e => e + 1);
        break;
      case 'bad':
        setBad(e => e + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const procent = Number(total > 0 ? (good * 100) / total : 0);
    return procent;
  };

  const show = good || neutral || bad > 0 ? true : false;
  return (
    <div className="box">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={plusOne}
      ></FeedbackOptions>
      {show && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={parseInt(countPositiveFeedbackPercentage())}
        ></Statistics>
      )}
      {!show && <p>No feedback given</p>}
    </div>
  );
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};
