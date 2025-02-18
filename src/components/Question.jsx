import React, { useState } from "react";

function Question({ question, handleAnswer }) {
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
    <div className="question">
      <p>{question.question}</p>
      {question.type === "multiple-choice" ? (
        question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))
      ) : (
        <div>
          <input
            type="number"
            placeholder="Enter your answer"
            value={integerAnswer}
            onChange={handleInputChange}
          />
          <button onClick={submitAnswer}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Question;