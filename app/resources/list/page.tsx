"use client";
import InputField from "@/app/components/InputField";
import SelectField from "@/app/components/SelectField";
import TextAreaField from "@/app/components/TextAreaField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

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
  itemWeight: z.number({
    invalid_type_error: "Weight field must be required.",
  }),
});

type FormData = z.infer<typeof schema>;

const ResourceList = () => {
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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 px-4 mx-auto max-w-2xl lg:py-4">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add new Resource
          </h2>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <InputField
                  label="Resource Name"
                  register={register("name")}
                  error={errors.name?.message}
                  placeholder="Type Resource Name"
                />
              </div>
              <div className="w-full">
                <InputField
                  label="Brand"
                  register={register("brand")}
                  error={errors.brand?.message}
                  placeholder="Resource brand"
                />
              </div>
              <div className="w-full">
                <InputField
                  label="Price"
                  register={register("price", { valueAsNumber: true })}
                  error={errors.price?.message}
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
              <div>
                <InputField
                  label="Item Weight (kg)"
                  register={register("itemWeight", { valueAsNumber: true })}
                  error={errors.itemWeight?.message}
                />
              </div>
              <div className="sm:col-span-2">
                <TextAreaField
                  label="Item Weight (kg)"
                  placeholder="Enter description"
                  register={register("description")}
                  error={errors.itemWeight?.message}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Resource
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ResourceList;
