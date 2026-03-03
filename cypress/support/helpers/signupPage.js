class SignupPage {
    //! Uso do (if) para permitir preencher com campos vazios usando a função fillForm

    typeName(name) {
        if (name) cy.get('#nome').clear().type(name)
    }

    typeEmail(email) {
        if (email) { cy.get('#email').clear().invoke('val', email).trigger('input') }
    }

    typePassword(password) {
        if (password) {
            cy.get('#senha').clear().type(password)
            cy.get('#confirmarSenha').clear().type(password)
        }
    }

    submit() {
        cy.get('#btnCadastrar').click()
    }

    fillForm(user) {
        this.typeName(user.nome)
        this.typeEmail(user.email)
        this.typePassword(user.senha)
    }

}

export default new SignupPage()