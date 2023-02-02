import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div>
        <h1>Please leave feedback</h1>
        {options.map(({ id, label }) => (
          <button
            className="button"
            name={label}
            type="button"
            key={id}
            onClick={el => {
              onLeaveFeedback(el.target.name);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   goodPlus: PropTypes.func.isRequired,
//   neutralPlus: PropTypes.func.isRequired,
//   badPlus: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
