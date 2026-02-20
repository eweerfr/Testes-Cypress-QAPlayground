import login from '../support/helpers/loginPage.js'

context('Should reach Login page from index', () => {
    describe('Index page navigation', () => {
        it('Should access Login page', () => {
            cy.goToIndex()
            cy.contains('button', 'Login').click()
            cy.get('.login-content').should('exist').contains('h1', 'Login').should('be.visible')
        })
    })
})

context('Positive Scenario', () => {

    beforeEach(() => {
        cy.goToLogin()
        cy.setUserStorage(0)
    })

    describe('Login successful', () => {
        it('Login com storage injetado', () => {

            cy.fixture('users').its('usuarios.0').then((user) => {
                login.typeUser(user.email)
                login.typePassword(user.senha)
                login.captcha()
                login.confirm()

                cy.evaluateModal('Login realizado com sucesso!')
            })
        })

        it('Accessibility options should be visible', () => {
            cy.checkAccessibility()
        })
    })
})

context('Negative Scenario', () => {

    beforeEach(() => {
        cy.goToLogin()
    })

    describe('Login successful', () => {
        it('Should not allow Unregistered User Login', () => {

            cy.fixture('users').its('usuarios.1').then((user) => {
                login.typeUser(user.email)
                login.typePassword(user.senha)
                login.captcha()
                login.confirm()

                cy.evaluateModal('Nenhum cadastro encontrado. Realize o cadastro antes de fazer login.')
            })
        })
    })
})