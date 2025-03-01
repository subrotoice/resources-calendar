import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

interface SelectFieldProps {
  label: string;
  register: any;
  error?: string;
  options: { value: string; label: string }[];
}

const SelectField = ({ label, register, error, options }: SelectFieldProps) => {
  return (
    <>
      <Label>{label}</Label>
      <select
        id="category"
        {...register}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default SelectField;
