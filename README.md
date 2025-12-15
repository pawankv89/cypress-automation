# What Is Cypress ?

Cypress is a modern end-to-end (E2E), integration, and component testing framework built for web applications.

Main Features
Runs inside the browser & DOM (very fast)
Automatic waits (no need for most wait() calls)
Great for Angular, React, Vue, and any web app
Time travel debugging
Screenshots & videos of test runs
Works well in CI/CD pipelines

Types of Cypress Tests
1. E2E Tests - Full user flow (UI + APIs)
2. Component Tests - Individual component behavior (Angular/React/Vue)

We are build a google search automation for beginner. 

This project was generated with [Cypress Version](https://www.cypress.io/#create) version 15.7.1.

### Clone this repo and just run below command
```bash
npm install
```

## Configuration Cypress
### Install Cypress - Node and Cypress
```bash
mkdir cypress-automation
cd cypress-automation
npm init -y
npm install cypress --save-dev
```
### Open Or Run Cypress - Browser or Terminal (CMD)
```bash
Open Cypress Browser:
npx cypress open

Run in terminal:
npx cypress run
```

## Configuration Details
```bash
node -v
v22.13.1
npm -v
10.9.2
```

```node
npx cypress --version
Cypress package version: 15.7.1
Cypress binary version: 15.7.1
Electron version: 37.6.0
Bundled Node version: 22.19.0
```

## Cypress Folder Structure
```code
cypress/
  e2e/
    example.cy.js
  fixtures/
  support/
cypress.config.ts
```

## Common Cypress Commands

```javascript
Visit a URL
cy.visit('/home');

Get element
cy.get('#id');
cy.get('.class');
cy.contains('Submit');       // by text

Type into input / textarea / contenteditable
cy.get('input').type('Hello');

Click
cy.get('button').click();
Click by label text (recommended)
cy.contains('button', 'Save').click();

Assert
cy.get('h1').should('contain', 'Welcome');

Clear div content
cy.get('#myDiv').invoke('html', '');

Search and click result
cy.get('input[name="search"]').type('Laptop{enter}');
cy.contains('.result-item', 'Dell').click();

Dynamic waits (Cypress auto-waits)
cy.get('.loader').should('not.exist');
```

| Task                      | Cypress Code                                        |
| ------------------------- | --------------------------------------------------- |
| Get div by ID             | `cy.get('#myDiv')`                                  |
| Clear text                | `cy.get('#myDiv').invoke('text', '')`               |
| Clear HTML                | `cy.get('#myDiv').invoke('html', '')`               |
| Clear contentEditable div | `cy.get('#editor').clear()` or `.invoke('text','')` |
| Clear using DOM API       | inside `.then()` manually                           |

## Cypress in Angular Dev Pipeline
```code
Add this to package.json:
"scripts": {
  "test:e2e": "cypress run"
}
```

## Sample Code
```code
describe('Example Test', () => {
  it('Visits a page and interacts', () => {

    cy.visit('https://example.com');

    cy.get('input[name="username"]')
      .type('admin');

    cy.get('input[name="password"]')
      .type('password123');

    cy.contains('button', 'Login').click();

    cy.url().should('include', '/dashboard');
  });
});

```

### Added Screenshots here when we are perform action.
<img width="964" alt="Images" src="https://github.com/pawankv89/cypress-automation/blob/master/images/image1.png">
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image1.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image2.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image3.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image4.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image5.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image6.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image7.png)
![](https://github.com/pawankv89/cypress-automation/blob/master/images/image8.png)
