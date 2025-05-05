# Cypress Automation Framework

This is a Cypress automation framework testing the app located at:  
https://github.com/reedsy/challenges/tree/main/qa

## How to run the tests

First you need to run the App:

1. [Install Node.js v20](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
2. `cd qa/`
3. `npm install`
4. `npm start`
5. The frontend will be running at http://localhost:5173/

Then you can run the Cypress tests:

1. Clone the current repo
2. In the root directory `npm install`

To execute the Cypress tests you have two options:

- [ ] `npx cypress open` → opens Cypress UI for interactive runs.
- [ ] `npx cypress run` → runs all tests headlessly in the terminal.

(Reports + screenshots auto-generated in cypress/reports)

## Technical details of the project

- Test runner: Cypress v14.
- Reporter: cypress-mochawesome-reporter (for HTML + JSON reports)
- Framework: Page Object Model (POM) for maintainability (pages/BookshelfPage.js).

Why I choose these tests:

- [ ] Pagination & search function bugs: I automated these because they are critical ones. They's breaking the navigation and the search functionality
- [ ] Bookshelf grid test: This is a core smoke test to confirm the book list is always loaded
