import {
  LOGIN_VALID,
  LOGIN_INVALID,
  INACTIVE_USER,
  BLANK_PASSWORD,
} from "../../../fixtures/userRetailer";
describe("Test Case End To End", () => {
  let TokenCollect;
  describe("@Positive Case", () => {
    it("Login Valid", () => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginCollectUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_VALID,
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        TokenCollect=response.body.token

      });
    });
  
    it("Login Invalid", () => {
      cy.request({
        method: "POST",
        failOnStatusCode: false,
        url: `${Cypress.env("baseUrl")}${Cypress.env("loginCollectUrl")}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: LOGIN_INVALID,
      }).then((response) => {
        expect(response.status).to.equal(404);
        cy.log(JSON.stringify(response.body));
      });
    });
  });
})

