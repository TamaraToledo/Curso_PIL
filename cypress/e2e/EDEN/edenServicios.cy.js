/// <reference types="cypress" />

describe("Test de SERVICIOS EDEN", () => {
  it("Verificar Servicio de INICIO", () => {
    cy.request(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    });
  });

  it("Verificar servicio de INICIO 2", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    }).then((response) => {
      cy.writeFile(`cypress/fixtures/autogenerados/eventos.json`, response.body);
      expect(response.status).to.eq(200);
    });
  });
});