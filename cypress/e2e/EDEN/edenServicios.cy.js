/// <reference types="cypress" />

describe("TEST DE SERVICIOS DE EDEN ENTRADAS", () => {

    it("Verificar Servicio de INICIO", () => {
     cy.request("GET","https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio").then((respuesta)=>{
      expect(respuesta.status).to.eq(200);
     });
  
     
    
    });
  })