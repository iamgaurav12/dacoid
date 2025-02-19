/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Results({ score, totalQuestions, restartQuiz, goToDashboard, darkMode }) {
  return (
    <div className={`p-6 font-poppins ${darkMode ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-gradient-to-r from-white to-gray-100"} rounded-lg shadow-lg transition-all duration-300 ease-in-out text-center sm:p-4 md:p-6 lg:p-8 xs:p-2`}>
      <h2 className={`text-3xl font-bold ${darkMode ? "text-yellow-400" : "text-black"} mb-4 sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl`}>Quiz Results</h2>
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-black"} mb-6 sm:text-base md:text-lg lg:text-xl xs:text-sm`}>
        You scored <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{totalQuestions}</span>!
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={restartQuiz}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
        >
          Restart Quiz
        </button>
        <button
          onClick={goToDashboard}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

Results.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  goToDashboard: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Results;
