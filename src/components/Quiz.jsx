import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import Timer from "./Timer";
import { quizData } from "../data/quizData";

function Quiz({ finishQuiz, darkMode }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalTimeLeft, setTotalTimeLeft] = useState(1800); // 30 minutes in seconds
  const [feedback, setFeedback] = useState("");

  const handleAnswer = useCallback((answer) => {
    const currentQuestionData = quizData[currentQuestion];
    let isCorrect = false;

    if (currentQuestionData.type === "multiple-choice") {
      isCorrect = answer === currentQuestionData.answer;
    } else if (currentQuestionData.type === "integer") {
      isCorrect = Number(answer) === Number(currentQuestionData.answer);
    }

    setFeedback(isCorrect ? "Correct! 🎉" : "Incorrect! ❌");
    setUserAnswers([...userAnswers, { answer, isCorrect }]);

    setTimeout(() => {
      setFeedback("");
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
      } else {
        calculateScore();
      }
    }, 1000);
  }, [currentQuestion, userAnswers]);

  const calculateScore = () => {
    const score = userAnswers.filter((answer) => answer.isCorrect).length;
    finishQuiz(score);
  };

  const handleFinishQuiz = () => {
    calculateScore();
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(null);
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleAnswer]);

  useEffect(() => {
    if (totalTimeLeft === 0) {
      handleFinishQuiz();
    }
    const totalTimer = setInterval(() => setTotalTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(totalTimer);
  }, [totalTimeLeft]);

  return (
    <div className={`max-w-2xl mx-auto p-6 font-poppins ${darkMode ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-gradient-to-r from-white to-gray-100"} rounded-lg shadow-lg transition-all duration-300 ease-in-out sm:p-4 md:p-6 lg:p-8 xs:p-2`}>
      <h2 className={`text-2xl font-bold ${darkMode ? "text-yellow-400" : "text-black"} mb-4 sm:text-xl md:text-2xl lg:text-3xl xs:text-lg`}>
        Question {currentQuestion + 1}
      </h2>
      <Timer timeLeft={timeLeft} darkMode={darkMode} />
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-black"} mb-4 sm:text-base md:text-lg lg:text-xl xs:text-sm`}>
        Total Time Left: {Math.floor(totalTimeLeft / 60)}:{totalTimeLeft % 60 < 10 ? `0${totalTimeLeft % 60}` : totalTimeLeft % 60}
      </p>
      <Question
        question={quizData[currentQuestion]}
        handleAnswer={handleAnswer}
        darkMode={darkMode}
      />
      {feedback && (
        <div
          className={`mt-4 text-lg font-semibold ${feedback.includes("Correct") ? "text-green-400" : "text-red-400"} sm:text-base md:text-lg lg:text-xl xs:text-sm`}
        >
          {feedback}
        </div>
      )}
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
        onClick={handleFinishQuiz}
      >
        Finish Quiz
      </button>
    </div>
  );
}

Quiz.propTypes = {
  finishQuiz: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Quiz;
