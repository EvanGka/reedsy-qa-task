class BookshelfPage {
  visit() {
    cy.visit("/");
  }

  getPaginationLeftButton() {
    return cy.get("button").filter(":has(svg.bi-chevron-left)");
  }

  getPaginationRightButton() {
    return cy.get("button").filter(":has(svg.bi-chevron-right)");
  }

  getPaginationText() {
    return cy.contains("span", "Page");
  }

  getBookGrid() {
    return cy.get("section").has("a.book");
  }

  getBooks() {
    return cy.get("a.book");
  }

  searchInput() {
    return cy.get('input[type="text"]');
  }
}

export const bookshelfPage = new BookshelfPage();
