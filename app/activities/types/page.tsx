import ResourceModalAction from "@/app/components/ResourceModalAction";
import Resource from "@/app/entities/Resource";
import useActivitiesTypes from "@/app/hooks/useActivitiesTypes";

const ActivityTypes = async () => {
  const { data }: { data: Resource[] } = await useActivitiesTypes();

  return <ResourceModalAction data={data} />;
};

export default ActivityTypes;
