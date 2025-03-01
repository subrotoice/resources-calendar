import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  register: any;
  error?: string;
  rows?: number;
}

const TextAreaField = ({
  label,
  placeholder,
  register,
  error,
  rows = 4,
}: TextAreaFieldProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <textarea
        rows={rows}
        {...register}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default TextAreaField;
