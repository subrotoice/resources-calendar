import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/app/components/services/api-client";
import { ResourceType } from "./columns";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";

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
  const queryClient = useQueryClient();
  const apiClient = new APIClient<ResourceType>("/resources/types");

  // UPDATE Post
  const updateMutation = useMutation({
    mutationFn: ({
      id,
      updatedPost,
    }: {
      id: number;
      updatedPost: Omit<ResourceType, "id">;
    }) => apiClient.put(id, updatedPost),
    onSuccess: (savedData, { id }) => {
      console.log(id); // Logs the updated post ID
      console.log(savedData); // Logs the updated post data
      queryClient.setQueryData(
        ["resourcesTypes"],
        (oldData: ResourceType[] | undefined) =>
          oldData
            ? oldData.map((post) =>
                post.id === id ? { ...post, ...savedData } : post
              )
            : []
      );
      closeModel();
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onsubmit = (data: FormData) => {
    updateMutation.mutate({ id: (entity as any).id, updatedPost: data }); // ✅ Correct
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
              <h2></h2>
              <p>Age: {(entity as any).is_active}</p>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="updateProductModal"
                onClick={() => closeModel()}
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
                <ToggleSwitch
                  register={register("is_active")}
                  checked={(entity as any).is_active}
                />
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
