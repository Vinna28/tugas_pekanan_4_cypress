// cypress/page/Navigation.js

class Navigation {
    visitLoginPage() {
        cy.visit('https://www.saucedemo.com');
    }

    visitHomePage() {
        cy.visit('https://www.saucedemo.com/inventory.html');
    }
}


export default new Navigation();
