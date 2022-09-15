/// <reference types="cypress" />
//import { now } from "cypress/types/lodash"
import data from "../../fixtures/AddCustomer.json"
const FirstName = '[ng-model= "fName"]'
const BankManager = '[ng-click="manager()"]'
const AddCustomer = '[ng-class="btnClass1"]'
const LastName = '[ng-model= "lName"]'
const PostCode = '[ng-model= "postCd"]'
const AddButton = '[type="submit"]'
const openAccount = '[ng-class="btnClass2"]'
const selectCustomer = '#userSelect'
const Currency = '#currency'
const Process = '[type = "submit"]'
const Customers = '[ng-class = "btnClass3"]'
const table = 'td.ng-binding'
const SuccesfullMes = 'Customer added successfully with customer id'
const sucess = 'Account created successfully with account Number :1016'
const deleteButton = '[ng-click="deleteCust(cust)"]'
const URLAddCustomer = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust'
const URLOpenAcc = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount'
class BankManagerPage {
    open() {

        cy.get(BankManager).click()
    }
    AddCustomer() {

        cy.get(AddCustomer).click()
        cy.get(FirstName).type(data.data1)
        cy.get(LastName).type(data.data2)
        cy.get(PostCode).type(data.data3)
        cy.get(AddButton).click();
        cy.on('window:alert', t => {
            expect(t).to.contains(SuccesfullMes)
            cy.intercept(URLAddCustomer).as('get')
            cy.wait('@get')
            cy.contains("OK").click()
        })
        close();
    }
    openAccount() {
        cy.get(openAccount).click()
        cy.get(selectCustomer).select(data.data4)
        cy.get(Currency).select(1)
        cy.get(Process).click()
        cy.on('window:alert', str => {
            expect(str).to.contains(sucess)
            cy.intercept(URLOpenAcc).as('Open')
            cy.wait('@open')
            cy.contains("OK").click()
        })
    }
    Customers() {
        cy.get(Customers).click()
        cy.get(table).contains(data.data1).should('exist')
        cy.get(table).contains(data.data2).should('exist')
        cy.get(table).contains(data.data3).should('exist')
        cy.get(deleteButton).should('exist')
    }
}
export default BankManagerPage