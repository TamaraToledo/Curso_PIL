/// <reference types="cypress" />

  class EdenHeaderLocators {
    constructor() {
        //Botonera y Header principal//
        this.menuButtons = "#navbar a";
        this.subTitles = "h5";
        this.imageLogo = "#header-logo";
        //Sección de Búsqueda//
        this.serchInput = "#espectaculoList";
        this.serchSuggestion =".ui-menu-item";
        // Calendario
        this.calendarTitle =".ui-datepicker-title";
        this.calendar =".ui-datepicker-calendar";
    }
  };

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

    //Sección de Búsqueda//
    getSerchInput(){
      return cy.get (this.locators.serchInput);
    }
    getSerchSuggestion(){
      return cy.get(this.locators.serchSuggestion);
    }
    //Calendario
    getCalendarTitle(){
      return cy.get(this.locators.calendarTitle);
    }
    getCalendar(){
      return cy.get (this.locators.calendar);
    }
  };
  