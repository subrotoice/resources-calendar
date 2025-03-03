import TableComponentBasic from "@/app/components/TableComponentBasic";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import axios from "axios";

interface RoomData {
  id: number;
  type_id: number;
  NAME: string;
  capacity: number;
  usage_minute_per_day: number;
  active_in_sunday: number;
  active_in_monday: number;
  active_in_tuesday: number;
  active_in_wednesday: number;
  active_in_thursday: number;
  active_in_friday: number;
  active_in_saturday: number;
  is_available: number;
  location: string;
  floor_number: number;
  building_id: number;
  office_id: number;
}

const DataFetch = async () => {
  const url =
    "https://dev-api.soms.gov.bd/gw/resource-service/api/resources/list";

  const config = {
    headers: {
      Accept: "*/*",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjgwNzMwZTE4NDAxMzIyMjE1NzJmZGMwMmFlMGMwM2U0NmRlMWZmYzE5OWE1YzVjMGRmZTRlZmM4NzY2OTJhMDJiOGJkYjE3Mzk5OWQxYWQiLCJpYXQiOjE3Mzc4OTIyOTkuMjQ4NzcsIm5iZiI6MTczNzg5MjI5OS4yNDg3NzMsImV4cCI6MTc2OTQyODI5OS4yNDA2ODksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.GjrgYab8Z5YgrN7_UWSWjMAVUHH0YaGpPWN4kNeiXiAThrD5BrPRjgaYXdNJQ-9y0Yve9GaBp_1G9_KL4nSoEmqU4scW8Xx23M70UFW8XxsEG8VheuwQDEGnQnuD2B-KNuXAv8Yl4FIt-Nq_WDIadbMDPK14Kb4BLkCrbiORAz49SE5l6Wqy-leLATRodOXz3reKKLbymq64TR4iSYJuekwPrqXfTjLri42ghkxQFBRhRR8CWCq-xKgfFOPTrBBHdO9jchVHYpuQcGRA1vlAFNqgtAkq191YlNn3g2KWh7-FLYmP9Zki3gTQfn7JOhwlRBYy34pxuJZIS_-FQurJOU6PENzbMY33mP--_5sdSyqB7qVNnENkesqw96or0G9om9lrhowChd5TwDI_ADpqImo4JYRLnBqix4DVm1qJq7alem2lxVVk5lAf1NJIol5XdaZXVoaSMHohvL4hBt5d9RuZspcsvvCCXwPcwrmfQMc7-rdsl15glao-helhVH4DW_nPgOeWzUZlvzrXdBvjQTHqHdiA6a_-jlQvkhMg01Yie1C2r8fZZmp9QQkSMyoASTHv4f-_R9rG4jydZhhwHuHSWWPFdSBKV41cX-7UsYxeD4ym5Qhwlq-o9D8yTVhVUwLEJ0R6u_w91RUwSmE_akZzwaytnAysEEk_srOHLf8",
    },
  };

  try {
    const response = await axios.get(url, config);
    console.log(response.data); // Axios automatically parses the response as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<RoomData[]>(
  //         "https://dev-api.soms.gov.bd/gw/resource-service/api/resources/list",
  // {
  //   headers: {
  //     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjgwNzMwZTE4NDAxMzIyMjE1NzJmZGMwMmFlMGMwM2U0NmRlMWZmYzE5OWE1YzVjMGRmZTRlZmM4NzY2OTJhMDJiOGJkYjE3Mzk5OWQxYWQiLCJpYXQiOjE3Mzc4OTIyOTkuMjQ4NzcsIm5iZiI6MTczNzg5MjI5OS4yNDg3NzMsImV4cCI6MTc2OTQyODI5OS4yNDA2ODksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.GjrgYab8Z5YgrN7_UWSWjMAVUHH0YaGpPWN4kNeiXiAThrD5BrPRjgaYXdNJQ-9y0Yve9GaBp_1G9_KL4nSoEmqU4scW8Xx23M70UFW8XxsEG8VheuwQDEGnQnuD2B-KNuXAv8Yl4FIt-Nq_WDIadbMDPK14Kb4BLkCrbiORAz49SE5l6Wqy-leLATRodOXz3reKKLbymq64TR4iSYJuekwPrqXfTjLri42ghkxQFBRhRR8CWCq-xKgfFOPTrBBHdO9jchVHYpuQcGRA1vlAFNqgtAkq191YlNn3g2KWh7-FLYmP9Zki3gTQfn7JOhwlRBYy34pxuJZIS_-FQurJOU6PENzbMY33mP--_5sdSyqB7qVNnENkesqw96or0G9om9lrhowChd5TwDI_ADpqImo4JYRLnBqix4DVm1qJq7alem2lxVVk5lAf1NJIol5XdaZXVoaSMHohvL4hBt5d9RuZspcsvvCCXwPcwrmfQMc7-rdsl15glao-helhVH4DW_nPgOeWzUZlvzrXdBvjQTHqHdiA6a_-jlQvkhMg01Yie1C2r8fZZmp9QQkSMyoASTHv4f-_R9rG4jydZhhwHuHSWWPFdSBKV41cX-7UsYxeD4ym5Qhwlq-o9D8yTVhVUwLEJ0R6u_w91RUwSmE_akZzwaytnAysEEk_srOHLf8`,
  //   },
  // }
  //       );
  //       setData(response.data);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log(data);
  return;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
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

export default DataFetch;
