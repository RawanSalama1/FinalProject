
/// <reference types="cypress" />

import VisitWeb from "../../support/pages/VisitWeb"
import BankManagerPage from "../../support/pages/BankManagerPage"
import home from "../../support/pages/home"
const visit = new VisitWeb();
const Manager = new BankManagerPage();
//const back = new home();
describe("Login to Bank Manager", () => {
    it('Test Manager Page', () => {
        visit.visit()
        Manager.open()
        Manager.AddCustomer()
        Manager.openAccount()
        Manager.Customers()
        // back.homePage()
    })


})

