import React from "react";
import "../styles/Results.css";

function Scoreboard({ attempts }) {
  return (
    <div className="scoreboard">
      <h2>Quiz History</h2>
      {attempts.length === 0 ? (
        <p>No quiz attempts yet.</p>
      ) : (
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>
              Attempt {index + 1}: {attempt.score} / 10 (on {attempt.timestamp})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Scoreboard;