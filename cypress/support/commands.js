Cypress.Commands.add("ValidateWelcome", function () {
  const ApiWelcome = Cypress.env('api_simpleBook_welcome')
  cy.request({
    method: "GET",
    url: ApiWelcome,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("ValidateStatus", function () {
  const ApiStatus = Cypress.env('api_simpleBook_status')
  cy.request({
    method: "GET",
    url: ApiStatus,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});