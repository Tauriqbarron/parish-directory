// =============================================================================
// MINISTRY FORM COMPONENT
// =============================================================================
// Create/edit form for ministries. Used on both /ministries/new and
// /ministries/[id]/edit pages.
//
// LEARNING GOALS:
// - Form handling in React (controlled components pattern)
// - useState for form state management
// - Form validation (client-side)
// - Discriminating between create and edit modes
// - React.FormEvent<HTMLFormElement> type
// =============================================================================

// TODO: Define MinistryFormProps interface
// - mode: 'create' | 'edit'
// - initialData: Partial<CreateMinistryInput> (optional — populated for edit mode)
// - onSubmit: (data: CreateMinistryInput) => Promise<void>
// - isSubmitting: boolean
//
// LEARNING: The 'mode' prop uses a union type to distinguish between
// create and edit. The component renders slightly differently for each:
// - Create: empty form, "Create Ministry" button
// - Edit: pre-filled form, "Update Ministry" button

// TODO: Define a local interface called 'FormErrors'
// - Record<string, string> — maps field names to error messages
// - LEARNING: This is simpler than a full form library for learning purposes.
//   Once comfortable, look into React Hook Form or Formik.

// TODO: Create the MinistryForm component
// - Logic:
//   1. useState for form fields:
//      - name: string
//      - description: string
//      - status: MinistryStatus
//      - meetingDay: string
//      - meetingTime: string
//      - meetingLocation: string
//      - maxMembers: number | ''  (empty string for empty input)
//   2. useState<FormErrors> for validation errors
//   3. Initialize form state from initialData if in edit mode (useEffect)
//   4. Create a validate() function:
//      - name is required (min 2 characters)
//      - maxMembers must be positive if provided
//      - Return FormErrors object (empty = valid)
//   5. Create handleSubmit(e: React.FormEvent<HTMLFormElement>):
//      - e.preventDefault() — stop page reload
//      - Run validate(), if errors exist, set them in state and return
//      - Transform form state into CreateMinistryInput shape
//      - Call props.onSubmit(data) — the parent handles the API call
//   6. Render form with:
//      - Input for name (with error display)
//      - Textarea for description
//      - Select for status (Active, Inactive, Seasonal)
//      - Inputs for meeting day, time, location
//      - Input for max members (type="number")
//      - Submit button (show loading state from isSubmitting prop)
//
// LEARNING: React forms are "controlled" — each input's value comes from
// state, and onChange updates state. This gives you full control over
// the form data at all times. The flow is:
//   User types → onChange fires → setState → React re-renders → input shows new value
