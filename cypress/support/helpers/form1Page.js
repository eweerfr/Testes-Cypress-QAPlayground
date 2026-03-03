class form1 {
    typeStreet(street) {
        if (street) cy.get('#logradouro').clear().type(street)
    }
    typeNumber(number) {
        if (number) cy.get('#numero').type(number)
    }
    typeSupplement(supplement) {
        if (supplement) cy.get('#complemento').type(supplement)
    }
    typeNeighborhood(neighborhood) {
        if (neighborhood) cy.get('#bairro').type(neighborhood)
    }
    typeCity(city) {
        if (city) cy.get('#cidade').type(city)
    }
    typeState(state) {
        if (state) cy.get('#estado').type(state)
    }
    typeZip(zip) {
        if (zip) cy.get('#cep').type(zip)
    }

    submit() {
        cy.get('#btnSalvar').click()
    }

    fillForm(addressData) {
        this.typeStreet(addressData.logradouro)
        this.typeNumber(addressData.numero)
        this.typeSupplement(addressData.complemento)
        this.typeNeighborhood(addressData.bairro)
        this.typeCity(addressData.cidade)
        this.typeState(addressData.estado)
        this.typeZip(addressData.cep)
    }
}

export default new form1()