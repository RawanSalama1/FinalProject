/// <reference types="cypress" />
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
            // cy.get('windows:alert').then($Msg => {
            //     const msg = $Msg.text()
            //     cy.log(num)
            // })
            cy.wait(1000)
            cy.contains("OK").click()
        })
        close();

    }
    openAccount() {
        cy.wait(2000)
        cy.get(openAccount).click()
        cy.get(selectCustomer).select(data.data4)
        cy.get(Currency).select(1)
        cy.get(Process).click()
        cy.on('window:alert', str => {
            expect(str).to.contains(sucess)
            cy.wait(1000)
            cy.contains("OK").click()


        })

    }
    Customers() {
        cy.get(Customers).click()
        cy.get(table).contains(data.data1).should('exist')
        cy.get(table).contains(data.data2).should('exist')
        cy.get(table).contains(data.data3).should('exist')

        // cy.get(deleteButton).contains(data.data1).click()
    }

}
export default BankManagerPage