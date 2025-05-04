**Title:** Pagination component – Page number text has the same color as background

**Description:**  
In the footer, the current page number (e.g., "Page 1") has the same or a very similar color to the dark background. As a result, the page number is barely visible.

**Environment:**

- Location: BookshelfView.vue → Pagination component
- Browser: All major browsers

**Reproduction Steps:**

1. Launch the app locally (e.g., localhost:5173).
2. Navigate to the home page.
3. Scroll down to the pagination control at the bottom of the view.
4. Observe the current page number (e.g., "Page 1").

**Actual Result:**  
The current page number is almost the same color as the background.

**Expected Result:**  
The page number should have enough contrast against the background to be easily visible.

**Screenshot:**  
_Add screenshot here (e.g., `screenshots/page-number-font-colour-bug.png`)._

**Suggested Fix:**  
In `src/components/pagination.vue`, add:

```css
color: #ffffff;
```
