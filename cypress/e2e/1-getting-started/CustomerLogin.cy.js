/// <reference types="cypress" />
import CustomerLogin from "../../support/pages/CustomerLogin";
import VisitWeb from "../../support/pages/VisitWeb";
import homePage from "../../support/pages/homePage";
import Withdrawal from "../../support/pages/Withdrawal";
import Transaction from "../../support/pages/Transaction";
const visit = new VisitWeb();
const Customer = new CustomerLogin();
const withdrawl = new Withdrawal();
const transfer = new Transaction();
const back = new homePage()
describe('Customer login page', () => {

    it('Select account name and Deposit', () => {

        visit.visit()
        Customer.Login()
        Customer.Assert()
        Customer.Deposit()

    })
    it('Test withdrawal page', () => {
        withdrawl.Witdrawl()
    })
    it('Test Transaction page', () => {
        transfer.trans()
        back.homePage()
    })
})