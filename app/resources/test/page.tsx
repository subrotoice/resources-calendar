"use client";
import CreateModel from "@/app/components/CreateModel";
import DeleteModel from "@/app/components/DeleteModel";
import ReadModel from "@/app/components/ReadModel";
import TableTanStack from "@/app/components/TableTanStack";
import UpdateModel from "@/app/components/UpdateModel";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import products from "../../../products.json";

export interface Product {
  id: number;
  product_name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
}

const TestPage = () => {
  const [selectProduct, setProduct] = useState<Product | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  // Column definitions
  const columns: ColumnDef<Product>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "product_name", header: "Name" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "price", header: "Price" },
    {
      id: "actions", // Unique ID for the action column
      header: "Actions", // Column header
      cell: (
        { row } // Custom cell rendering
      ) => (
        <div className="flex space-x-2">
          <button
            // onClick={() => handleEdit(row.original)} // Handle edit action
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            // onClick={() => handleDelete(row.original.id)} // Handle delete action
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete {row.original.id}
          </button>
        </div>
      ),
    },
  ];

  const handleCloseModal = () => {
    setModalType(null);
  };

  const setModelFn = (model: string | null) => {
    setModalType(model);
  };

  const setProductFn = (product: Product) => {
    setProduct(product);
  };

  return (
    <>
      <TableTanStack<Product>
        data={products}
        columns={columns}
        setProductProps={setProductFn}
        setModelProps={setModelFn}
      />

      {/* Create modal */}
      {modalType === "add" && (
        <div className="modal">
          <h2>Add Modal</h2>
          <button onClick={handleCloseModal}>Close</button>
          <CreateModel closeModel={handleCloseModal} />
        </div>
      )}

      {/* Update modal */}
      {modalType === "update" && (
        <div className="modal">
          <h2>Update Modal</h2>
          <button onClick={handleCloseModal}>Close</button>
          <UpdateModel closeModel={handleCloseModal} product={selectProduct!} />
        </div>
      )}

      {/* Read modal */}
      {modalType === "read" && (
        <div className="modal">
          <h2>View Modal</h2>
          <button onClick={handleCloseModal}>Close</button>
          <ReadModel closeModel={handleCloseModal} product={selectProduct!} />
        </div>
      )}
      {/* Delete modal */}
      {modalType === "delete" && (
        <div className="modal">
          <h2>Delete Modal</h2>
          <button onClick={handleCloseModal}>Close</button>
          <DeleteModel closeModel={handleCloseModal} product={selectProduct!} />
        </div>
      )}
    </>
  );
};

export default TestPage;
