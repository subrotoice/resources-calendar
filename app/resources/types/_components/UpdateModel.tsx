"use client";
import InputField from "@/app/components/InputField";
import APIClient from "@/app/components/services/api-client";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { ResourceType } from "./columns";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name field must be required!")
    .min(3, { message: "Name must be at least 3 characters long" }),
  is_active: z.boolean(),
});

type FormData = z.infer<typeof schema>;

interface Props<TData> {
  entity: TData;
  closeModel: () => void;
}

const UpdateModel = <TData,>({ entity, closeModel }: Props<TData>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const queryClient = useQueryClient();
  const apiClient = new APIClient<ResourceType>("/resources/types/");

  // ✅ Corrected Mutation Function
  const entityUpdate = useMutation({
    mutationFn: async ({
      id,
      updatedData,
    }: {
      id: string | number;
      updatedData: any;
    }) => apiClient.put(id, updatedData), // Dynamically pass ID

    onSuccess: (updatedEntity) => {
      // ✅ Update cache instead of overriding it
      queryClient.setQueryData<ResourceType[]>(["data"], (oldData) => {
        if (!oldData) return [updatedEntity];

        return oldData.map((item) =>
          item.id === updatedEntity.id ? updatedEntity : item
        );
      });

      closeModel();
    },
  });

  const onsubmit = (data: FieldValues) => {
    entityUpdate.mutate({ id: (entity as any).id, updatedData: data }); // Pass as an object
  };

  return (
    <>
      <div
        id="updateProductModal"
        tabIndex={-1}
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full bg-gray-500 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Resource Type:
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModel}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="grid gap-8 mb-8 sm:grid-cols-1">
                <div>
                  <InputField
                    label="Resource Name"
                    register={register("name")}
                    error={errors.name?.message}
                    placeholder="Type Resource Name"
                    defaultValue={(entity as any).name}
                  />
                </div>
                <ToggleSwitch register={register("is_active")} checked={true} />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModel;
