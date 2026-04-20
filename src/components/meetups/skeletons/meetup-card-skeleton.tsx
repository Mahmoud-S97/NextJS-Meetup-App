import { JSX } from "react";

const MeetupCardSkeleton = (): JSX.Element => {
  return (
    <div className="w-full sm:w-120 mb-12 rounded-xl shadow-md bg-gray-50 dark:bg-[#151518] border border-gray-300 dark:border-gray-700 animate-pulse">
      <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-3 mb-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-11/12" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-10/12" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-9/12" />
        </div>
        <div className="flex justify-end mt-3">
          <div className="h-8 w-28 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MeetupCardSkeleton;
