import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load attempt history from localStorage
    const savedAttempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
    setAttempts(savedAttempts);

    // Load dark mode preference from localStorage
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
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

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} p-8 transition-all duration-300 ease-in-out sm:p-4 md:p-6 lg:p-8 xs:p-2`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
        >
          {darkMode ? "Day Mode" : "Night Mode"}
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-8 sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl">Interactive Quiz Platform</h1>
      {!quizStarted && !quizFinished && (
        <div className={`shadow-lg rounded-lg p-8 w-full max-w-md text-center ${darkMode ? "bg-gray-800" : "bg-white"} mb-8 transition-all duration-300 ease-in-out sm:p-4 md:p-6 lg:p-8 xs:p-2`}>
          <h2 className="text-xl font-semibold mb-6 sm:text-lg md:text-xl lg:text-2xl xs:text-lg">Dashboard</h2>
          <button
            onClick={startQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out mb-4 sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
          >
            Start New Quiz
          </button>
          <Scoreboard attempts={attempts} darkMode={darkMode} />
        </div>
      )}
      {quizStarted && <Quiz finishQuiz={finishQuiz} darkMode={darkMode} />}
      {quizFinished && (
        <Results
          score={score}
          totalQuestions={10}
          restartQuiz={startQuiz}
          goToDashboard={goToDashboard}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}

export default App;
