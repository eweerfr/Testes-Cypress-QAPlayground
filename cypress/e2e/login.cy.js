import login from '../support/helpers/loginPage.js'


context('Negative Scenario', () => {

    beforeEach(() => {
        cy.goToLogin()
    })

    describe('Login should fail', () => {
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

context('Positive Scenario', () => {

    beforeEach(() => {
        cy.goToLogin()
        cy.setUserStorage(0, 'qaplayground_usuario')
    })

    describe('Login should complete successfully', () => {
        it('Valid user Login', () => {

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

