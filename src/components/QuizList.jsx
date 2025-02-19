/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function QuizList({ startQuiz, darkMode }) {
  return (
    <div className={`p-6 font-poppins ${darkMode ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-gradient-to-r from-white to-gray-100"} rounded-lg shadow-lg transition-all duration-300 ease-in-out text-center sm:p-4 md:p-6 lg:p-8 xs:p-2`}>
      <h2 className={`text-2xl font-bold ${darkMode ? "text-yellow-400" : "text-black"} mb-4 sm:text-xl md:text-2xl lg:text-3xl xs:text-lg`}>Available Quizzes</h2>
      <button
        onClick={startQuiz}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out sm:px-3 sm:py-1 md:px-4 md:py-2 lg:px-5 lg:py-3 xs:px-2 xs:py-1"
      >
        Start Sample Quiz
      </button>
    </div>
  );
}

QuizList.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default QuizList;
