
/// <reference types="cypress" />

import VisitWeb from "../../support/pages/VisitWeb"
import BankManagerPage from "../../support/pages/BankManagerPage"
import homePage from "../../support/pages/homePage"
const visit = new VisitWeb();
const Manager = new BankManagerPage();
const back = new homePage();
describe("Login to Bank Manager", () => {
    it('Test Manager Page', () => {
        visit.visit()
        Manager.open()
    })
    it('Test Add Customer Page', () => {
        Manager.AddCustomer()
    })
    it('Test Open Account Page', () => {
        Manager.openAccount()
    })
    it('Test Customers Page', () => {
        Manager.Customers()
        back.homePage()
    })

})

