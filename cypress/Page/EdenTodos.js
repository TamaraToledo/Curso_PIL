/// <reference types="cypress" />

class EdenTodosLocators {
  constructor() {
    // Desplegable
    this.desplegable = ".flex-row-reverse";
  }
}

export default class EdenTodos {
  constructor() {
    this.locators = new EdenTodosLocators();
  }

  // Desplegable
  getDesplegable() {
    return cy.get(this.locators.desplegable);
  }
}
