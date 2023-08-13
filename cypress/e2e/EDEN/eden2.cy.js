/// <reference types="cypress" />
import EdenHome from "../../Page/EdenHome";
import EdenHeader from "../../Page/EdenHeader";
import EdenHeader2 from "../../Page/EdenHeader2";
import EdenEvent from "../../Page/EdenEvent";

const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent =new EdenEvent();

describe("Test sobre la pagina de EDEN ENTRADAS", () => {
  
    it("Verificar subtitulos", () => {
      cy.visit ("https://www.edenentradas.com.ar/");
      const txtBuscar = "BUSCAR EVENTO";
      const txtCalendar = "CALENDARIO DE EVENTOS";
      edenHome.getsubTitles().first().should("contain.text",txtBuscar)
      edenHome.getsubTitles().last().should("contain.text",txtCalendar)   
});
    it("Verificar Menu", () => {
    cy.visit ("https://www.edenentradas.com.ar/");
    const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS", "FESTIVALES","SALAS"];
    
    edenHeader.getMenuButtons().each((button,$index)=>{
      cy.wrap(button).should("contain.text",menuBtn[$index])

      menuBtn.forEach((txtBtn, $index)=>{
        EdenHeader2.getMenuButtons().eq($index).should("contain.text",txtBtn)
      });
  });
  });
    it("Verificar pagina de Recitales",()=>{
  cy.visit ("https://www.edenentradas.com.ar/");
  edenHeader.getMenuButtons().contains("RECITALES").click();
  const newUrl ="https://www.edenentradas.com.ar/sitio/contenido/recitales";
  cy.url().should("eq",newUrl);
});
    it("Verificar imagen del logo",() => {
      cy.visit ("https://www.edenentradas.com.ar/");
      edenHeader.getImageLogo().should("be.visible").and("have.prop","naturalHeight");
      const imgSource = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
      edenHeader.getImageLogo().should("have.attr","src",imgSource);
      edenHeader.getImageLogo().should("have.attr","alt","EdenEntradas");
    });

    it("Verificar el funcionamiento del buscador",()=>{
      cy.visit ("https://www.edenentradas.com.ar/");
      edenHeader.getSerchInput().type("Queen");
      edenHeader.getSerchSuggestion().click();
      const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" ';
      edenEvent.getEventTitle().should("contain.text", eventTxt)
    });




});