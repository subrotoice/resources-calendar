"use client";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { ResourceType } from "./columns";
import APIClient from "@/app/components/services/api-client";
import TableTanStack from "./TableTanStack";
import ResourceModal from "./ResourceModal";

interface DataTableProps {
  resourcesTypes: ResourceType[];
  columns: ColumnDef<ResourceType>[];
}

const ResourceModalAction = ({ columns, resourcesTypes }: DataTableProps) => {
  const [selectedEntity, setEntity] = useState<ResourceType | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  const apiClient = new APIClient<ResourceType>("/resources/types");

  const { data } = useQuery({
    queryKey: ["resourcesTypes"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    initialData: resourcesTypes,
    retry: 2,
  });

  const handleCloseModal = () => {
    setModalType(null);
  };

  const setModelFn = (model: string | null) => {
    setModalType(model);
  };

  const setEntityFn = (entity: ResourceType) => {
    setEntity(entity);
  };

  // console.log(data);
  return (
    <>
      <TableTanStack
        data={data || []}
        columns={columns}
        setModelProp={setModelFn}
        setEntityProp={setEntityFn}
      />
      <ResourceModal
        closeModel={handleCloseModal}
        selectedEntity={selectedEntity}
        modalType={modalType}
      />
    </>
  );
};

export default ResourceModalAction;
