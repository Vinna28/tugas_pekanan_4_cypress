// cypress/e2e/login.cy.js
/// <reference types="cypress" />


import Navigation from '../../support/pageObject/Navigation';
import userLogin from '../../data/userLogin';


describe('Login Page', () => {
  beforeEach(() => {
    Navigation.visitLoginPage();
  });

  it('Verify the user can login with the valid username and password', () => {
    cy.get('#user-name').type(userLogin.validUser.username);
    cy.get('#password').type(userLogin.validUser.password);
    cy.get('#login-button').click();
    cy.wait(1000);
    cy.get('.title')
      .should('be.visible')
      .should('contain', "Product");
    cy.wait(500);
  });

  it('Verify the user failed to login with an incorrect username or password', () => {
    cy.get('#user-name').type(userLogin.wrongPass.username);
    cy.get('#password').type(userLogin.wrongPass.password);
    cy.get('#login-button').click();
    cy.wait(1000);
    cy.get('.error-message-container')
      .should('be.visible')
      .should('contain', "Epic sadface: Username and password do not match any user in this service");
    cy.wait(500);
  });

})