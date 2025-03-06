import useResourcesType from "@/app/hooks/useResourcesType";
import IssueForm from "./_components/IssueForm";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const ResourceTypeEdit = async ({ params }: Props) => {
  const { id } = await params;
  const { data } = await useResourcesType(id);

  if (!data) notFound();

  return <IssueForm resourcesType={data} />;
};

export default ResourceTypeEdit;
