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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//NAVIGATION
Cypress.Commands.add('goToSignup', () => {
    // cy.viewport(1920, 1080)  //set viewport fullhd
    cy.visit('/frontend/pages/cadastro.html')
    cy.get('.login-content').should('exist').contains('h1', 'Cadastro').should('be.visible')
})
Cypress.Commands.add('goToLogin', () => {
    // cy.viewport(1920, 1080)  //set viewport fullhd
    cy.visit('/frontend/pages/login.html')
    cy.get('.login-content').should('exist').contains('h1', 'Login').should('be.visible')
})
Cypress.Commands.add('goToForm1', () => {
    // cy.viewport(1920, 1080)  //set viewport fullhd
    cy.visit('frontend/pages/formulario-1.html')
    cy.get('.login-content').should('exist').contains('h1', 'Cadastro de Endereço').should('be.visible')
})


//HELPERS
Cypress.Commands.add('evaluateModal', (text) => {
    cy.get('.modal-content').should('be.visible')
    cy.get('#modalTexto, #modalTextoErro').should('be.visible').and('have.text', text)
    cy.contains('OK').click({ force: true })
})

Cypress.Commands.add('checkAccessibility', () => {
    cy.get('#btn-audio').should('be.visible')
    cy.get('.vp-access-button').should('be.visible')
})

//INJECTOR
Cypress.Commands.add('setUserStorage', (index = 0, key) => {
    cy.fixture('users').its(`usuarios.${index}`).then((user) => {
        cy.window().then((win) => {
            win.localStorage.setItem(
                key,
                JSON.stringify(user)
            )
        })
    })
})




