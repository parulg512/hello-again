Hello Again - Automated QA Assignment

This repository contains the automated testing solution and QA deliverables for the Hello Again assignment.

🚀 Project Overview

This project demonstrates an end-to-end UI test automation scenario using Playwright with TypeScript, following the Page Object Model (POM) design pattern for maintainability and scalability.

✅ Automated Test Scenario

The implemented test covers the following flow:

- Navigate to the Hello Again dashboard
- Open User Overview
- Select the first user (max.mustermann@helloagain.at)
- Click Edit
- Update the first name to “Maximilian”
- Save changes
- Verify that the updated name “Maximilian Mustermann” is displayed

🧪 Key Features

- End-to-End UI Automation using Playwright
- Assertions included to validate that user data is updated correctly
- Page Object Model (POM) for clean separation of logic and selectors
- Reusable components for better scalability
- Automatic reporting with HTML reports, traces, and video capture on failure

🧠 Design Decisions

- Playwright was chosen for its speed, reliability, and built-in features like auto-waiting and tracing
- TypeScript improves code readability and maintainability
- POM structure ensures easier updates if UI changes

🛠 Prerequisites
-Node.js (v16 or higher)
-npm

📦 Installation
-git clone https://github.com/parulg512/hello-again.git
-cd helloagain
-npm install
-npx playwright install chromium

🧪 Running Tests

- Run Headless
- npm test
- Run in UI Mode
- npm run test:ui
- View Report
- npx playwright show-report

📂 Project Structure

- tests/ → Test specifications
- playwright.config.ts → Global configuration
