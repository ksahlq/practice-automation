## Automated workflow test

This is an automated e2e test of http://automationpractice.com/

## Install and run

Clone repo to your local machine and run - `npm install`

Open Cypress GUI - `npm run cy:dev`

Run Cypress CLI - `npm run cy:run`

## Tests
Test file is located in [Cypress/integration](Cypress/integration)
- [order-items.spec.js](Cypress/integration/order-items.spec.js) - Creates account, logs in, order items and checkouts.  
Tests are imlemented such that they are calling the backend API server and interacting with GUI elements. 