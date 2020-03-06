describe('Using Cypress to write automated tests on automationpractice app', () => {
    /*
    before(() => {
        cy.visit('/index.php')
        cy.url().should('eq', 'http://automationpractice.com/index.php')
    })
    */
   const email = 'onetwothree@login.login'

    it('Create an account',() => {
        cy.visit('http://automationpractice.com/index.php?controller=my-account')
        
        cy.get('#email_create').type('automated.user@input.input')
        cy.get('#SubmitCreate > span').click()
        cy.url().should('include', '/__/#account-creation') 
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')  
        cy.get('#customer_firstname').type('Automated')
        cy.get('#customer_lastname').type('User')
        cy.get('#passwd').type('12345')
        cy.get('#company').type('Cypress') 
        //cy.get('#days').select('5').should('have.value', 5)        
        
    })
    it('Fill inn create form', () => {
    

    } )
    // TODO: save token and use it to login
    it('Create account without UI', () => {        
        cy.getCreateAccountToken()
        cy.getCreateAccountCookies()
        
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')
        cy.get('#SubmitCreate > span').click()
        //cy.get('#customer_firstname').type('Automated')

    })
})