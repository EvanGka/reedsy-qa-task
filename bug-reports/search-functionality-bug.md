**Title:** Search returns all titles containing the search string (should match titles starting with search term)

**Description:**  
The book search function returns all the books where the title contains the search string. However, users typically expect only results where titles start with the search string.

---

**Reproduction Steps:**

1. Launch the app (`localhost:5173`).
2. Go to the Home Page.
3. Search for "er".
4. Check the results.

---

**Actual Result:**

All titles containing "er" are returned.

---

**Expected Result:**

Only titles starting with "er" should be returned.
