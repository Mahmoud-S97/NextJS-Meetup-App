import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

type MeetupCardProps = {
  id: number;
  title?: string;
  image?: string;
  description?: string;
  address?: string;
  date?: string;
};

const MeetUpCard = ({
  id,
  title,
  image,
  description,
  address,
  date,
}: MeetupCardProps): JSX.Element => {
  return (
    <div className="w-full sm:w-120 mb-12 rounded-xl shadow-md bg-gray-50 dark:bg-[#151518] border-1 border-gray-300 dark:border-gray-700">
      <div className="w-full h-48 relative flex justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={description ?? ""}
            loading="eager"
            fill
            sizes="width=500, height=400"
            className="object-cover rounded-t-xl"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-semibold text-white dark:text-gray-200 line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1 text-start">
        <div className="flex flex-row items-center justify-start gap-3 mb-2 -ml-[6px]">
          <p className="text-md text-gray-600 dark:text-gray-300/80">
            {`📍 ${address}`}
          </p>
          <time className="text-sm font-medium text-gray-500 dark:text-gray-500">
            {`📅 ${date}`}
          </time>
        </div>
        <p className="text-[14px] text-gray-600 dark:text-gray-300/80 leading-relaxed line-clamp-5">
          {description}
        </p>
        <Link
          href={`/${id}`}
          className="flex self-end text-sm text-gray-600 dark:text-gray-300/80 mt-3 ease duration-150 hover:bg-gray-200 dark:hover:bg-[#1c1c20] border-1 border-gray-400 dark:border-gray-700 py-2 px-4 rounded-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MeetUpCard;
