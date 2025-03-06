"use client";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ResourceType } from "../../../_components/columns";
import APIClient from "@/app/components/services/api-client";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name field must be required!")
    .min(3, { message: "Name must be at least 3 characters long" }),
  is_active: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const IssueForm = ({ resourcesType }: { resourcesType?: ResourceType }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // console.log(errors);
  const [error, setError] = useState(""); // to handel error comes form server
  const [isSubmitting, setSubmitting] = useState(false);
  const apiClient = new APIClient<FormData>("/xresources/types/");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      console.log(data);
      if (resourcesType) {
        axios
          .put(
            "https://dev-api.soms.gov.bd/gw/resource-service/api/resources/types/" +
              resourcesType.id,
            data,
            {
              headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNWM3YWRmYWI0MWY5YjA2MDc2ODExNWViOThhN2MzMzFlODUwNzZiYzdkNzU5ZGMyYTM0MDZmMDMzMWUzMDgyNTcxYzlmN2E4YTY3ZjcxMTgiLCJpYXQiOjE3NDEwMjExOTEuMzE1MzcxLCJuYmYiOjE3NDEwMjExOTEuMzE1MzczLCJleHAiOjE3NzI1NTcxOTEuMzA5MjM1LCJzdWIiOiIyMDAiLCJzY29wZXMiOltdfQ.JIMxt5zbOGiIkflsBTv7gBOp5MtyPblAKf3MjzW9GWdkM2n5MdL97563cxHQfCB8LqE9wzU3KJxfh7yCLpIUvuROXGhuLs-ZTWHec4LsPwKbEzpSGk7xErTqGh5vg2THikKGDJu209JeZpWBMUbdklwYoHB14ueQ03yTHDifgTmesnXr4Af68qbVX0-2L8pIFku2I8kkzpPGi0vb4A7DyUUTPlnmtkYDvgxgRX5A8M83vJ9htbGjLCnfLAbtm2fyjnYUw73yNvOFRoIeEEvOhCMlVzwoC467XnxDjJwqe6GXTcu24Rpn02n4rBpi_vIJuEXGiFMRaGMSkntaPlZOHe_1vfAGkDwJEf8oFkKH7lQSsXofTNJARtuRbjXOvmQ3ax8CQaQG2CAxuXAhdRRE9WxZL1JbuUFZ0mPAtU_pV9NxHnLjEI0nHVW9DN9tMMsVHtMbaYocA4pO2KRPFHOf5kWfNhg6f96PsOr8nPfqdYbGwBNqbUjzUmqf9lWWtPqMqkVVNb7sijwRrihyIpYnOcwvPZFbisePp2W5VFe8hdRQrapM5jtxfh7bf_1DWZNcf-CaaAv9RFIKlWCa5Yd-13dsT0k6P-Wh818Zx-zuwwmduz50WaCEHkmWs7YhiV-oMdPTaIQNJQ6S5q7vOZcg3VLK3dJE7TppzeqT9LxkyX4`, // Replace with your actual token
              },
            }
          )
          .then((res) => {
            toast.success("Successfully saved!");
          })
          .catch((error) => toast.error("Could not be saved."));
      }
    } catch (error) {
      // console.log(error);
      setSubmitting(false);
      setError("An unexpected error occurred.");
      toast.error("Could not be saved.");
    }
  });

  return (
    <div className="max-w-xl">
      <Toaster position="top-center" reverseOrder={false} />
      {error && "Error Occoured"}
      <form onSubmit={onSubmit}>
        <div className="grid gap-8 mb-8 sm:grid-cols-1">
          <div>
            <InputField
              label="Resource Name"
              register={register("name")}
              error={errors.name?.message}
              placeholder="Type Resource Name"
              defaultValue={resourcesType?.name}
            />
          </div>
          <ToggleSwitch
            register={register("is_active")}
            checked={resourcesType?.is_active}
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
  );
};

export default IssueForm;
