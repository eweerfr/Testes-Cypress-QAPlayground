import signup from '../support/helpers/signupPage'

let users


context('Positive Scenario', () => {

    describe('Should signup successfully', () => {

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

    describe('Should not allow signup', () => {

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

        it('Should not allow only name', () => {
            const user = users.usuarios[1]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow numbers in name', () => {
            const user = users.usuarios[2]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow symbols in name', () => {
            const user = users.usuarios[3]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow double space in name', () => {
            const user = users.usuarios[4]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow incomplete name', () => {
            const user = users.usuarios[5]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Nome,dúvida entrar em Requisitos!')
        })

        it('Should not allow incomplete email', () => {
            const user = users.usuarios[6]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo E-mail,dúvida entrar em Requisitos!')
        })

        it('Should not allow incomplete email (. instead of @)', () => {
            const user = users.usuarios[7]

            signup.typeName(user.nome)
            cy.get('#email').invoke('val', user.email)  //entrada com invoke, type não estava passando espaço do email :(
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo E-mail,dúvida entrar em Requisitos!')
        })

        it('Should not allow long email (+64 characters)', () => {
            const user = users.usuarios[8]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo E-mail,dúvida entrar em Requisitos!')
        })

        it('Should not allow bad password (criteria: no numbers)', () => {
            const user = users.usuarios[9]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })

        it('Should not allow bad password (criteria: no capital letters)', () => {
            const user = users.usuarios[10]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })

        it('Should not allow bad password (criteria: no symbols)', () => {
            const user = users.usuarios[11]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })

        it('Should not allow bad password (criteria: does not meet required length)', () => {
            const user = users.usuarios[12]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })

        it('Should not allow bad password (criteria: exceeds required length)', () => {
            const user = users.usuarios[13]

            signup.typeName(user.nome)
            signup.typeEmail(user.email)
            signup.typePassword(user.senha)
            signup.confirm()


            cy.evaluateModal('Preencher corretamente o campo Senha,dúvida entrar em Requisitos!')
        })
    })
})