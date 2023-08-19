/// <reference types="cypress" />
const edenHome2 = require ("../../Page/EdenHome2.js")
const edenHeader2 = require("../../Page/EdenHeader2.js")
describe("Test sobre la pagina de EDEN ENTRADAS", () => {
  beforeEach(()=>{
    const tamPantalla = Cypress.env("viewportdesktop").device;
    cy.viewport(tamPantalla);
    cy.visit ("/");
  });



    it("Verificar subtitulos", () => {
     
      edenHome2.getSubTitles().first().should ("contain.text","BUSCAR EVENTO")
      edenHome2.getSubTitles().last().should ("contain.text","CALENDARIO DE EVENTOS")   
});
  it("Verificar Menú", () => {
    
    edenHeader2.getMenuButtons().eq(0).should ("contain.text","HOME")
    edenHeader2.getMenuButtons().eq(1).should ("contain.text","TODOS")
    edenHeader2.getMenuButtons().eq(2).should ("contain.text","AGENDA DEL FINDE")
    edenHeader2.getMenuButtons().eq(3).should ("contain.text","RECITALES")
    edenHeader2.getMenuButtons().eq(4).should ("contain.text","TEATROS")
    edenHeader2.getMenuButtons().eq(5).should ("contain.text","CUARTETOS")
    edenHeader2.getMenuButtons().eq(6).should ("contain.text","FESTIVALES")
    edenHeader2.getMenuButtons().eq(7).should ("contain.text","SALAS")
     
  })
  it("Verificar pagina Recitales", () => {
   
    cy.get ("#navbar a") .eq(3).click();
});
});