import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  register: any;
  error?: string;
}

const InputField = ({
  label,
  placeholder,
  register,
  error,
}: InputFieldProps) => {
  return (
    <>
      <Label>{label}</Label>
      <input
        {...register}
        placeholder={placeholder}
        className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:text-white  ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
        } `}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default InputField;
