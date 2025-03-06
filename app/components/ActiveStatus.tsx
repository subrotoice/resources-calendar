const ActiveStatus = ({ value }: { value: boolean }) => {
  return (
    <>
      {value ? (
        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          <span className="w-2 h-2 me-1 bg-green-500 rounded-full" />
          Active
        </span>
      ) : (
        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
          <span className="w-2 h-2 me-1 bg-red-500 rounded-full" />
          InActive
        </span>
      )}
    </>
  );
};

export default ActiveStatus;
