let users

context('Positive Scenario', () => {

    describe('Signup Page', () => {

        before(() => {
            cy.start()
            cy.contains('button', 'Cadastro').click()
            cy.get('.login-content').should('exist').and('be.visible')

            cy.fixture('users').then((data) => {
                users = data
            })
        })

        it('Should signup - Valid User', () => {
            const user = users.usuarios[0]

            cy.get('#nome').type(user.nome)
            cy.get('#email').type(user.email)
            cy.get('#senha').type(user.senha)
            cy.get('#confirmarSenha').type(user.senha)

            cy.get('#btnCadastrar').click()

            cy.get('#modalMensagem').should('be.visible')
            cy.get('#modalTexto')
                .should('be.visible').and('have.text', 'Cadastro realizado com sucesso!')
        })

    })

})


context('Negative Scenario', () => {

    describe('Signup Page', () => {

        before(() => {
            cy.start()
            cy.contains('button', 'Cadastro').click()
            cy.get('.login-content').should('exist').and('be.visible')

            cy.fixture('users').then((data) => {
                users = data
            })
        })

        it.only('Should not allow empty name', () => {
            const user = users.usuarios[1]
            cy.get('#email').type(user.email)
            cy.get('#senha').type(user.senha)
            cy.get('#confirmarSenha').type(user.senha)

            cy.get('#btnCadastrar').click()

            cy.get('#modalMensagemErro').should('be.visible').find('h2')
                .should('be.visible').and('have.text', 'Erro no Cadastro')
        })
    })
})