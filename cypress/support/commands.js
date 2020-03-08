Cypress.Commands.add('login', () => {   
    cy.request({
        method: 'POST',
        url: '/index.php?controller=authentication',
        form: true,
        body: {
            email: 'sadtimes@sadtimes.com',
            passwd: '12345',
            back: 'my-account',
            SubmitLogin: '' 
        }
    })     
})

Cypress.Commands.add('createAccount', () => {
    cy.request({
        method: 'POST',
        url: '/index.php?controller=authentication',
        form: true,
        body: {
            customer_firstname: 'Fun',
            customer_lastname: 'Times',
            email: 'funtimes@funtimes.com',
            passwd: '12345',
            days: '', 
            months: '',
            years: '',
            firstname: 'Fun',
            lastname: 'Times',
            company: '',
            address1: 'rty 55',
            address2: '',
            city: 'LA',
            id_state: '5',
            postcode: '89012',
            id_country: '21',
            other: '',
            phone: '',
            phone_mobile: '55552222',
            alias: 'Waterbloom 65',
            dni: '',
            email_create: '1',
            is_new_customer: '1',
            back: 'my-account', 
            submitAccount: ''
        }
    })
    cy.getCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364').should('exist') 
})

Cypress.Commands.add('addItemToCart', () => {
    cy.request({
        method: 'POST',
        url: '/index.php?rand=1583699244399',
        form: true, 
        body: {
            controller: 'cart',
            add: '1',
            ajax: 'true',
            qty: '1',
            id_product: '5',
            token: '70388fa2a1997156b3393a4b6484f52d'
        }
    })    
})
