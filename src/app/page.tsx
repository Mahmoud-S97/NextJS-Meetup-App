import MeetUpList from "@/components/meetups/meetup-list";
import { DUMMY_MEETUPS } from "@/dummy-data";

export default async function Home() {

  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <h1 className="text-center text-(--heading) text-3xl font-bold my-8">
        All Meetups
      </h1>
      <MeetUpList meetupList={DUMMY_MEETUPS} />
    </main>
  );
}
