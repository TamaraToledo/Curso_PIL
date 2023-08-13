/// <reference types="cypress" />
describe("Test sobre la pagina de EDEN ENTRADAS", () => {
  
    it("Verificar subtitulos", () => {
      cy.visit ("https://www.edenentradas.com.ar/");
      cy.get ("h5") .first().should ("contain.text","BUSCAR EVENTO")
      cy.get ("h5") .last().should ("contain.text","CALENDARIO DE EVENTOS")   
});
  it("Verificar Menú", () => {
    cy.visit ("https://www.edenentradas.com.ar/");
    cy.get ("#navbar a") .eq(0).should ("contain.text","HOME")
    cy.get ("#navbar a") .eq(1).should ("contain.text","TODOS")
    cy.get ("#navbar a") .eq(2).should ("contain.text","AGENDA DEL FINDE")
    cy.get ("#navbar a") .eq(3).should ("contain.text","RECITALES")
    cy.get ("#navbar a") .eq(4).should ("contain.text","TEATROS")
    cy.get ("#navbar a") .eq(5).should ("contain.text","CUARTETOS")
    cy.get ("#navbar a") .eq(6).should ("contain.text","FESTIVALES")
    cy.get ("#navbar a") .eq(7).should ("contain.text","SALAS")

  })
  it("Verificar pagina Recitales", () => {
    cy.visit ("https://www.edenentradas.com.ar/");
    cy.get ("#navbar a") .eq(3).click();
});
});