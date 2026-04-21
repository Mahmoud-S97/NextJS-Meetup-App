import { JSX } from "react";

const MeetupDetailSkeleton = (): JSX.Element => {
  return (
    <div className="w-full sm:w-210 mb-12 bg-gray-50 dark:bg-[#151518] animate-pulse">
      <div className="w-full h-110 relative overflow-hidden">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
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
      </div>
    </div>
  );
};

export default MeetupDetailSkeleton;
