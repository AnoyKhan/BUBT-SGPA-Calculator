import React, { useState } from "react";

export const Step1 = ({ onSubmit, onAlert }) => {
  const [numSubjects, setNumSubjects] = useState("");

  const handleCreateSubjects = () => {
    const num = parseInt(numSubjects);

    if (isNaN(num) || num < 1 || num > 20) {
      onAlert("Please enter a number between 1 and 20", "error");
      return;
    }

    onSubmit(num);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateSubjects();
    }
  };

  return (
    <section className="step-section step1-container" id="step1">
      <div className="card">
        <h2>Step 1: Enter Number of Subjects</h2>

        <div className="input-group">
          <label htmlFor="numSubjects">How many subjects are you taking?</label>
          <input
            type="number"
            id="numSubjects"
            min="1"
            max="20"
            value={numSubjects}
            onChange={(e) => setNumSubjects(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter number between 1 and 20"
          />
        </div>

        <button className="btn btn-primary" onClick={handleCreateSubjects}>
          Create Subjects
        </button>
      </div>
    </section>
  );
};
