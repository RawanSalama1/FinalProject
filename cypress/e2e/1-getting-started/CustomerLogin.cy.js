/// <reference types="cypress" />

import CustomerLogin from "../../support/pages/CustomerLogin";
import VisitWeb from "../../support/pages/VisitWeb";
import home from "../../support/pages/home";

const visit = new VisitWeb();
const Customer = new CustomerLogin();
describe('Customer login page', () => {
    it('Select account name and login', () => {
        visit.visit()
        Customer.Login()
        Customer.Assert()
        Customer.Deposit()
        Customer.Witdrawl()
    })
})