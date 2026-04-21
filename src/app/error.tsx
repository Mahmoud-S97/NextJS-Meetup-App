"use client";
import Icon from "@/components/globals/app-icon";
import { useEffect, useState } from "react";

const ErrorPage = ({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  const [errorMessage, setErrorMessage] = useState<Error | string | null>(null);
  useEffect(() => {
    setErrorMessage(error);
  }, [error]);
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 justify-center items-center">
      <h2 className="text-3xl -mt-18 text-(--heading) dark:text-gray-500 font-bold">
        Something went wrong!
      </h2>
      {errorMessage && (
        <p className="text-md text-gray-700 dark:text-gray-500 ">
          {errorMessage.toString()}
        </p>
      )}
      <button
        className="flex flex-row items-center justify-center text-md font-semibold text-gray-100 dark:text-gray-300 shadow-xl cursor-pointer rounded-full gap-2 py-2 px-4 mt-2 bg-(--primary) hover:bg-(--primary)/80 transition"
        onClick={() => unstable_retry()}
      >
        <span>Try again</span>
        <Icon
          name="iterationCw"
          className="text-gray-100 dark:text-gray-300"
          size={20}
        />
      </button>
    </div>
  );
};

export default ErrorPage;
