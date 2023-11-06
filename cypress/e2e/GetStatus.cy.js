describe('Validação de API Status', () => {
    const API = Cypress.env('api_simpleBook_status')
    beforeEach(function() {
        cy.ValidateStatus();
      });
  
    it('CT01 Validar o status da API', () => {
    });
  
    it('CT02 Validar os campos obrigatórios', () => {
      cy.request({
        method: 'GET',
        url: API,
      }).then((response) => {
        expect(response.body).to.have.property('status');
        const numberFields = Object.keys(response.body).length;
        expect(numberFields).to.equal(1);
      });
    });
  
    it('CT03 Validar a resposta do Body', () => {
      cy.request({
        method: 'GET',
        url: API,
      }).then((response) => {
        expect(response.body).to.deep.equal({
            status: "OK"
        });
      });
    });
  });