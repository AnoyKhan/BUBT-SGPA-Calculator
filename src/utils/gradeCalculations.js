// Grade scale mapping
export const gradeScale = {
  80: 4.00,
  75: 3.75,
  70: 3.50,
  65: 3.25,
  60: 3.00,
  55: 2.75,
  50: 2.50,
  45: 2.25,
  40: 2.00,
  0: 0.00
};

/**
 * Converts marks to letter grades (A+, A, A-, B+, etc.)
 */
export const getLetterGrade = (marks) => {
  if (marks >= 80) return 'A+';
  if (marks >= 75) return 'A';
  if (marks >= 70) return 'A-';
  if (marks >= 65) return 'B+';
  if (marks >= 60) return 'B';
  if (marks >= 55) return 'B-';
  if (marks >= 50) return 'C+';
  if (marks >= 45) return 'C';
  if (marks >= 40) return 'D';
  return 'F';
};

/**
 * Takes marks and returns the corresponding grade point
 */
export const getGradePoint = (marks) => {
  // If marks is below 40, it's failed (0.00)
  if (marks < 40) return 0.00;

  // Check each grade threshold from highest to lowest
  if (marks >= 80) return 4.00;
  if (marks >= 75) return 3.75;
  if (marks >= 70) return 3.50;
  if (marks >= 65) return 3.25;
  if (marks >= 60) return 3.00;
  if (marks >= 55) return 2.75;
  if (marks >= 50) return 2.50;
  if (marks >= 45) return 2.25;
  if (marks >= 40) return 2.00;

  return 0.00;
};

/**
 * Gets the CSS class name for the grade badge
 */
export const getGradeBadgeClass = (letterGrade) => {
  return letterGrade.toLowerCase().replace('+', '-plus').replace('-', '-minus');
};

/**
 * Validates subject inputs
 */
export const validateInputs = (subjects) => {
  for (let i = 0; i < subjects.length; i++) {
    const marks = subjects[i].marks;
    const credit = subjects[i].credit;

    // Check if marks is provided (mandatory field)
    if (marks === '' || marks === 0 || marks === null) {
      return {
        valid: false,
        error: `Subject ${i + 1}: Please enter marks. This field is required.`
      };
    }

    // Check if credit is provided (mandatory field)
    if (credit === '' || credit === 0 || credit === null) {
      return {
        valid: false,
        error: `Subject ${i + 1}: Please enter credit hour. This field is required.`
      };
    }

    // Validate marks (must be 0-100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return {
        valid: false,
        error: `Subject ${i + 1}: Marks must be between 0 and 100`
      };
    }

    // Validate credit (must be greater than 0)
    if (isNaN(credit) || credit <= 0) {
      return {
        valid: false,
        error: `Subject ${i + 1}: Credit hour must be greater than 0`
      };
    }
  }

  return { valid: true };
};

/**
 * Calculates SGPA from subjects
 */
export const calculateSGPA = (subjects) => {
  let totalCredit = 0;
  let totalGradeCredit = 0;
  let failedCount = 0;

  subjects.forEach(subject => {
    totalCredit += subject.credit;
    totalGradeCredit += (subject.gradePoint * subject.credit);

    if (subject.marks < 40) {
      failedCount++;
    }
  });

  const finalSGPA = totalCredit > 0 ? totalGradeCredit / totalCredit : 0;

  return {
    totalCredit,
    totalGradeCredit,
    finalSGPA,
    failedCount
  };
};
