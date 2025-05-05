**Title:** When user clicks to change page, the page number changes instantly and the page is then loaded

**Description:**  
When a user clicks to change the page in the book list, the page number updates immediately, but the new page takes time to load.

---

**Reproduction Steps:**

1. Launch the app (`localhost:5173`).
2. Go to the Home Page.
3. Click the previous or next arrow.

---

**Actual Result:**

The page number changes before the corresponding page is loaded.

---

**Expected Result:**

The page number and content should update simultaneously.
