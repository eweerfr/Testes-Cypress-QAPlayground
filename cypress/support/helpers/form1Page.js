class form1 {
    typeStreet(street) {
        cy.get('#logradouro').type(street)
    }
    typeNumber(number) {
        cy.get('#numero').type(number)
    }
    typeSupplement(supplement) {
        cy.get('#complemento').type(supplement)
    }
    typeNeighborhood(neighborhood) {
        cy.get('#bairro').type(neighborhood)
    }
    typeCity(city) {
        cy.get('#cidade').type(city)
    }
    typeState(state) {
        cy.get('#estado').type(state)
    }
    typeZip(zip) {
        cy.get('#cep').type(zip)
    }

    confirm(){
        cy.get('#btnSalvar').click()
    }

}

export default new form1()