/// <reference types="cypress" />
const Trans = '[ng-class="btnClass1"]'
const table = '.ng-binding'
const back = '.btn'
const Text = '.fontBig'
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
const URLTrans = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx'
var myDate = new Date();
var hours = myDate.getHours();
var minutes = myDate.getMinutes();
var second = myDate.getSeconds();
var ampm = hours >= 12 ? ' PM' : ' AM';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
second = (second < 10 ? '0' + second : second);
var strTime = hours + ':' + minutes + ampm;
const formattedDate = (month[myDate.getMonth()] + " " + myDate.getDate() + "," + myDate.getFullYear() + " " + strTime);
class Transaction {
    trans() {
        cy.get(Trans).click()
        cy.wait(2000)
        cy.log(formattedDate)
        cy.get(table).eq(0).should('exist', formattedDate)
        cy.get(table).eq(1).should('exist')
        cy.get(table).eq(2).should('exist')
        cy.get(table).eq(3).should('exist', formattedDate)
        cy.get(table).eq(4).should('exist')
        cy.get(table).eq(5).should('exist')
        cy.get(back).contains('Back').click()
        cy.get(Text).should('exist')
    }
}
export default Transaction