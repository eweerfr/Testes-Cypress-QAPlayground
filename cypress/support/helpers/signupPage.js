class SignupPage {

    typeName(name) {
        cy.get('#nome').type(name)
    }

    typeEmail(email) {
        cy.get('#email').type(email)
    }

    typePassword(password) {
        cy.get('#senha').type(password)
        cy.get('#confirmarSenha').type(password)
    }

    confirm() {
        cy.get('#btnCadastrar').click()
    }
}

export default new SignupPage()