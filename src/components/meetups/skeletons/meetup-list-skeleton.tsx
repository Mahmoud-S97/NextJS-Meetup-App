import { JSX } from "react";
import MeetupCardSkeleton from "./meetup-card-skeleton";

const MeetupsListSkeleton = (): JSX.Element => {
  return (
    <ul className="flex flex-col w-full items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <MeetupCardSkeleton key={i} />
      ))}
    </ul>
  );
};

export default MeetupsListSkeleton;
