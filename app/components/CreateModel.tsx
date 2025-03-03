"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import { IoMdClose } from "react-icons/io";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name field must be required!")
    .min(3, { message: "Name must be at least 3 characters long" }),
  price: z
    .number({ invalid_type_error: "Amount field must be required." })
    .min(0.01, { message: "Minimum amount is .01" })
    .max(10000, { message: "Maximum amount is 10000" }),
  brand: z.string(),
  category: z.string(),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
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

  // console.log(errors);

  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };

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
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <InputField
                    label="Resource Name"
                    register={register("name")}
                    error={errors.name?.message}
                    placeholder="Type Resource Name"
                  />
                </div>
                <div>
                  <InputField
                    label="Brand"
                    register={register("brand")}
                    error={errors.brand?.message}
                    placeholder="Resource brand"
                  />
                </div>
                <div>
                  <InputField
                    label="Price"
                    register={register("price", { valueAsNumber: true })}
                    error={errors.price?.message}
                    placeholder="Price"
                  />
                </div>
                <div>
                  <SelectField
                    label="Category"
                    register={register("category")}
                    options={[
                      { value: "", label: "Select category" },
                      { value: "TV", label: "TV/Monitors" },
                      { value: "PC", label: "PC" },
                      { value: "GA", label: "Gaming/Console" },
                      { value: "PH", label: "Phones" },
                    ]}
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextAreaField
                    label="Item Weight (kg)"
                    placeholder="Enter description"
                    register={register("description")}
                    error={errors.description?.message}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModel;
