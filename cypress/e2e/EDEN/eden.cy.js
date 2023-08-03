/// <reference types="cypress" />

describe('test sobre la pagina de EDEN ENTRADAS', () => {
  
    it('verificar subtitulos', () => {
      cy.visit ("https://www.edenentradas.com.ar/");
      cy.get ("h5"). first ().should ("contain.tex", "BUSCAR EVENTOS");
      cy.get ("h5"). last ().should ("contain.tex", "CALENDARIO DE EVENTOS");
    
    })
})
