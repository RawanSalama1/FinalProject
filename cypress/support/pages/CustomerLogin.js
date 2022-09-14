/// <reference types="cypress" />
const CustomerLoginButton = '[ng-click="customer()"]'
const SelectName = '#userSelect'
const Login = '[type= "submit"]'
const Text = '.fontBig'
const AccNumber = '.ng-binding'
const selected = '[selected = "selected"]'
const Deposit = '[ng-class="btnClass2"]'
const amount = '[ng-model="amount"]'
const submit = '[type="submit"]'
const message = '[ng-show="message"]'
const withdrawal = '[ng-class="btnClass3"]'
const amountWithDrawal = '[type="number"]'
const confirm = '[type="submit"]'
const withdrawalMessage = '[class="error ng-binding"]'
class CustomerLogin {
    Login() {
        cy.get(CustomerLoginButton).click();
        cy.get(SelectName).eq(0).select(1);
        cy.get(Login).should('be.visible').click()
        cy.get(Text).should('exist')

    }
    Assert() {
        cy.get(selected).then($AccNum => {
            const num = $AccNum.text()
            cy.log(num)
            cy.get(AccNumber).contains(num).should('be.visible')

        })
    }
    Deposit() {
        cy.get(Deposit).click();
        cy.get(amount).type(100)
        cy.get(submit).click()
        cy.get(message).contains('Deposit Successful').should('exist')

    }
    Witdrawl() {
        cy.get(withdrawal).click()
        cy.get(amountWithDrawal).type(100)
        cy.get(confirm).click()
        cy.get(withdrawalMessage).contains('Transaction successful').should('exist')
    }
}

export default CustomerLogin
