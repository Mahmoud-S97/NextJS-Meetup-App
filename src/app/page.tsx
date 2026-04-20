import { Suspense } from "react";
import { notFound } from "next/navigation";
import MeetUpList from "@/components/meetups/meetup-list";
import MeetupsListSkeleton from "@/components/meetups/skeletons/meetup-list-skeleton";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/meetups", {
    cache: "no-store",
  });
  const results = await response.json();
  const meetups = results.data;

  if (!response.ok || !results?.success || !results?.data) {
    return notFound();
  }

  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <h1 className="text-center text-(--heading) text-3xl font-bold my-8">
        All Meetups
      </h1>
      <Suspense
        fallback={<MeetupsListSkeleton />}>
        <MeetUpList meetupList={meetups} />
      </Suspense>
      
    </main>
  );
}
