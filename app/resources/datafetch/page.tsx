import TableTanStack from "@/app/components/TableTanStack";
import Resource from "@/app/entities/Resource";
import useResources from "@/app/hooks/useResources";
import { ColumnDef } from "@tanstack/react-table";

const DataFetch = async () => {
  const { data } = await useResources();
  console.log(data);

  // Column definitions
  const columns: ColumnDef<Resource>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "type_id", header: "Type ID" },
    { accessorKey: "NAME", header: "Name" },
    { accessorKey: "capacity", header: "Capacity" },
    { accessorKey: "usage_minute_per_day", header: "Usage (Minutes/Day)" },
    { accessorKey: "office_id", header: "Office ID" },
  ];

  return (
    <div>
      <TableTanStack<Resource> data={data} columns={columns} />
    </div>
  );
};

export default DataFetch;
