/// <reference types="cypress" />

describe("TEST DE SERVICIOS DE EDEN ENTRADAS", () => {

   it("Verificar Servicio de INICIO", () => {
    cy.request ("GET", "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio"
    ).then((respuesta)=>{
    cy.log (`Respuesta de servicio de inicio: ${JSON.stringify(respuesta)}`);
    expect(respuesta.status).to.eq(200);
  });
  
  it("Verificar Servicio de INICIO", () => {
   cy.request ("GET", "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio"
   ).then((respuesta) => {
   cy.log (`Respuesta de servicio de inicio: ${JSON.stringify(respuesta)}`);
   expect(respuesta.status).to.eq(200);
    });
     
    
    });
  })
});