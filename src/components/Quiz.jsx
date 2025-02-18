import React, { useState, useEffect } from "react";
import Question from "./Question";
import Timer from "./Timer";
import { quizData } from "../data/quizData";
import "../styles/Quiz.css";

function Quiz({ finishQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answer) => {
    const currentQuestionData = quizData[currentQuestion];
    let isCorrect = false;

    if (currentQuestionData.type === "multiple-choice") {
      isCorrect = answer === currentQuestionData.answer;
    } else if (currentQuestionData.type === "integer") {
      // Convert both user answer and correct answer to numbers for comparison
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
    }, 1000); // Show feedback for 1 second
  };

  const calculateScore = () => {
    const score = userAnswers.filter((answer) => answer.isCorrect).length;
    finishQuiz(score);
  };

  const handleFinishQuiz = () => {
    calculateScore(); // Calculate score based on answered questions
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(null); // Skip question if time runs out
    }
    const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <Timer timeLeft={timeLeft} />
      <Question
        question={quizData[currentQuestion]}
        handleAnswer={handleAnswer}
      />
      {feedback && <div className="feedback">{feedback}</div>}
      <button className="finish-button" onClick={handleFinishQuiz}>
        Finish Quiz
      </button>
    </div>
  );
}

export default Quiz;