import useResourcesType from "@/app/hooks/useResourcesType";
import { notFound } from "next/navigation";
import ResourcesTypeForm from "../../_components/ResourcesTypeForm";

interface Props {
  params: { id: string };
}

const ResourceTypeEdit = async ({ params }: Props) => {
  const { id } = await params;
  const { data } = await useResourcesType(id);

  if (!data) notFound();

  return <ResourcesTypeForm resourcesType={data} />;
};

export default ResourceTypeEdit;
