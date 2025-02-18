import React from "react";

function QuizList({ startQuiz }) {
  return (
    <div className="quiz-list">
      <h2>Available Quizzes</h2>
      <button onClick={startQuiz}>Start Sample Quiz</button>
    </div>
  );
}

export default QuizList;