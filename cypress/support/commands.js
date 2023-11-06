Cypress.Commands.add("statusValidate", function () {
  let API = Cypress.env('api_simpleBook')
  cy.request({
    method: "GET",
    url: API,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});
