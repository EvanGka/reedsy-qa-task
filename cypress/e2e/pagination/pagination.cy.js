// import { bookshelfPage } from "../../pages/BookshelfPage";

// /*
// This file contains 3 test cases
// 1. Check if page number can go below 1
// 2. Check that the left button is disabled on the home page
// 3. Check the the right button is not redirecting the user to page with 0 books
// */

// describe("Pagination Functional Tests", () => {
//   beforeEach(() => {
//     bookshelfPage.visit();
//   });

//   it("should not allow going below Page 1", () => {
//     // Assert initial page is Page 1
//     bookshelfPage.getPaginationText().should("contain", "Page 1");

//     // Click the left (previous) button multiple times
//     for (let i = 0; i < 3; i++) {
//       bookshelfPage.getPaginationLeftButton().click();
//     }
//     // Assert page still shows Page 1 (no decrement below Page 1)
//     bookshelfPage.getPaginationText().should("contain", "Page 1");
//   });

//   it("should have left button disabled on the Home Page", () => {
//     // Visit Home explicitly
//     cy.visit("/");

//     // Confirm we are on the home page URL
//     cy.location("pathname").should("eq", "/");

//     // Optional: assert something unique to the home page (like the book grid is visible)
//     bookshelfPage.getBookGrid().should("exist");

//     // Assert initial page is Page 1
//     bookshelfPage.getPaginationText().should("contain", "Page 1");

//     // Check that left button is disabled
//     bookshelfPage.getPaginationLeftButton().should("be.disabled");
//   });

//   it("should never navigate to an empty page when paginating forward", () => {
//     let pagesVisited = 1;

//     function checkBooksAndPaginate() {
//       // First, check books are present
//       bookshelfPage.getBooks().then(($books) => {
//         const bookCount = $books.length;
//         cy.log(`Page ${pagesVisited}: Found ${bookCount} books`);

//         // Assert we don't hit an empty page
//         expect(
//           bookCount,
//           `Books should exist on page ${pagesVisited}`
//         ).to.be.greaterThan(0);

//         // Store the current page text (e.g., "Page 1")
//         bookshelfPage
//           .getPaginationText()
//           .invoke("text")
//           .then((currentPageText) => {
//             // Click the right button to go to the next page
//             bookshelfPage.getPaginationRightButton().click();

//             // Now wait until the page number changes (means pagination moved)
//             bookshelfPage
//               .getPaginationText()
//               .should(($newText) => {
//                 expect($newText.text()).not.to.eq(currentPageText);
//               })
//               .then(() => {
//                 // After page change, continue
//                 pagesVisited += 1;
//                 checkBooksAndPaginate();
//               });
//           });
//       });
//     }

//     // Start from Page 1
//     checkBooksAndPaginate();
//   });
// });
