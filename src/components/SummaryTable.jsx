import React from "react";
import { getLetterGrade, getGradeBadgeClass } from "../utils/gradeCalculations";

export const SummaryTable = ({ show, subjects }) => {
  if (!show) return null;

  return (
    <div id="tableSection" className="card">
      <div className="table-title">Subject Summary</div>
      <div className="table-container">
        <table className="summary-table" id="summaryTableElement">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade Point</th>
              <th>Letter Grade</th>
              <th>Credit Hour</th>
              <th>Total (GP × Cr)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {subjects.map((subject, index) => {
              const letterGrade = getLetterGrade(subject.marks);
              const badgeClass = getGradeBadgeClass(letterGrade);
              const totalGradeCredit = (
                subject.gradePoint * subject.credit
              ).toFixed(2);
              const statusText = subject.marks < 40 ? "❌ Failed" : "✓ Passed";

              return (
                <tr key={index}>
                  <td>
                    <strong>{subject.name || `Subject ${index + 1}`}</strong>
                  </td>
                  <td>{subject.marks}</td>
                  <td>{subject.gradePoint.toFixed(2)}</td>
                  <td>
                    <span className={`grade-badge ${badgeClass}`}>
                      {letterGrade}
                    </span>
                  </td>
                  <td>{subject.credit.toFixed(1)}</td>
                  <td>{totalGradeCredit}</td>
                  <td>{statusText}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
