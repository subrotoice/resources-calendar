"use client";
import { ColumnDef } from "@tanstack/react-table";
import Resource from "../entities/Resource";
import ResourceModal from "./ResourceModal";
import TableTanStack from "./TableTanStack";
import { useState } from "react";

const ResourceModalAction = ({ data }: { data: Resource[] }) => {
  const [selectedEntity, setEntity] = useState<Resource | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleCloseModal = () => {
    setModalType(null);
  };

  const setModelFn = (model: string | null) => {
    setModalType(model);
  };

  const setEntityFn = (entity: Resource) => {
    setEntity(entity);
  };
  console.log(modalType);

  const columns: ColumnDef<Resource>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "is_active", header: "Active" },
  ];
  return (
    <>
      <TableTanStack
        data={data}
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
