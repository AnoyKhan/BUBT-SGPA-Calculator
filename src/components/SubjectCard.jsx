import React from "react";
import {
  getGradePoint,
  getLetterGrade,
  getGradeBadgeClass,
} from "../utils/gradeCalculations";

export const SubjectCard = ({ index, subject, onChange }) => {
  const marks = subject.marks || 0;
  const gradePoint = getGradePoint(marks);
  const letterGrade = getLetterGrade(marks);
  const badgeClass = getGradeBadgeClass(letterGrade);
  // Show "Pending" if marks is 0 (not entered), otherwise check if failed
  const isFailed = marks > 0 && marks < 40;
  const statusBadgeClass = marks === 0 ? "pending" : isFailed ? "failed" : "passed";
  const statusText = marks === 0 ? "Pending" : isFailed ? "Failed" : "Passed";

  const cardClass = `subject-card ${marks === 0 ? "pending" : isFailed ? "failed" : "passed"}`;

  return (
    <div className={cardClass} id={`subject-${index}`}>
      {/* Subject header with title and status */}
      <div className="subject-header">
        <span className="subject-title">Subject {index + 1}</span>
        <span
          className={`status-badge ${statusBadgeClass}`}
          id={`status-${index}`}
        >
          {statusText}
        </span>
      </div>

      {/* Subject Name Input */}
      <div className="input-group">
        <label htmlFor={`subjectName-${index}`}>Subject Name</label>
        <input
          type="text"
          id={`subjectName-${index}`}
          placeholder="e.g., Mathematics"
          value={subject.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
        />
      </div>

      {/* Marks Input */}
      <div className="input-group">
        <label htmlFor={`marks-${index}`}>
          Marks (0-100){" "}
          <span style={{ color: "#E74C3C", fontWeight: "bold" }}>*</span>
        </label>
        <input
          type="number"
          id={`marks-${index}`}
          min="0"
          max="100"
          placeholder="e.g., 85 (Required)"
          value={subject.marks || ""}
          onChange={(e) => onChange(index, "marks", e.target.value)}
        />
      </div>

      {/* Credit Hour Input */}
      <div className="input-group">
        <label htmlFor={`credit-${index}`}>
          Credit Hour{" "}
          <span style={{ color: "#E74C3C", fontWeight: "bold" }}>*</span>
        </label>
        <input
          type="number"
          id={`credit-${index}`}
          min="0.5"
          step="0.5"
          placeholder="e.g., 3.0 (Required)"
          value={subject.credit || ""}
          onChange={(e) => onChange(index, "credit", e.target.value)}
        />
      </div>

      {/* Grade Point Display (read-only) */}
      <div className="grade-display">
        <span>
          Grade Point:{" "}
          <span className="grade-value" id={`gradePoint-${index}`}>
            {gradePoint.toFixed(2)}
          </span>
        </span>
        <span style={{ marginLeft: "12px", fontSize: "12px" }}>
          Letter Grade:{" "}
          <span
            className={`grade-badge ${badgeClass}`}
            id={`letterGrade-${index}`}
          >
            {letterGrade}
          </span>
        </span>
      </div>
    </div>
  );
};
