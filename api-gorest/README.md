 GoRest API Test Automation

This project contains automated API tests using Cypress for the GoRest public API service.
Project Structure
api-gorest/
├── cypress/
│   ├── e2e/           
│   ├── fixtures/     
│   ├── support/      
│   └── screenshots/   
├── cypress.config.js  
└── package.json       

Prerequisites
- Node.js (version 14 or higher)
- npm (included with Node.js)

Installation
1. Clone the repository:
   git clone <https://github.com/Yai-QA/challenge.git>
   cd api-gorest

2. Install dependencies:
   npm install
   
 Running Tests
Run all tests
npx cypress run
Run tests with UI
npx cypress open

Test Description
The project includes automated API tests for:
1. Getting user list
2. Finding active users
3. Updating user information
4. Validating API responses

Configuration
The `cypress.config.js` file contains the main configuration:
- Base URL: https://gorest.co.in/public/v1
- API endpoints
- Authentication settings

Additional Notes
- Tests use the GoRest public API
- Authentication token is required for some endpoints

API Documentation
For more information about the API, visit: [GoRest API Documentation](https://gorest.co.in/)
