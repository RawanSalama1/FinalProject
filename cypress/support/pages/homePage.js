/// <reference types="cypress" />
const homeButton = '[ng-click ="home()"]'
class homePage {
    homePage() {
        cy.get(homeButton).click()
    }
}
export default homePage