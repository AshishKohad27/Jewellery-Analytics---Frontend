# Central Notification System


## All Files (in the order they run)

### File 1 — store.js (src/redux/store.js)
Registers the notification reducer and middleware into Redux.
- `notification: notificationSlice` → adds notification state to Redux store
- `.concat(notificationMiddleware)` → adds middleware to intercept every action


### File 2 — ReduxProvider.jsx (src/redux/ReduxProvider.jsx)
Mounts two components globally so they are available on every page:
- `<Toaster />` → the visual toast container (renders popups on screen)
- `<ToastListener />` → invisible component that watches Redux state and triggers toasts


### File 3 — notificationMiddleware.js (src/redux/middleware/notificationMiddleware.js)
The core brain. Every Redux action passes through this middleware.
- Action ends with `/fulfilled` → checks if it's a mutation (create/update/delete) → if yes, dispatches `setSuccessMessage`
- Action ends with `/rejected` → always dispatches `setErrorMessage`
- Actions starting with `get/`, `login`, `get/refresh/token` are silent (no success toast)


### File 4 — notification.slice.js (src/redux/notification/notification.slice.js)
Simple Redux state that holds two strings:
- `successMessage` → set by middleware when a mutation succeeds
- `errorMessage` → set by middleware when any action fails
- `clearMessages()` → resets both to empty after toast is shown


### File 5 — ToastListener.jsx (src/components/site/ToastListener.jsx)
Invisible component (renders nothing on screen). Watches the notification slice:
- `successMessage` changed → calls `toast.success("message")` → then `clearMessages()`
- `errorMessage` changed → calls `toast.error("message")` → then `clearMessages()`


### File 6 — sonner.tsx (src/components/ui/sonner.tsx)
The actual UI that shows toast popups. Configured with:
- Position: top-right
- Green toast with checkmark for success
- Red toast with X icon for error
- Close button + auto-dismiss


---


## Flow — Example: Creating a Supplier

```
STEP 1 — AddSupplierDialog.jsx
  User fills form and clicks "Save Supplier"
  → dispatch(CreateSupplier({ data: formData }))


STEP 2 — supplier.action.js
  CreateSupplier thunk runs
  → axios.post("/suppliers/", formData)
  → Waits for backend response


STEP 3 — Redux creates an action based on API result
  Success → action type: "create/suppliers/fulfilled"
            action.payload: { message: "Supplier created", data: {...} }

  Failure → action type: "create/suppliers/rejected"
            action.payload: "Email already exists"


STEP 4 — notificationMiddleware.js (intercepts the action)
  Reads action type: "create/suppliers/fulfilled"

  Check 1: Does it end with "/fulfilled"? → YES
  Check 2: Does "create/suppliers" start with "get/" or "login"? → NO
  Check 3: Does action.payload have a message? → YES → "Supplier created"

  → Dispatches: setSuccessMessage("Supplier created")

  (If it was rejected instead)
  → Dispatches: setErrorMessage("Email already exists")


STEP 5 — notification.slice.js (state updates)
  Redux state becomes:
  { successMessage: "Supplier created", errorMessage: "" }


STEP 6 — ToastListener.jsx (detects the change)
  useSelector sees successMessage changed to "Supplier created"
  → Calls toast.success("Supplier created")
  → Calls dispatch(clearMessages()) to reset state


STEP 7 — sonner.tsx (shows on screen)
  A green toast popup appears at top-right:
  ✓ Supplier created
  Auto-dismisses after a few seconds
```


---


## Why GET requests don't show success toast

```
STEP 1 — Page loads, dispatches GetSuppliers()

STEP 2 — API responds, Redux creates: "get/suppliers/fulfilled"

STEP 3 — notificationMiddleware checks:
  Does it end with "/fulfilled"? → YES
  Does "get/suppliers" start with "get/"? → YES → SILENT, SKIP

  → No toast shown

  (But if GetSuppliers fails)
  → "get/suppliers/rejected" → error toast WILL show
```
