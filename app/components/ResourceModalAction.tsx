"use client";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import ResourceType from "../entities/ResourceType";
import ResourceModal from "./ResourceModal";
import APIClient from "./services/api-client";
import TableTanStack from "./TableTanStack";

const ResourceModalAction = ({
  resourcesTypes,
}: {
  resourcesTypes: ResourceType[];
}) => {
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

  const columns: ColumnDef<ResourceType>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "is_active", header: "Active" },
  ];
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
