"use client";

import ActiveStatus from "@/app/components/ActiveStatus";
import { ColumnDef } from "@tanstack/react-table";
import RowActions from "./RowActions";

export interface ResourceType {
  id: number;
  name: string;
  is_active: boolean;
}

export const columns: ColumnDef<ResourceType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => {
      return <ActiveStatus value={row.getValue("is_active")} />;
    },
  },
  {
    id: "actions", // Unique ID for the action column
    header: "Actions", // Column header
    cell: ({ row }) => {
      const entity = row.original;
      return <RowActions entity={entity} />;
    },
  },
];
