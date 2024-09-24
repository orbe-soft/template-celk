describe("Home page tests", () => {
  beforeEach(() => {
    const user = {
      name: "Example",
      email: "example@example.com",
      image: null,
      birthdate: "12/02/13",
    };

    cy.login(user);

    cy.visit(Cypress.env("CYPRESS_BASE_URL"));

    cy.intercept("GET", "/api/user?page=1&limit=10", {
      body: {
        data: [
          {
            id: "b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9",
            firstName: "Marcos",
            lastName: "Xavier",
            email: "mx@email.com",
          },
          {
            id: "4eddfd80-e069-44e6-bb84-f3d1ad2e8d18",
            firstName: "Fabrícia",
            lastName: "Martins",
            email: "fm@email.com",
          },
        ],
        limit: "10",
        page: "1",
        total: 25,
      },
    }).as("getUsers");
  });

  it("should be able to list users", () => {
    cy.wait("@getUsers").its("response.statusCode").should("equal", 200);

    cy.get("tbody").children().should("have.length.at.least", 2);
  });

  it("should be able to delete user", () => {
    cy.wait("@getUsers").its("response.statusCode").should("equal", 200);

    cy.intercept("DELETE", "/api/user/b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9").as(
      "deleteUser"
    );

    cy.get("tbody > tr:first > td:last > div > button").click();

    cy.get("button").contains("Yes, delete").click();

    cy.wait("@deleteUser").its("response.statusCode").should("equal", 200);

    cy.get("tbody").children().should("have.length", 1);
  });

  it("should be able to edit user", () => {
    cy.wait("@getUsers");

    cy.intercept("GET", "/api/user/b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9", {
      body: {
        id: "b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9",
        firstName: "Marcos",
        lastName: "Xavier",
        email: "mx@email.com",
      },
    }).as("getUser");

    cy.intercept("PATCH", "/api/user/b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9", {
      body: {
        firstName: "Luan",
        lastName: "Braga",
        email: "lb@email.com",
      },
    }).as("updateUser");

    cy.intercept("GET", "/api/user?page=1&limit=10", {
      body: {
        data: [
          {
            id: "b4cc9373-51ad-4a1d-bbb9-dd96a8cfc6e9",
            firstName: "Luan",
            lastName: "Braga",
            email: "lb@email.com",
          },
          {
            id: "4eddfd80-e069-44e6-bb84-f3d1ad2e8d18",
            firstName: "Fabrícia",
            lastName: "Martins",
            email: "fm@email.com",
          },
        ],
        limit: "10",
        page: "1",
        total: 25,
      },
    }).as("getUsersAfterUpdate");

    cy.get("tbody > tr:first > td:last > div > a").click();

    cy.wait("@getUser").its("response.statusCode").should("equal", 200);

    cy.get('input[placeholder="First Name"]').clear().type("Luan");
    cy.get('input[placeholder="Last Name"]').clear().type("Braga");
    cy.get('input[placeholder="Email"]').clear().type("lb@email.com");

    cy.get("button").contains("Save").click();

    cy.wait("@updateUser").its("response.statusCode").should("equal", 200);

    cy.wait("@getUsersAfterUpdate")
      .its("response.statusCode")
      .should("equal", 200);

    cy.get("tbody > tr:first").children().eq(0).contains("Luan");
    cy.get("tbody > tr:first").children().eq(1).contains("Braga");
  });
});
