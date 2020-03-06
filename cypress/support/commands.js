// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getCreateAccountCookies", () => {
    cy.getCreateAccountToken()
    cy.getCookies()
    .should('have.length', 1)
    .then((cookies) => {
        expect(cookies[0]).to.have.property('name', 'PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

})

Cypress.Commands.add("getCreateAccountToken", () => {
    return cy
    .request({
        method: 'POST',
        url: 'http://automationpractice.com/index.php',
        followRedirect: true,
        form: true, 
        body: "controller=authentication&SubmitCreate=1&ajax=true&email_create=hi.no%40input.input&back=my-account&token=ce65cefcbafad255f0866d3b32d32058"        
    })
})