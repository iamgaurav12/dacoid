import React, { useState } from "react";
import PropTypes from "prop-types";

function Question({ question, handleAnswer, darkMode }) {
  const [integerAnswer, setIntegerAnswer] = useState("");

  const handleInputChange = (e) => {
    setIntegerAnswer(e.target.value);
  };

  const submitAnswer = () => {
    if (question.type === "integer") {
      handleAnswer(integerAnswer);
      setIntegerAnswer(""); // Clear input after submission
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-lg font-medium text-gray-800 mb-4">{question.question}</p>

      {question.type === "multiple-choice" ? (
        <div className="flex flex-col gap-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Enter your answer"
            value={integerAnswer}
            onChange={handleInputChange}
            className={`p-2 border rounded-lg focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400" : "bg-white text-black border-gray-300 focus:ring-blue-500"}`}
          />
          <button
            onClick={submitAnswer}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["multiple-choice", "integer"]).isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Question;
