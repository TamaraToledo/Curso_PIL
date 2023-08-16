/// <reference types="cypress" />

  class EdenFooterLocators {
    constructor() {
        //Pie de pagina//
        this.footerButtons = "footer";
        this.footertelefono = "#footer-telefono-lg #social-wa";
        this.imageAfip = "a#data-fiscal > img";
        this.footerButtonA = ".botonLink.esquina-redondeada";
        this.imagenFace ="#social-fb";
        this.imagenTwitter ="#social-tw";
        this.imagenInsta ="#social-gp";
        this.imagenmail ="#social-em";
   }
  };

  export default class EdenFooter {
    constructor() {
        this.locators = new EdenFooterLocators();
           
    }
    //Pie de pagina
    getFooterButtons(){
        return cy.get(this.locators.footerButtons);
    }
    getFooterTelefono(){
        return cy.get(this.locators.footertelefono);
    }
    getImageAfip(){
      return cy.get (this.locators.imageAfip);
    }
    geFooterButtonsA(){
      return cy.get(this.locators.footerButtonA);
  }
    getImageFace(){
      return cy.get (this.locators.imagenFace);
    }
    getImageTwitter(){
      return cy.get (this.locators.imagenTwitter);
    }
    getImageInsta(){
      return cy.get (this.locators.imagenInsta);
    }
    getImageMail(){
      return cy.get (this.locators.imagenmail);
    }
  }
