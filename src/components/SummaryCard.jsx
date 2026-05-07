import React from "react";

export const SummaryCard = ({
  show,
  totalCredit,
  totalGradeCredit,
  finalSGPA,
  failedCount,
}) => {
  if (!show) return null;

  const statusClass = failedCount > 0 ? "warning" : "success";
  const statusMessage =
    failedCount > 0
      ? `⚠️ <strong>${failedCount} subject(s) failed</strong> - Please work harder on these subjects!`
      : `✓ <strong>Congratulations!</strong> You passed all subjects.`;

  return (
    <div id="summarySection" className="card summary-card">
      <div className="summary-grid">
        {/* Total Credit Hour */}
        <div className="summary-item">
          <h3>📚 Total Credit Hour</h3>
          <div>
            <span className="value" id="totalCredit">
              {totalCredit.toFixed(2)}
            </span>
            <span className="unit">Cr</span>
          </div>
        </div>

        {/* Total Grade Point × Credit */}
        <div className="summary-item">
          <h3>⭐ Total Grade Point × Credit</h3>
          <div>
            <span className="value" id="totalGradeCredit">
              {totalGradeCredit.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Final SGPA */}
        <div className="summary-item">
          <h3>🎯 Final SGPA</h3>
          <div>
            <span className="value SGPA" id="finalSGPA">
              {finalSGPA.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Status Text */}
      <div className={`status-text ${statusClass}`} id="statusText">
        <div dangerouslySetInnerHTML={{ __html: statusMessage }} />
      </div>
    </div>
  );
};
