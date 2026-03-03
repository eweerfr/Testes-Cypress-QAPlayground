import signup from '../support/helpers/signupPage'
import usersData from '../fixtures/users.json'

describe('Signup form flow', () => {

    beforeEach(() => {
        cy.goToSignup()
    })

    context('Positive Scenario', () => {
        it('Should register a valid user and save data to localStorage', () => {
            const user = usersData.usuarios[0]

            signup.fillForm(user)
            signup.submit()

            cy.evaluateModal('Cadastro realizado com sucesso!')

            cy.window()
                .its('localStorage.qaplayground_usuario')
                .then(JSON.parse)
                .should('deep.equal', user)
        })

        it('Should display accessibility options', () => {
            cy.checkAccessibility()
        })
    })

    context('Negative Scenarios', () => {
        usersData.validationScenarios.forEach((scenario) => {   //iterando pelos cenarios de erro na fixture :)
            it(`Should not allow registration with ${scenario.label}`, () => {
                const user = usersData.usuarios[scenario.index]

                signup.fillForm(user)
                signup.submit()

                cy.evaluateModal(`Preencher corretamente o campo ${scenario.field},dúvida entrar em Requisitos!`)
            })
        })
    })
})