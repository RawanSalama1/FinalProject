/// <reference types="cypress" />
const CustomerLoginButton = '[ng-click="customer()"]'
describe('Check the buttons of home page layout', () => {
    before('Visit XYZ Website', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })
    it('Open Customr Login Page', () => {
        cy.get(CustomerLoginButton).click();

    })
})