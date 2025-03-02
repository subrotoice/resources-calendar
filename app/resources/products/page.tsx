"use client";
import TableComponentBasic from "@/app/components/TableComponentBasic";
import { ColumnDef } from "@tanstack/react-table";
import products from "../../../products.json";

interface Product {
  id: number;
  product_name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
}

const ProductPage = () => {
  const data: Product[] = products;

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "product_name",
      header: "Product Name",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "brand",
      header: "Brand",
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ getValue }) => {
        const description = getValue<string>();
        return description.length > 30
          ? description.slice(0, 30) + "..."
          : description;
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ getValue }) => `$${getValue<number>().toLocaleString()}`,
      enableSorting: true,
    },
  ];

  return (
    <div>
      <TableComponentBasic<Product> data={data} columns={columns} />
    </div>
  );
};

export default ProductPage;
