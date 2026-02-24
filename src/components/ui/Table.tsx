// =============================================================================
// TABLE COMPONENT
// =============================================================================
// A generic, typed data table. This is the most complex UI component.
//
// LEARNING GOALS:
// - Generic components with <T> — the holy grail of reusable React components
// - Render props / function-as-children pattern
// - keyof T for type-safe column definitions
// =============================================================================

// TODO: Define a generic interface called 'Column<T>'
// - key: keyof T — the property name on the data item
// - header: string — display text for the column header
// - render: ((item: T) => React.ReactNode) (optional) — custom cell renderer
// - sortable: boolean (optional)
// - className: string (optional) — for column-specific width/alignment
//
// LEARNING: keyof T returns a union of all property names of T.
// If T is Person, then keyof T = 'id' | 'firstName' | 'lastName' | ...
// This means you can ONLY specify columns that actually exist on the data type.
// TypeScript will catch typos like 'firstNam' at compile time!

// TODO: Define a generic interface called 'TableProps<T>'
// - data: T[] — the array of items to display
// - columns: Column<T>[] — column definitions
// - keyExtractor: (item: T) => string | number — unique key for each row
// - onRowClick: ((item: T) => void) (optional)
// - emptyMessage: string (optional, default 'No data found')
// - isLoading: boolean (optional)

// TODO: Create the generic Table component
// - Signature: export default function Table<T>({ data, columns, ... }: TableProps<T>)
// - Logic:
//   1. If isLoading, render a loading skeleton (rows of gray animated bars)
//   2. If data is empty, render emptyMessage in a centered cell
//   3. Render <table> with Tailwind styles
//   4. Render <thead> with column headers
//   5. Render <tbody> mapping over data:
//      - For each item, render a <tr> with key={keyExtractor(item)}
//      - For each column, render a <td>
//        - If column.render exists, call column.render(item)
//        - Otherwise, render String(item[column.key])
//      - If onRowClick, add onClick and hover styles to <tr>
//
// LEARNING: Generic components are powerful. This one Table component works for:
//   <Table<Person> data={people} columns={personColumns} />
//   <Table<Ministry> data={ministries} columns={ministryColumns} />
//   <Table<RosterEntry> data={entries} columns={rosterColumns} />
// TypeScript ensures columns match the data type. If you try to add a column
// with key='foo' to a Table<Person>, TypeScript will error because Person has no 'foo'.
