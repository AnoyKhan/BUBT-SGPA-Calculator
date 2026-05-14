# 🎓 BUBT SGPA Calculator

<div align="center">

![BUBT SGPA Calculator Logo](assets/logo.png) <!-- TODO: Add actual project logo or an appropriate icon -->

[![GitHub stars](https://img.shields.io/github/stars/AnoyKhan/BUBT-SGPA-Calculator?style=for-the-badge)](https://github.com/AnoyKhan/BUBT-SGPA-Calculator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AnoyKhan/BUBT-SGPA-Calculator?style=for-the-badge)](https://github.com/AnoyKhan/BUBT-SGPA-Calculator/network)
[![GitHub issues](https://img.shields.io/github/issues/AnoyKhan/BUBT-SGPA-Calculator?style=for-the-badge)](https://github.com/AnoyKhan/BUBT-SGPA-Calculator/issues)
[![GitHub license](https://img.shields.io/github/license/AnoyKhan/BUBT-SGPA-Calculator?style=for-the-badge)](LICENSE)

**Effortlessly calculate your Semester Grade Point Average (SGPA) for BUBT courses.**

[Live Demo](https://anoykhan.github.io/BUBT-SGPA-Calculator/) <!-- TODO: Verify or add actual live demo link -->

</div>

## 📖 Overview

The **BUBT SGPA Calculator** is a user-friendly web application designed to help students of Bangladesh University of Business and Technology (BUBT) easily calculate their Semester Grade Point Average. This tool streamlines the process of inputting course details, assigned credits, and obtained grades to provide an accurate SGPA, removing the manual effort and potential for errors. It's a pure frontend application, ensuring quick access and calculation directly in your browser.

## ✨ Features

-   **🎯 Intuitive SGPA Calculation**: Accurately computes SGPA based on entered grades and credits.
-   **📝 Dynamic Course Entry**: Easily add and remove course rows to match your semester's coursework.
-   **➕ Credit & Grade Input**: Dedicated fields for entering course credits and selecting letter grades.
-   **🚀 Real-time Feedback**: View your SGPA update instantly as you input course information.
-   **📱 Responsive Design**: Optimized for a seamless experience across various devices (desktops, tablets, and mobile phones).
-   **💾 Local Storage Persistence**: (Assumed based on calculator utility) Automatically saves your entered data locally in the browser, so your inputs are retained even if you close and reopen the application.

## 🖥️ Screenshots

![BUBT SGPA Calculator Desktop Screenshot](assets/screenshot-desktop.png) <!-- TODO: Add actual desktop screenshot -->
![BUBT SGPA Calculator Mobile Screenshot](assets/screenshot-mobile.png) <!-- TODO: Add actual mobile screenshot -->

## 🛠️ Tech Stack

**Frontend:**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**DevOps:**
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

## 🚀 Quick Start

Follow these steps to get a development environment up and running on your local machine.

### Prerequisites
-   **Node.js**: Ensure you have Node.js (v18 or higher recommended) installed. You can download it from [nodejs.org](https://nodejs.org/).
-   **npm**: Node Package Manager, usually installed with Node.js.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AnoyKhan/BUBT-SGPA-Calculator.git
    cd BUBT-SGPA-Calculator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Visit `http://localhost:5173` (or the port specified in your terminal) to see the application running.

## 📁 Project Structure

```
BUBT-SGPA-Calculator/
├── .github/             # GitHub Actions workflows
├── assets/              # Static assets (images, logos, etc.)
├── dist/                # Production build output
├── docs/                # Additional documentation (if any)
├── public/              # Public static files (e.g., favicon)
├── src/                 # Main application source code
│   ├── components/      # Reusable React components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.jsx         # React entry point
│   └── utils/           # Utility functions (e.g., calculation logic)
├── .gitignore           # Specifies intentionally untracked files to ignore
├── .nojekyll            # Prevents GitHub Pages from processing with Jekyll
├── index.html           # Main HTML file
├── LICENSE              # Project license
├── package-lock.json    # Records exact dependency versions
├── package.json         # Project metadata and scripts
└── vite.config.js       # Vite build configuration
```

## ⚙️ Configuration

This project is a client-side application and does not require extensive server-side environment variable configuration.

### Configuration Files
-   `vite.config.js`: Configures the Vite build tool, including React plugin and base path for GitHub Pages deployment.

## 🔧 Development

### Available Scripts
In the project directory, you can run:

| Command         | Description                                     |
|-----------------|-------------------------------------------------|
| `npm run dev`   | Starts the development server.                  |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run lint`  | Checks code for stylistic and programmatic errors. |
| `npm run preview`| Serves the `dist` folder locally for previewing a production build. |

### Development Workflow
To contribute or develop, simply clone the repository, install dependencies, and start the development server using `npm run dev`. Changes to `src/` files will trigger hot module reloading.

## 🧪 Testing

This project does not currently have a dedicated testing framework configured. All functionality is expected to be tested manually during development.

## 🚀 Deployment

### Production Build
To create a production-ready build:
```bash
npm run build
```
This command compiles and bundles the application into the `dist/` directory, optimizing it for production.

### Deployment Options
-   **GitHub Pages**: This project is configured for easy deployment to GitHub Pages. The `.nojekyll` file and the `vite.config.js` base path are set up for this purpose. After pushing to the `main` branch, GitHub Actions (if configured in `.github/workflows`) can automatically deploy the `dist` folder.

## 🤝 Contributing

We welcome contributions! Please feel free to open issues or submit pull requests.

### Development Setup for Contributors
The development setup is the same as described in the [Quick Start](#🚀-quick-start) section. Ensure your code adheres to standard JavaScript and React practices.

## 📄 License

This project is licensed under the [Other](LICENSE) - see the [LICENSE](LICENSE) file for full details.

## 🙏 Acknowledgments

-   Built with [React](https://react.dev/) for an efficient and declarative UI.
-   Powered by [Vite](https://vitejs.dev/) for a fast development experience.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/AnoyKhan/BUBT-SGPA-Calculator/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [AnoyKhan](https://github.com/AnoyKhan)

</div>