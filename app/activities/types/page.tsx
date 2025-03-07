import ResourceModalAction from "@/app/components/ResourceModalAction";
import ResourceType from "@/app/entities/ResourceType";
import useResourcesTypes from "@/app/hooks/useResourcesTypes";

const ActivityTypes = async () => {
  const { data }: { data: ResourceType[] } = await useResourcesTypes();

  return <ResourceModalAction resourcesTypes={data} />;
};

export default ActivityTypes;
