// /*

// This test is validating the test function, which should returns all books that their titles start with the search string
// - The book elements are <a> tags and an href to the book id
// - There is no title in the DOM

// That's why for each book, I'm making a call to the /books/{{id}} endpoint, in order to the title of the book

// A better approach would be to update the source code of the app and to add the title.
// e.g. <a data-title="Harry Potter" href="/books/0" ...></a>
// */

// import { bookshelfPage } from "../../pages/BookshelfPage";

// describe("Bookshelf Search Tests (UI + API hybrid)", () => {
//   it("should return books whose titles start with the search term", () => {
//     const searchTerm = "er"; // You can adjust or randomize this if needed

//     bookshelfPage.visit();

//     // Use the page object for the search input
//     bookshelfPage.searchInput().type(searchTerm);

//     // For each visible book:
//     bookshelfPage
//       .getBooks()
//       .filter(":visible")
//       .each(($book) => {
//         // Step 1: Get the href (e.g., /books/0)
//         cy.wrap($book)
//           .invoke("attr", "href")
//           .then((href) => {
//             const id = href.split("/").pop();

//             // Step 2: Call the API to fetch the book data
//             cy.request(`http://localhost:3000/api/books/${id}`).then(
//               (response) => {
//                 expect(response.status).to.eq(200);

//                 const title = response.body.title;
//                 // Step 3: Assert the title starts with the search string
//                 expect(
//                   title.toLowerCase().startsWith(searchTerm.toLowerCase()),
//                   `Expected "${title}" to start with "${searchTerm}"`
//                 ).to.be.true;
//               }
//             );
//           });
//       });
//   });
// });
