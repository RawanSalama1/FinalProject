/// <reference types="cypress" />
const homeButton = '[ng-click ="home()"]'
class home {
    homePage() {
        cy.get(homeButton).click()
    }
}
export default home