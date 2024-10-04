// cypress/e2e/login.cy.js
/// <reference types="cypress" />


import Navigation from '../../support/pageObject/Navigation';
import userLogin from '../../data/userLogin';


describe('Shopping Cart Page', () => {
  beforeEach(() => {
    Navigation.visitLoginPage();
    cy.get('#user-name').type(userLogin.validUser.username);
    cy.get('#password').type(userLogin.validUser.password);
    cy.get('#login-button').click();
    cy.wait(1000);
  });

  it('Verify the user can add product to the shopping cart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge')
      .should('be.visible');
    cy.wait(500);
  });

  it('Verify the user can see the shopping cart page', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.title')
      .should('be.visible')
      .should('contain', "Your Cart");
    cy.wait(500);
  });

})