import { Suspense } from "react";
import { notFound } from "next/navigation";
import MeetUpList from "@/components/meetups/meetup-list";
import MeetupsListSkeleton from "@/components/meetups/skeletons/meetup-list-skeleton";
import { fetchMeetups } from "@/services/api/meetups";

export default async function Home() {
  const results = await fetchMeetups();

  if (!results) {
    return notFound();
  }

  if (!results.success) {
    throw new Error(results?.message || "Something went wrong!");
  }

  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <h1 className="text-center text-(--heading) text-3xl font-bold my-8">
        All Meetups
      </h1>
      <Suspense fallback={<MeetupsListSkeleton />}>
        <MeetUpList meetupList={results?.data} />
      </Suspense>
    </main>
  );
}
