describe('Prueba de inicio de sesi�n en EPEC', () => {
  it('Iniciar sesi�n correctamente', () => {
    cy.visit('https://www.epec.com.ar/usuario/ingreso?returnTo=%2Foficina-virtual%2Fmis-datos');

    // Rellenar campos de inicio de sesi�n
    cy.get("label _ngcontent-c4=class=for=["email"]>").type('tamaramelisatoledo@gmail.com');
    cy.get("input_ngcontent-c13=").type('Epec1234');

    // Hacer clic en el bot�n de inicio de sesi�n
    cy.get('button[type="submit"]').click();

    // Asegurarse de que el inicio de sesi�n fue exitoso
    cy.url().should('include', '/oficina-virtual/mis-datos');
    cy.get('h2').should('contain', 'Mis Datos'); // Puedes adaptar el selector seg�n la p�gina de destino
  });

  it('Fallo de inicio de sesi�n con credenciales incorrectas', () => {
    cy.visit('https://www.epec.com.ar/usuario/ingreso?returnTo=%2Foficina-virtual%2Fmis-datos');

    // Rellenar campos de inicio de sesi�n con credenciales incorrectas
    cy.get("input_ngcontent-c13=").type('juancitoperez@gmail.com');
    cy.get("input_ngcontent-c13=").type('1234567890');

    // Hacer clic en el bot�n de inicio de sesi�n
    cy.get('buttontype="submit"]').click();

    // Comprobar mensaje de error
    cy.get('.error-message').should('be.visible'); // Adaptar el selector seg�n el mensaje de error real
  });
});