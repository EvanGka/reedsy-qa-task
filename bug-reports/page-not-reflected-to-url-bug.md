**Title:** When navigating between the pages the URL (localhost:5173) remains the same

**Description:**  
When the user is paginating between pages (Page 1, Page 2, etc.), the URL always stays the same, which means that if they refresh the page or share the link, the pagination state is lost.

---

**Reproduction Steps:**

1. Launch the app (`localhost:5173`).
2. Go to the Home Page.
3. Click the left (previous arrow) or next arrow.

---

**Actual Result:**

The URL remains the same.

---

**Expected Result:**

The page number should be reflected in the URL, e.g., `http://localhost:5173/?page=3`.
