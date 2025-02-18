import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    // Load attempt history from localStorage
    const savedAttempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
    setAttempts(savedAttempts);
  }, []);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true);
    setQuizStarted(false);

    // Save attempt history
    const attempt = {
      score: finalScore,
      timestamp: new Date().toLocaleString(),
    };
    const updatedAttempts = [...attempts, attempt];
    setAttempts(updatedAttempts);
    localStorage.setItem("quizAttempts", JSON.stringify(updatedAttempts));
  };

  const goToDashboard = () => {
    setQuizStarted(false);
    setQuizFinished(false);
  };

  return (
    <div className="App">
      <h1>Interactive Quiz Platform</h1>
      {!quizStarted && !quizFinished && (
        <div className="dashboard">
          <h2>Dashboard</h2>
          <button onClick={startQuiz}>Start New Quiz</button>
          <Scoreboard attempts={attempts} />
        </div>
      )}
      {quizStarted && <Quiz finishQuiz={finishQuiz} />}
      {quizFinished && (
        <Results
          score={score}
          totalQuestions={10}
          restartQuiz={startQuiz}
          goToDashboard={goToDashboard}
        />
      )}
    </div>
  );
}

export default App;