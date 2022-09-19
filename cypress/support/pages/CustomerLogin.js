/// <reference types="cypress" />
const CustomerLoginButton = '[ng-click="customer()"]'
const SelectName = '#userSelect'
const Login = '[type= "submit"]'
const LogOut = '[ng-show="logout"]'
const Text = '.fontBig'
const AccNumber = '.ng-binding'
const selected = '[selected = "selected"]'
const Deposit = '[ng-class="btnClass2"]'
const amount = '[ng-model="amount"]'
const submit = '[type="submit"]'
const message = '[ng-show="message"]'
const Balance = '.borderM > :nth-child(3) > :nth-child(2)'
class CustomerLogin {
    Login() {
        cy.get(CustomerLoginButton).click();
        cy.get(SelectName).eq(0).select(2);
        cy.get(Login).should('be.visible').click()
        cy.get(Text).should('exist')
        cy.get(LogOut).should('exist');

    }
    Assert() {
        cy.get(selected).then($AccNum => {
            const num = $AccNum.text()
            cy.log(num)
            cy.get(AccNumber).contains(num).should('be.visible')

        })
        cy.get(Balance).then($BalNum => {
            const BalanceNum = $BalNum.text()
            cy.log(BalanceNum)
            cy.get(Balance).should('be.visible')

        })
    }
    Deposit() {
        cy.get(Deposit).click();
        cy.get(amount).type(200)
        cy.get(submit).contains('Deposit').click()
        cy.get(Balance).then($BalNum => {
            const BalanceNum = $BalNum.text()
            cy.log(BalanceNum)
            cy.get(Balance).should('be.visible')
        })
        cy.get(message).contains('Deposit Successful').should('exist')

    }

}

export default CustomerLogin
