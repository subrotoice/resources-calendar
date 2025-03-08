import useActivitiesTypes from "@/app/hooks/useActivitiesTypes";
import { ActivityType, columns } from "./_components/columns";
import ActivityModalAction from "./_components/ActivityModalAction";

const ActivityTypes = async () => {
  const { data }: { data: ActivityType[] } = await useActivitiesTypes();

  return <ActivityModalAction resourcesTypes={data} columns={columns} />;
};

export default ActivityTypes;
