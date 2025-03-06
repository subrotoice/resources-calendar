"use client";
import { useState } from "react";
import { ResourceType } from "./columns";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ResourceModal from "./ResourceModal";
import Link from "next/link";

interface Props {
  entity: ResourceType;
}

const RowActions = ({ entity }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<ResourceType | null>(
    null
  );
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <>
      <div className="relative px-4 py-3 flex items-center justify-end">
        <button
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
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                  onClick={() => {
                    setModalType("update");
                    setSelectedEntity(entity);
                  }}
                >
                  <FaEdit className="text-md mr-2" />
                  Edit
                </button>
                <Link
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                  href={`/resources/types/edit/${entity.id}`}
                >
                  Edit
                </Link>
              </li>

              {/* Preview action */}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                  onClick={() => {
                    setModalType("read");
                    setSelectedEntity(entity);
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
                  className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
                  onClick={() => {
                    setModalType("delete");
                    setSelectedEntity(entity);
                  }}
                >
                  <RiDeleteBin6Line className="text-md mr-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ResourceModal
        closeModel={() => setModalType(null)}
        selectedEntity={selectedEntity}
        modalType={modalType}
      />
    </>
  );
};

export default RowActions;
