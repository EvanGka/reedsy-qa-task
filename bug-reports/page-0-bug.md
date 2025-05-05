**Title:** Bookshelf view initializes on Page 2 instead of Page 1 (clicking left arrow goes to Page 0)

**Description:**  
When visiting the homepage, the pagination component initially loads and displays Page 1, but it's actually the 2nd page because you can still navigate to the previous page, which is Page 0.

---

**Environment:**

- **Location:** `BookshelfView.vue` → uses `Pagination.vue`

---

**Reproduction Steps:**

1. Launch the app (`localhost:5173`).
2. Go to the Home Page.
3. Click the left (previous) arrow.

---

**Actual Result:**

The user is redirected to Page 0.

---

**Expected Result:**

Page 1 should be displayed, and the left arrow should be disabled.

---

**Screenshot:**  
![Pagination colour](./screenshots/page-0-bug.png)
