// =============================================================================
// CREATE MINISTRY PAGE
// =============================================================================
//
// LEARNING GOALS:
// - Client component for form handling
// - useRouter for programmatic navigation after creation
// - Error handling in forms
// =============================================================================

// TODO: Add 'use client'

// TODO: Create the NewMinistryPage component
// - Logic:
//   1. Use useMinistries hook (just need the createMinistry function)
//   2. useState for isSubmitting and error
//   3. handleSubmit function:
//      - Set isSubmitting = true
//      - Call createMinistry(data)
//      - On success: router.push(`/ministries/${newMinistry.id}`)
//        - LEARNING: router.push() navigates programmatically.
//          After creating a ministry, redirect to its detail page.
//      - On error: set error message
//      - Finally: set isSubmitting = false
//   4. Render PageHeader + MinistryForm in create mode
