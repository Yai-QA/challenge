CookUnity Frontend Test Automation

This project contains automated tests for the CookUnity website using Playwright with JavaScript.

Project Structure

cookunityFront/

├── tests/                
├── pages/                 
├── playwright.config.js  
├── package.json           
└── test-results/         

Prerequisites
- Node.js (version 14 or higher)
- npm (included with Node.js)

Installation
1. Clone the repository:
   git clone <https://github.com/Yai-QA/challenge.git>
   cd cookunityFront
2. Install dependencies:
   npm install
3. Install required browsers:
   npx playwright install

Running Tests
Run all tests
npx playwright test

Run tests with UI
npx playwright test --ui

Run tests in debug mode
npx playwright test --debug

Reports
Reports are automatically generated after each execution in:
- `playwright-report/` - Interactive HTML report
- `test-results/` - Videos and screenshots of test executions

To view the HTML report:
npx playwright show-report

Test Description
The project includes automated tests for:
1. Navigation to www.cookunity.com
2. Entering zip code (10001)
3. Skipping the quiz
4. Selecting the 6 meals plan
5. Creating an account with specific credentials

Validations
- URL contains "en/meal-select"
- Meal list contains more than one element
- "Meal selected" section shows "0/6"

Configuration
The `playwright.config.js` file contains the main configuration:
- Supported browsers
- Timeouts
- Report configuration
- Video and screenshot settings

Additional Notes
- Videos and screenshots are automatically saved in case of failures
- Page Object Model pattern is used for better maintainability
- Test credentials are configured in the tests
