import useResourcesTypes from "@/app/hooks/useResourcesTypes";
import { ResourceType, columns } from "./_components/columns";
import { DataTable } from "./_components/DataTable";
export const dynamic = "force-dynamic"; // Explicitly make this page dynamic
const ResourceTypes = async () => {
  const { data }: { data: ResourceType[] } = await useResourcesTypes();

  return <DataTable columns={columns} data={data} />;
};

export default ResourceTypes;
