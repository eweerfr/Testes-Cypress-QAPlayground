class LoginPage {

    typeUser(email) {
        cy.get('#usuario').type(email)
    }


    typePassword(password) {
        cy.get('#senha').type(password)
    }

    captcha(){
        cy.get('#captcha').check()
    }

    confirm() {        
        cy.contains ('button', 'Entrar').click()
    }
}

export default new LoginPage()