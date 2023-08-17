/// <reference types="cypress" />
import EdenFooter from "../../Page/EdenFooter";
import EdenTodos from "../../Page/EdenTodos.js";
import EdenHeader from "../../Page/EdenHeader";

const edenFooter = new EdenFooter();
const edenTodos = new EdenTodos();
const edenHeader = new EdenHeader();

describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verificar página de Términos", () => {
    edenFooter.getFooterButtons().contains("TERMINOS DE USO").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/terminos";
    cy.url().should("eq", newUrl);
  });

  it("Verificar página de Quienes Somos", () => {
    edenFooter.getFooterButtons().contains("QUIENES SOMOS").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/quienessomos";
    cy.url().should("eq", newUrl);
  });

  it("Verificar página de Puntos de ventas", () => {
    edenFooter.getFooterButtons().contains("PUNTOS DE VENTA").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/puntosdeventa";
    cy.url().should("eq", newUrl);
  });

  it("Verificar página de Contacto", () => {
    edenFooter.getFooterButtons().contains("CONTACTENOS").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/informacion/contactenos";
    cy.url().should("eq", newUrl);
  });

  /* it("Verificar página de WSP", () => {
    edenFooter.getFooterTelefono().click();
    const newUrl = "https://api.whatsapp.com/send?phone=5493516562003";
    cy.url().should("eq", newUrl);
  });
   */

  it("Verificar imagen Afip", () => {
    edenFooter.getImageAfip().should("be.visible");
    const imgSource = "https://www.afip.gob.ar/images/f960/DATAWEB.jpg";
    edenFooter.getImageAfip().should("have.attr", "src", imgSource);
  });

  it("Verificar Boton arrepentimiento", () => {
    const txtArrepentimiento = "Arrepentimiento de Compra";
    edenFooter.geFooterButtonsA().should("contain.text", txtArrepentimiento);
  });

  it("Verificar página de TODOS", () => {
    edenHeader.getMenuButtons().contains("TODOS").click();
    const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/todos";
    cy.url().should("eq", newUrl);
  });

  it("Verificar desplegable", () => {
    edenHeader.getMenuButtons().contains("TODOS").click();
    edenTodos.getDesplegable().click();
    edenTodos.getDesplegable().should("contain", "Nombre");
    edenTodos.getDesplegable().should("contain", "Fecha");
  });
});
