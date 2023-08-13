/// <reference types="cypress" />

  class EdenHeaderLocators {
    constructor() {
        //Botonera y Header principal//
        this.menuButtons = "#navbar a";
        this.subTitles = "h5";
        this.imageLogo = "#header-logo";
        //Secci�n de B�squeda//
        this.serchInput = "#espectaculoList";
        this.serchSuggestion =".ui-menu-item";
    }
  }

  export default class EdenHeader {
    constructor() {
        this.locators = new EdenHeaderLocators();
           
    }
    //Botonera y Header Principal
    getMenuButtons(){
        return cy.get(this.locators.menuButtons);
    
    }
    getsubTitles(){
        return cy.get(this.locators.subTitles)
    }
    getImageLogo(){
      return cy.get (this.locators.imageLogo);
    }

    //Secci�n de B�squeda//
    getSerchInput(){
      return cy.get (this.locators.serchInput);
    }
    getSerchSuggestion(){
      return cy.get(this.locators.serchSuggestion);
    }

  }
  