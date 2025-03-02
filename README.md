## **TanStack Table**

```bash
npm install @tanstack/react-table
```

### **Basic Table**

Tanstack table start with useReactTable() where we need to pass object like data(row), columns and invock function
_Create: Table Instance_

```jsx
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
```

Column definitions

```jsx
const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "city", header: "City" },
];
```

Column Customization. Manupulate data

```jsx
{
    accessorKey: "gender",
    header: "Gender",
    cell: (gender) => gender.getValue() + " OK", // output: mail Ok
},
```

Column Customization. Make a column sortable or not

```jsx
{
    accessorKey: "first_name",
    header: "First Name",
    enableSorting: true,
},
```

### Populating table with header and data

To get column headers value

```jsx
{table.getHeaderGroups().map((headerGroup) => (
    <tr key={headerGroup.id}>
    {headerGroup.headers.map((header) => (
        <th key={header.id} className="border">
        {header.column.columnDef.header as string} // use either one
        {flexRender(
            header.column.columnDef.header,
            header.getContext()
        )}
        </th>
    ))}
    </tr>
))}
```

To get Row content

```jsx
{table.getRowModel().rows.map((row) => (
    <tr key={row.id}>
    {row.getVisibleCells().map((cell) => (
        <td className="border" key={cell.id}>
        {cell.getValue() as string} // Put either one
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
    ))}
    </tr>
))}
```

### Pagination

```jsx
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  // added
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: 2,
    },
  },
});
```

After table closeing tag

```jsx
<button
className="p-2 bg-grey-200 border mt-2"
onClick={() => table.setPageIndex(0)}
>
First
</button>
<button
className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
onClick={() => table.previousPage()}
disabled={!table.getCanPreviousPage()}
>
Pre
</button>
<button
className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
onClick={() => table.nextPage()}
disabled={!table.getCanNextPage()}
>
Next
</button>
<button
className="p-2 bg-grey-200 border mt-2"
onClick={() => table.setPageIndex(table.getPageCount() - 1)}
>
Last
</button>
```

### Sorting

```jsx
const [sorting, setSorting] = useState < SortingState > [];

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: 2,
    },
  },
  // Added for sorting
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting: sorting,
  },
  onSortingChange: setSorting,
});

// Inside header
<div onClick={header.column.getToggleSortingHandler()}>
    {header.column.columnDef.header as string}
    {{
        asc: " 🔼",
        desc: " 🔽",
    }[header.column.getIsSorted() as string] ?? null}
</div>
```

### Search / Filter

```jsx
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: 2,
    },
  },
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting: sorting,
    globalFilter: filtering,
  },
  onSortingChange: setSorting,
  // Added for search / Filter
  getFilteredRowModel: getFilteredRowModel(),
  onGlobalFilterChange: setFiltering,
});

// Top of the table. Search on all column data
<input
  type="text"
  value={filtering}
  onChange={(e) => setFiltering(e.target.value)}
  placeholder="Search..."
  className="mb-4 p-2 border rounded"
/>;
```

### Filter on a specific column

```jsx
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: {
      pageSize: 2,
    },
  },
  getSortedRowModel: getSortedRowModel(),
  state: {
    sorting: sorting,
    globalFilter: filtering,
    columnFilters: columnFilters, // added filter on a specific column:
  },
  onSortingChange: setSorting,

  getFilteredRowModel: getFilteredRowModel(),
  onGlobalFilterChange: setFiltering,

  // added for filter on a specific column
  onColumnFiltersChange: setColumnFilters,
});

<select
  value={(columnFilters.find((f) => f.id === "city")?.value as string) || ""}
  onChange={(e) => setColumnFilters([{ id: "city", value: e.target.value }])}
  className="mb-4 p-2 border rounded"
>
  <option value="">All Countries</option>
  <option value="New York">New York</option>
  <option value="Chicago">Chicago</option>
  <option value="Los Angeles">Los Angeles</option>
</select>
```

### Getting started

```jsx
"use client";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";

// Define TypeScript types for data
type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

// Sample data
const data: Person[] = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 35, city: "Chicago" },
];

// Column definitions
const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "city", header: "City" },
];

export default function TableComponent() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-96 border-collapse">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border">
                {header.column.columnDef.header as string}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="border" key={cell.id}>
                {cell.getValue() as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Getting started: Final version

```jsx
"use client";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";

// Define TypeScript types for data
type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

// Sample data
const data: Person[] = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 35, city: "Chicago" },
  { id: 4, name: "z Bob", age: 32, city: "b Los Angeles" },
  { id: 5, name: "f Charlie", age: 31, city: "d Chicago" },
  { id: 6, name: "Subroto Biswas", age: 31, city: "New York" },
];

// Column definitions
const columns: ColumnDef<Person>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "city", header: "City" },
];

export default function TableComponent() {
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    // Pagination
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 2,
      },
    },

    // Sorting
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    onSortingChange: setSorting,

    // Search/filter
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,

    // search / filter on specific column
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      <select
        value={
          (columnFilters.find((f) => f.id === "city")?.value as string) || ""
        }
        onChange={(e) =>
          setColumnFilters([{ id: "city", value: e.target.value }])
        }
        className="mb-4 p-2 border rounded"
      >
        <option value="">All Countries</option>
        <option value="New York">New York</option>
        <option value="Chicago">Chicago</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
      <table className="w-96 border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border">
                  <div onClick={header.column.getToggleSortingHandler()}>
                    {header.column.columnDef.header as string}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="border" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      Showing {table.getState().pagination.pageSize} of {data.length}
      <button
        className="p-2 bg-grey-200 border mt-2"
        onClick={() => table.setPageIndex(0)}
      >
        First
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Pre
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        Last
      </button>
    </>
  );
}
```

### Make Generic Table as reuseable component

TableComponentBasic.tsx

```jsx
interface Props<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export default function TableComponent<TData>({ data, columns }: Props<TData>) {
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
    },
    onSortingChange: setSorting,

    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,

    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      <select
        value={
          (columnFilters.find((f) => f.id === "city")?.value as string) || ""
        }
        onChange={(e) =>
          setColumnFilters([{ id: "city", value: e.target.value }])
        }
        className="mb-4 p-2 border rounded"
      >
        <option value="">All Countries</option>
        <option value="New York">New York</option>
        <option value="Chicago">Chicago</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
      <table className="w-96 border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border">
                  <div onClick={header.column.getToggleSortingHandler()}>
                    {header.column.columnDef.header as string}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="border" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      Showing {table.getState().pagination.pageSize} of {data.length}
      <button
        className="p-2 bg-grey-200 border mt-2"
        onClick={() => table.setPageIndex(0)}
      >
        First
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Pre
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2 disabled:opacity-50"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
      <button
        className="p-2 bg-grey-200 border mt-2"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        Last
      </button>
    </>
  );
}
```

page.tsx | Passing data, columns and generic type

```jsx
import movie from "../../movie.json";

export interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
}

const ResourceView = () => {
  // Sample data
  const data: Movie[] = movie;

  // Column definitions
  const columns: ColumnDef<Movie>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "director", header: "Director 3" },
    { accessorKey: "genre", header: "Genre" },
    { accessorKey: "rating", header: "Rating" },
  ];

  return (
    <div>
      <TableComponentBasic<Movie> data={data} columns={columns} />
      <TableComponent />
    </div>
  );
};

export default ResourceView;
```

### Full Workable code with search, Filter, Sort, Pagination

```jsx
"use client";
import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import MOCK_DATA from "../../MOCK_DATA.json";

interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  country: string;
}

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    enableSorting: true,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (gender) => gender.getValue() + " OK",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
];

export default function TableComponent() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: MOCK_DATA,
    columns,
    state: {
      globalFilter,
      sorting,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 8, // Set page size to 5
      },
    },
  });

  return (
    <div className="p-4">
      <input
        type="text"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />
      <select
        value={
          (columnFilters.find((f) => f.id === "country")?.value as string) || ""
        }
        onChange={(e) =>
          setColumnFilters([{ id: "country", value: e.target.value }])
        }
        className="mb-4 p-2 border rounded"
      >
        <option value="">All Countries</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Bangladesh">Bangladesh</option>
      </select>

      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 text-left border">
                  <div
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer select-none"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="p-2 border rounded disabled:opacity-50"
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="p-2 border rounded disabled:opacity-50"
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="p-2 border rounded disabled:opacity-50"
        >
          {">"}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="p-2 border rounded disabled:opacity-50"
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="p-2 border rounded"
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
```
