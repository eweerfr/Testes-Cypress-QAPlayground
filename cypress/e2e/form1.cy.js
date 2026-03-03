import form1Page from '../support/helpers/form1Page'
import addressData from '../fixtures/address.json'

describe('Address Form Flow', () => {

    beforeEach(() => {
        cy.goToForm1()
    })

    context('Positive Scenarios', () => {
        it('Should submit and save data to localStorage successfully', () => {
            cy.clearLocalStorage()

            const data = addressData.validAddress

            form1Page.fillForm(data)
            form1Page.submit()

            cy.evaluateModal('Endereço cadastrado com sucesso!')

            cy.window()
                .its('localStorage.endereco')
                .then(JSON.parse)
                .should('deep.equal', data)
        })

        it('Should display accessibility options', () => {
            cy.checkAccessibility()
        })
    })

    context('Negative Scenarios', () => {
        addressData.scenarios.forEach((scenario) => {   //iterando pelos cenarios na fixture
            it(`Should not allow submission with ${scenario.label}`, () => {
                form1Page.fillForm(scenario.data)
                form1Page.submit()

                const expectedMsg = scenario.customMsg || `Preencher corretamente o campo ${scenario.field}, dúvida entrar em requisitos!`
                
                cy.evaluateModal(expectedMsg)
            })
        })
    })
})