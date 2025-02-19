/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Timer({ timeLeft, darkMode }) {
  return (
    <div className={`text-lg font-semibold font-poppins ${darkMode ? "text-yellow-400 bg-gradient-to-r from-gray-700 to-gray-900" : "text-black bg-gradient-to-r from-white to-gray-100"} p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out sm:p-3 md:p-4 lg:p-5 xs:p-2`}>
      Time Left: {timeLeft} seconds
    </div>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Timer;
