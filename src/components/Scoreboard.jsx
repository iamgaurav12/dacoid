/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

function Scoreboard({ attempts, darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`p-6 font-poppins ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-white to-gray-100"} rounded-xl shadow-xl transition-all duration-300 ease-in-out max-w-lg mx-auto sm:p-4 md:p-6 lg:p-8 xs:p-2`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-3xl font-extrabold ${darkMode ? "text-yellow-300" : "text-gray-800"} sm:text-2xl md:text-3xl lg:text-4xl xs:text-xl`}>Quiz History</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-sm ${darkMode ? "text-yellow-300" : "text-gray-800"} focus:outline-none sm:text-xs md:text-sm lg:text-base xs:text-xs`}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>
      {isOpen && (
        <div className="transition-all duration-300 ease-in-out">
          {attempts.length === 0 ? (
            <p className={`${darkMode ? "text-gray-500" : "text-gray-600"}`}>No quiz attempts yet.</p>
          ) : (
            <ul className="list-disc list-inside space-y-4">
              {attempts.map((attempt, index) => (
                <li key={index} className={`${darkMode ? "text-gray-400" : "text-gray-700"} mb-2`}>
                  <span className="font-semibold">Attempt {index + 1}:</span> {attempt.score} / 10 
                  <span className={`block text-sm ${darkMode ? "text-gray-600" : "text-gray-500"}`}>on {attempt.timestamp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

Scoreboard.propTypes = {
  attempts: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Scoreboard;
