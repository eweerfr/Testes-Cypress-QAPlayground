import form1Page from '../support/helpers/form1Page'

context('Positive Scenario', () => {
    describe('Form should submit successfully', () => {
        beforeEach(() => {
            cy.goToForm1()
        })

        const addressData = {
            logradouro: 'Rua das várzeas',
            numero: '1234',
            complemento: 'Casa',
            bairro: 'Central',
            cidade: 'Xique xique',
            estado: 'BA',
            cep: '12345-678'
        }

        it('Valid form submission', () => {
            form1Page.typeStreet(addressData.logradouro)
            form1Page.typeNumber(addressData.numero)
            form1Page.typeSupplement(addressData.complemento)
            form1Page.typeNeighborhood(addressData.bairro)
            form1Page.typeCity(addressData.cidade)
            form1Page.typeState(addressData.estado)
            form1Page.typeZip(addressData.cep)
            form1Page.confirm()

            cy.evaluateModal('Endereço cadastrado com sucesso!')
        })

        it('Should save data to localStorage', () => {
            cy.clearLocalStorage()

            form1Page.typeStreet(addressData.logradouro)
            form1Page.typeNumber(addressData.numero)
            form1Page.typeSupplement(addressData.complemento)
            form1Page.typeNeighborhood(addressData.bairro)
            form1Page.typeCity(addressData.cidade)
            form1Page.typeState(addressData.estado)
            form1Page.typeZip(addressData.cep)
            form1Page.confirm()

            cy.window().its('localStorage.endereco').then(JSON.parse).should('deep.equal', addressData)
        })

        it('Accessibility options should be visible', () => {
            cy.checkAccessibility()
        })
    })
})

context('Negative Scenario', () => {
    beforeEach(() => {
        cy.goToForm1()
    })

    it('invalid', () => {

    })

})
