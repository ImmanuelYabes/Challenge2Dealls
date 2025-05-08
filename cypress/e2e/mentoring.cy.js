describe("Mentoring Feature", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("https://dealls.com/");

    // Check if we're already on the login page
    cy.url().then((url) => {
      if (!url.includes("/login")) {
        // Open the hamburger menu first
        cy.get("button.xl\\:hidden.block").should("be.visible").click();

        // Wait for the drawer to appear and click the visible "Masuk" button
        cy.get("div.ant-drawer-content").within(() => {
          cy.get('a[href="/sign-in?returnUrl=%2F"]')
            .contains("Masuk")
            .should("be.visible")
            .click();
        });
      }
    });

    // Wait for login form and proceed with login
    cy.get('input[name="email"], input[type="email"]', { timeout: 10000 })
      .should("be.visible")
      .type("anakpremium01@gmail.com");

    cy.get('input[name="password"], input[type="password"]')
      .should("be.visible")
      .type("testing123");

    cy.get('button[type="submit"], input[type="submit"]')
      .should("be.visible")
      .click();

    // Assert that the user is on the homepage after login
    cy.url().should("eq", "https://dealls.com/");

    // Optionally, check for a user-specific element (e.g., avatar, profile, or logout)
    cy.get("button.xl\\:hidden.block").should("be.visible").click();
    cy.get("div.ant-drawer-content").within(() => {
      cy.get('button[href="/profile/my-career-preference"]').should("exist");
    });

    // Close the drawer by clicking the "X" button
    cy.get('button[aria-label="Close"].ant-drawer-close')
      .should("be.visible")
      .click();

    // Wait for the drawer mask to disappear
    cy.get(".ant-drawer-mask").should("not.exist");
  });

  describe("Search Functionality", () => {
    it("should successfully search for mentors by keyword", () => {
      // Navigate to mentoring section
      cy.get('a[href="/mentoring"].flex-col.items-center').click();

      // Verify search results
      cy.intercept("GET", "**/mentoring/mentor/list*").as("mentorSearch");
      cy.get("input#searchMentor.ant-input").type("Quality Assurance");

      // Wait for the API call and assert on the response
      cy.wait("@mentorSearch")
        .its("response.body.data.docs")
        .should("have.length.greaterThan", 0);
    });

    it("should display no results message when no mentors match search", () => {
      cy.get('a[href="/mentoring"].flex-col.items-center').click();

      cy.intercept("GET", "**/mentoring/mentor/list*").as("mentorSearch");
      cy.get("input#searchMentor.ant-input").type("NonExistentMentor123");

      // Assert the empty state image is visible
      cy.get('img[alt="Empty Mentor"]').should("be.visible");
    });
  });

  describe("Mentor Profile Interaction", () => {
    it("should view mentor profile details", () => {
      cy.get('a[href="/mentoring"].flex-col.items-center').click();

      // Click on first mentor card
      cy.get('a[class*="MentorCard_mentor_card"]').first().click();

      // Verify profile details are displayed
      cy.get("h1").should("be.visible");
      cy.contains("Overview").should("be.visible");
      cy.contains("Statistics").should("be.visible");
      cy.contains("Total Sessions").should("be.visible");
      cy.contains("Mentees Impacted").should("be.visible");
    });

    // it("should be able to request mentorship", () => {
    //   cy.get('a[href="/mentoring"].flex-col.items-center').click();
    //   cy.get(".mentor-card").first().click();

    //   // Click request mentorship button
    //   cy.contains("Request Mentorship").click();

    //   // Fill request form
    //   cy.get('textarea[name="message"]').type(
    //     "I would like to learn more about your expertise"
    //   );
    //   cy.get('button[type="submit"]').click();

    //   // Verify success message
    //   cy.contains("Mentorship request sent successfully");
    // });
  });
});
