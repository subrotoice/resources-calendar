import { columns, ResourceType } from "./_components/columns";
import useResourcesTypes from "@/app/hooks/useResourcesTypes";
import ResourceModalAction from "./_components/ResourceModalAction";

const ResourcesTypes = async () => {
  const { data }: { data: ResourceType[] } = await useResourcesTypes();

  return <ResourceModalAction resourcesTypes={data} columns={columns} />;
};

export default ResourcesTypes;
