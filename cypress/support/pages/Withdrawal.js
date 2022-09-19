/// <reference types="cypress" />
const withdrawal = '[ng-class="btnClass3"]'
const amountWithDrawal = '[ng-model="amount"]'
const confirm = '[type="submit"]'
const withdrawalMessage = '[ng-show="message"]'
const Balance = '.borderM > :nth-child(3) > :nth-child(2)'
class Withdrawal {
    Witdrawl() {
        cy.get(withdrawal).click()
        cy.wait(2000)
        const num = 100
        cy.get(amountWithDrawal).type(num)
        cy.get(confirm).contains('Withdraw').click()
        cy.get(withdrawalMessage).contains('Transaction successful').should('be.visible')
        cy.get(Balance).then($BalWith => {
            const BalanceWith = $BalWith.text()
            cy.log(BalanceWith)
            cy.get(Balance).should('be.visible')
            cy.wait(1000)
        })
    }
}
export default Withdrawal