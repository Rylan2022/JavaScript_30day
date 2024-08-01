**LocalStorage** and **SessionStorage** are both part of the Web Storage API, which allows you to store key-value pairs in a web browser. Here's a breakdown of each and their differences:

### LocalStorage
- **Persistence**: Data stored in `localStorage` persists even after the browser is closed and reopened. It remains available until explicitly deleted.
- **Scope**: Data is shared across all tabs and windows with the same origin (protocol, host, and port).
- **Capacity**: Typically, `localStorage` allows up to 5-10 MB of storage space, depending on the browser.

### SessionStorage
- **Persistence**: Data stored in `sessionStorage` is only available for the duration of the page session. It is cleared when the page session ends, such as when the browser or tab is closed.
- **Scope**: Data is specific to a particular window or tab. It is not shared across different tabs or windows, even if they have the same origin.
- **Capacity**: Similar to `localStorage`, but often has a smaller storage limit (typically around 5 MB).

### Key Differences
1. **Lifetime**:
   - **LocalStorage**: Data persists indefinitely, surviving browser restarts.
   - **SessionStorage**: Data is lost when the tab or window is closed.

2. **Scope**:
   - **LocalStorage**: Shared across all windows and tabs with the same origin.
   - **SessionStorage**: Limited to the specific window or tab.

3. **Use Cases**:
   - **LocalStorage**: Suitable for data that should persist across sessions, like user settings or data that should be available offline.
   - **SessionStorage**: Ideal for temporary data, such as form data or one-time login information, that should not persist beyond the session.

4. **Capacity**:
   - Both are limited in capacity, but specific limits can vary by browser. `localStorage` generally offers more space than `sessionStorage`.

These features make `localStorage` and `sessionStorage` useful for different types of data and use cases in web applications.