"use client";
import CreateModel from "@/app/resources/_components/CreateModel";
import DeleteModel from "@/app/resources/_components/DeleteModel";
import ReadModel from "@/app/resources/_components/ReadModel";
import TableTanStack from "@/app/components/TableTanStack";
import UpdateModel from "@/app/resources/_components/UpdateModel";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import products from "../../../products.json";
import ResourceModal from "@/app/components/ResourceModal";
import ResourceModalAction from "@/app/components/ResourceModalAction";

export interface Product {
  id: number;
  product_name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
}

const TestPage = () => {
  const columns: ColumnDef<Product>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "product_name", header: "Name" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "price", header: "Price" },
  ];

  return (
    <>
      <TableTanStack<Product> data={products} columns={columns} />
      <ResourceModalAction />
    </>
  );
};

export default TestPage;
