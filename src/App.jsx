import React, { useState } from "react";
import { Header } from "./components/Header";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Alert } from "./components/Alert";
import {
  getGradePoint,
  validateInputs,
  calculateSGPA,
} from "./utils/gradeCalculations";
import "./styles/index.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [showSummary, setShowSummary] = useState(false);
  const [calculationResults, setCalculationResults] = useState(null);

  const showAlert = (message, type = "success") => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const handleStep1Submit = (numSubjects) => {
    // Initialize subjects array
    const newSubjects = Array(numSubjects)
      .fill(null)
      .map(() => ({
        name: "",
        marks: 0,
        credit: 0,
        gradePoint: 0.0,
        failed: false,
      }));

    setSubjects(newSubjects);
    setCurrentStep(2);
    setShowSummary(false);
    setCalculationResults(null);
    showAlert(
      `${numSubjects} subject field(s) created successfully!`,
      "success",
    );
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];

    if (field === "name") {
      updatedSubjects[index].name = value;
    } else if (field === "marks") {
      const marks = parseFloat(value) || 0;
      updatedSubjects[index].marks = marks;
      updatedSubjects[index].gradePoint = getGradePoint(marks);
      updatedSubjects[index].failed = marks < 40;
    } else if (field === "credit") {
      updatedSubjects[index].credit = parseFloat(value) || 0;
    }

    setSubjects(updatedSubjects);
  };

  const handleCalculateSGPA = () => {
    // Validate inputs
    const validation = validateInputs(subjects);
    if (!validation.valid) {
      showAlert(validation.error, "error");
      return;
    }

    // Calculate SGPA
    const results = calculateSGPA(subjects);
    setCalculationResults(results);
    setShowSummary(true);

    showAlert(
      `SGPA calculated successfully! Final SGPA: ${results.finalSGPA.toFixed(2)}`,
      "success",
    );
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSubjects([]);
    setShowSummary(false);
    setCalculationResults(null);
    setAlertMessage("");
    showAlert("Form reset successfully!", "success");
  };

  return (
    <div className="container">
      <Header />

      {/* Alert */}
      <Alert
        message={alertMessage}
        type={alertType}
        onClose={() => setAlertMessage("")}
      />

      {/* Step 1: Number of Subjects */}
      {currentStep === 1 && (
        <Step1 onSubmit={handleStep1Submit} onAlert={showAlert} />
      )}

      {/* Step 2: Subject Details */}
      {currentStep === 2 && (
        <Step2
          subjects={subjects}
          onChange={handleSubjectChange}
          onCalculate={handleCalculateSGPA}
          onReset={handleReset}
          showSummary={showSummary}
          calculationResults={calculationResults}
        />
      )}
    </div>
  );
}

export default App;
