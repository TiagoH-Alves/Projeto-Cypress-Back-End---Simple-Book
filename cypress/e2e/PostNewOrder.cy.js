describe("Validação envio de nova ordem", () => {
  const BodyCreat = {
    bookId: 1,
    customerName: "Tiago Henrique Alves",
  };
  const Token = Cypress.env("token")
  const ApiCreat = Cypress.env("api_simpleBook_creat");

  it("CT01 Validar o Envio de uma nova Ordem Valida", () => {
    cy.request({
      method: "POST",
      url: ApiCreat,
      headers: {
        Authorization: `Bearer ${Token}`,
      },
      body: BodyCreat,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.include({ created: true });
      expect(response.body).to.have.property("orderId").and.to.be.a("string").and.not.to.be.empty;
    });
  });
});
