/// <reference types="cypress" />
import CustomerLogin from "../../support/pages/CustomerLogin";
import VisitWeb from "../../support/pages/VisitWeb";
import homePage from "../../support/pages/homePage";
import Withdrawal from "../../support/pages/Withdrawal";
import Transaction from "../../support/pages/Transaction";
import BankManagerPage from "../../support/pages/BankManagerPage"
const Manager = new BankManagerPage();
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
    it('Withdrawal', () => {
        withdrawl.Witdrawl()
    })
    it('Transaction', () => {
        transfer.trans()
        back.homePage()
    })
})