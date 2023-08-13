  class edenHeader2{
    getMenuButtons(){
      return cy.get("#navbar a");
    }

    getSubTitles(){
      return cy.get("h5")
    }

    getImageLogo(){
      return cy.get("#header-logo");
    }
  }

export default new edenHeader2();