describe('Automated workflow of http://automationpractice.com', () => {

    before('Create user', () => {
        cy.createAccount()
    })

    beforeEach('Login with user bypassing UI', () => {
        cy.login()
    })

    it('Verify that we are logged in with user', () => {
        cy.visit('/index.php?controller=my-account')
        cy.get('h1').should('contain', 'My account')
    })

    it('Select item from shopping list, add to cart and checkout order', () => {        
        cy.visit('/index.php')        
        // Add one product in cart
        cy.get('[data-id-product="1"]').first().click()
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        // Agree to Terms of service
        cy.get('#cgv').check()      
        cy.get('.cart_navigation > .button > span').click() 
        cy.get('.bankwire').click() 
        cy.get('#cart_navigation > .button > span').click()
        // We get order confirmed.
        cy.get('h1').should('contain', 'Order confirmation')
        cy.get('[title="View my shopping cart"]').click()
        // After order has been processed. Check if cart is empty
        cy.get('.alert').should('contain', 'Your shopping cart is empty')

    })
})