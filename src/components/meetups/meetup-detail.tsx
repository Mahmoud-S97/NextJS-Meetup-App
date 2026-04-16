import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

const MeetupDetail = ({
  id,
  title,
  image,
  description,
  address,
  date,
}: MeetupItem): JSX.Element => {
  return (
    <section className="w-full sm:max-w-210">
      <div className="w-full h-78 relative flex justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={description ?? ""}
            loading="eager"
            fill
            sizes="width=800, height=500"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="flex flex-col gap-2 text-start mt-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 line-clamp-4">
          {title}
        </h3>
        <div className="flex flex-row items-center justify-start gap-3 mb-2 -ml-[6px]">
          <p className="text-md font-medium text-gray-800 dark:text-gray-300/80">
            {`📍 ${address}`}
          </p>
          <time className="text-sm font-medium text-gray-600 dark:text-gray-500">
            {`📅 ${date}`}
          </time>
        </div>
        <p className="text-md text-gray-700 dark:text-gray-300/80 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default MeetupDetail;