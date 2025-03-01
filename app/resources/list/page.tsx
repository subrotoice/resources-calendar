"use client";
import TableComponentBasic from "@/app/components/TableComponentBasic";
import { ColumnDef } from "@tanstack/react-table";
import movie from "../../../movie.json";

export interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
}

const ResourceList = () => {
  const data: Movie[] = movie;

  // Column definitions
  const columns: ColumnDef<Movie>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "title", header: "Title" },
    { accessorKey: "director", header: "Director 3" },
    { accessorKey: "genre", header: "Genre" },
    { accessorKey: "rating", header: "Rating" },
  ];

  return (
    <div>
      <TableComponentBasic<Movie> data={data} columns={columns} />
    </div>
  );
};

export default ResourceList;
