"use client";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import APIClient from "@/app/components/services/api-client";
import ResourceType from "@/app/entities/ResourceType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name field must be required!")
    .min(3, { message: "Name must be at least 3 characters long" }),
  is_active: z.boolean(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  closeModel: () => void;
}
const CreateModel = ({ closeModel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const queryClient = useQueryClient();
  const apiClient = new APIClient<ResourceType>("/resources/types");

  const createMutation = useMutation({
    mutationFn: apiClient.post,
    onSuccess: (savedData, newData) => {
      console.log(savedData);
      const formattedData: ResourceType = {
        id: savedData.id,
        name: savedData.name,
        is_active: savedData.is_active,
      };
      queryClient.setQueryData<ResourceType[]>(["resourcesTypes"], (data) => [
        formattedData,
        ...(data || []),
      ]);
    },
  });

  // console.log(errors);

  const onSubmit = handleSubmit((data: FormData) => {
    createMutation.mutate(data);
    closeModel();
  });
  return (
    <div>
      <div
        id="createProductModal"
        tabIndex={-1}
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full bg-gray-500 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* Modal header */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Product
              </h3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => closeModel()}
              >
                <IoMdClose className="text-xl" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={onSubmit}>
              <div className="grid gap-8 mb-8 sm:grid-cols-1">
                <div>
                  <InputField
                    label="Resource Name"
                    register={register("name")}
                    error={errors.name?.message}
                    placeholder="Type Resource Name"
                  />
                </div>
                <ToggleSwitch
                  register={register("is_active")}
                  checked={false}
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModel;
