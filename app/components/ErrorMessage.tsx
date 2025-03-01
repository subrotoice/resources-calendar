import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children && (
        <span className="mt-2 text-sm text-red-600 dark:text-red-500">
          {children}
        </span>
      )}
    </>
  );
};

export default ErrorMessage;
