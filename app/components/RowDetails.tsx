import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props<TData> {
  product: TData; // The entire row data
  setModelProps: (model: string) => void;
  setProductProps: (product: TData) => void;
}

export default function RowDetails<TData>({
  product,
  setProductProps,
  setModelProps,
}: Props<TData>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {Object.entries(product as Record<string, any>).map(([key, value]) => (
        <td key={key} className="px-4 py-3">
          {key === "price" && "$"}
          {value}
        </td>
      ))}

      {/* Action dropdown */}
      <td className="relative px-4 py-3 flex items-center justify-end">
        <button
          id="apple-imac-27-dropdown-button"
          data-dropdown-toggle="apple-imac-27-dropdown"
          className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsThreeDotsVertical />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            id="apple-imac-27-dropdown"
            className="z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "0px",
            }}
          >
            <ul
              className="py-1 text-sm border border-gray-100 rounded-sm shadow-md"
              aria-labelledby="apple-imac-27-dropdown-button"
            >
              {/* Edit action */}
              <li>
                <button
                  type="button"
                  data-modal-target="updateProductModal"
                  data-modal-toggle="updateProductModal"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                  onClick={() => {
                    setModelProps("update");
                    setProductProps(product);
                  }}
                >
                  <FaEdit className="text-md mr-2" />
                  Edit
                </button>
              </li>

              {/* Preview action */}
              <li>
                <button
                  type="button"
                  data-modal-target="readProductModal"
                  data-modal-toggle="readProductModal"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                  onClick={() => {
                    setModelProps("read");
                    setProductProps(product);
                  }}
                >
                  <FaEye className="text-md mr-2" />
                  Preview
                </button>
              </li>

              {/* Delete action */}
              <li>
                <button
                  type="button"
                  data-modal-target="deleteModal"
                  data-modal-toggle="deleteModal"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
                  onClick={() => {
                    setModelProps("delete");
                    setProductProps(product);
                  }}
                >
                  <RiDeleteBin6Line className="text-md mr-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </td>
    </>
  );
}
