/// <reference types="cypress" />
import EdenFooter from "../../Page/EdenFooter";

const edenFooter = new EdenFooter();
describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verificar pagina de Términos", () => {
    edenFooter.getFooterButtons().contains("TERMINOS DE USO").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/terminos";
    cy.url().should("eq", newUrl);
  });

  it("Verificar pagina de Quienes Somos", () => {
    edenFooter.getFooterButtons().contains("QUIENES SOMOS").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/quienessomos";
    cy.url().should("eq", newUrl);
  });

  it("Verificar pagina de Puntos de ventas", () => {
    edenFooter.getFooterButtons().contains("PUNTOS DE VENTA").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/puntosdeventa";
    cy.url().should("eq", newUrl);
  });

  it("Verificar pagina de Contacto", () => {
    edenFooter.getFooterButtons().contains("CONTACTENOS").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/contactenos";
    cy.url().should("eq", newUrl);
  });

 /* it("Verificar página de WSP", () => {
    edenFooter.getFooterTelefono().click();
    const newUrl = "**https://api.whatsapp.com/send?phone=5493516562003**";
    cy.url().should("eq", newUrl);
  });
   */

  it("Verificar imagen Afip",() => {
    edenFooter.getImageAfip().should("be.visible");
    const imgSource = "https://www.afip.gob.ar/images/f960/DATAWEB.jpg";
    edenFooter.getImageAfip().should("have.attr", "src", imgSource);
  });
  
  it("Verificar Boton arrepentimiento",() => {
    const txtArrepentimiento = "Arrepentimiento de Compra";
    edenFooter.geFooterButtonsA().should("contain.text",txtArrepentimiento)
  
});
});