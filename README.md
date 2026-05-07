# SGPA Calculator - React Version

This is a React conversion of the SGPA Calculator application for BUBT (Bangladesh University of Business and Technology).

## 📋 What's Included

The application has been completely converted from vanilla HTML/CSS/JavaScript to a modern React application using Vite as the build tool.

### Project Structure

```
sgpa/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── SubjectCard.jsx
│   │   ├── SummaryCard.jsx
│   │   ├── SummaryTable.jsx
│   │   └── Alert.jsx
│   ├── utils/
│   │   └── gradeCalculations.js   # Grade calculation utilities
│   ├── styles/
│   │   └── index.css      # All CSS styles
│   ├── App.jsx            # Main App component
│   └── main.jsx           # React entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd sgpa
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎯 Features

- **Step 1**: Enter the number of subjects (1-20)
- **Step 2**: Enter subject details:
  - Subject name
  - Marks (0-100)
  - Credit hours
- **Automatic Calculations**:
  - Letter grade assignment
  - Grade point calculation
  - Pass/fail status
- **Summary Display**:
  - Total credit hours
  - Total grade points × credit
  - Final SGPA
  - Subject summary table
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Form Validation**: Ensures all inputs are valid before calculation
- **Alert System**: User feedback for actions and errors

## 📝 Grading Scale

- A+ (80+): 4.00
- A (75-79): 3.75
- A- (70-74): 3.50
- B+ (65-69): 3.25
- B (60-64): 3.00
- B- (55-59): 2.75
- C+ (50-54): 2.50
- C (45-49): 2.25
- D (40-44): 2.00
- F (Below 40): 0.00

## 🔄 Component Architecture

### Header

Displays the title and icon for the application.

### Step1

Input field for the number of subjects, with validation.

### Step2

Main form section containing:

- Subject cards for entering details
- Summary card showing calculations
- Summary table with all subject information
- Calculate and Reset buttons

### SubjectCard

Individual subject input card with:

- Subject name field
- Marks field
- Credit hour field
- Auto-calculated grade point display

### SummaryCard

Displays the final SGPA and totals after calculation.

### SummaryTable

Detailed table showing all subject information and results.

### Alert

Toast-style notification system for user feedback.

## 🛠️ Utilities

### gradeCalculations.js

Contains all grade-related calculation functions:

- `getLetterGrade(marks)`: Convert marks to letter grade
- `getGradePoint(marks)`: Convert marks to grade point
- `validateInputs(subjects)`: Validate all subject data
- `calculateSGPA(subjects)`: Calculate final SGPA

## 💻 Technologies Used

- **React 18.2**: UI library
- **Vite 4.3**: Build tool and dev server
- **CSS 3**: Styling with animations and responsive design
- **JavaScript (ES6+)**: Application logic

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This software is proprietary and confidential. See the LICENSE file for complete terms and conditions.

## 👤 Author

Md Shakib Khan Anoy

## 📞 Contact

For permissions or inquiries, contact: Md Shakib Khan Anoy

---

**Note**: This is a React conversion of the original HTML application. All functionality remains the same while providing better code organization, maintainability, and the ability to extend features more easily.
