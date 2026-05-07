import React from "react";
import { SubjectCard } from "./SubjectCard";
import { SummaryCard } from "./SummaryCard";
import { SummaryTable } from "./SummaryTable";

export const Step2 = ({
  subjects,
  onChange,
  onCalculate,
  onReset,
  showSummary,
  calculationResults,
}) => {
  return (
    <section id="step2" className="step-section">
      <div className="step1-container">
        <div className="card">
          <h2>Step 2: Enter Subject Details</h2>
        </div>
      </div>

      {/* Subjects Grid (dynamically populated) */}
      <div id="subjectsContainer" className="subjects-grid">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            index={index}
            subject={subject}
            onChange={onChange}
          />
        ))}
      </div>

      {/* Summary Card */}
      {showSummary && calculationResults && (
        <SummaryCard
          show={showSummary}
          totalCredit={calculationResults.totalCredit}
          totalGradeCredit={calculationResults.totalGradeCredit}
          finalSGPA={calculationResults.finalSGPA}
          failedCount={calculationResults.failedCount}
        />
      )}

      {/* Summary Table */}
      {showSummary && <SummaryTable show={showSummary} subjects={subjects} />}

      {/* Action Buttons */}
      <div className="button-group">
        <button className="btn btn-success" onClick={onCalculate}>
          Calculate SGPA
        </button>
        <button className="btn btn-secondary" onClick={onReset}>
          Reset
        </button>
      </div>
    </section>
  );
};
