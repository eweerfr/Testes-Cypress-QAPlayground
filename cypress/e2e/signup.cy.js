import signup from '../support/helpers/signupPage'

let users

context('Should reach Signup page from index', () => {
    describe('Index page navigation', () => {
        it('Should access Signup page', () => {
            cy.goToIndex()
            cy.contains('button', 'Cadastro').click()
            cy.get('.login-content').should('exist').contains('h1', 'Cadastro').should('be.visible')
        })
    })
})

context('Positive Scenario', () => {

    describe('Signup Page', () => {

        beforeEach(() => {
            cy.goToSignup()
            cy.fixture('users').then((data) => { users = data })
        })

        it('Should signup - Valid User', () => {
            const user = users.usuarios[0]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()

            cy.evaluateModal('Cadastro realizado com sucesso!')
        })

        it('Should save data to localStorage', () => {
            cy.clearLocalStorage()
            const user = users.usuarios[0]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()

            cy.evaluateModal('Cadastro realizado com sucesso!')

            cy.window().its('localStorage.qaplayground_usuario').then(JSON.parse).should('deep.equal', user)
        })

        it('Accessibility options should be visible', () => {
            cy.checkAccessibility()
        })
    })
})


context('Negative Scenario', () => {

    describe('Signup Page', () => {

        beforeEach(() => {
            cy.goToSignup()
            cy.fixture('users').then((data) => { users = data })
        })

        it('Should not allow empty name', () => {
            const user = users.usuarios[0]

            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow empty email', () => {
            const user = users.usuarios[0]

            signup.typeName(user.nome)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo E-mail,dúvida entrar em Requisitos!')
        })

        it('Should not allow empty password', () => {
            const user = users.usuarios[0]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })
    })
})