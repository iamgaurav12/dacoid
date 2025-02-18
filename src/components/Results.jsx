import React from "react";
import "../styles/Results.css";

function Results({ score, totalQuestions, restartQuiz, goToDashboard }) {
  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {totalQuestions}!
      </p>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <button onClick={goToDashboard}>Go to Dashboard</button>
    </div>
  );
}

export default Results;