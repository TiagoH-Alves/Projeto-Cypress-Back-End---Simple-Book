describe('Validação de API', () => {
  let API = Cypress.env('api_simpleBook')

  it('CT01 Verifica o status da API', () => {
    cy.request({
      method: 'GET',
      url: API,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('CT02 Validar os campos obrigatórios', () => {
    cy.request({
      method: 'GET',
      url: API,
    }).then((response) => {
      // Verifica se os campos específicos estão presentes
      expect(response.body).to.have.property('message');
      const numberFields = Object.keys(response.body).length;
      expect(numberFields).to.equal(1);
    });
  });

  it('Validar a resposta do Body', () => {
    cy.statusValidate()
    cy.request({
      method: 'GET',
      url: API,
    }).then((response) => {
      // Verifica a quantidade de campos
      expect(response.body).to.deep.equal({
        message: "Welcome to the Simple Books API."
      });
    });
  })
});