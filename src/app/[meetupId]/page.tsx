import Image from "next/image";
import React, { JSX, Suspense } from "react";
import Link from "next/link";
import MeetupDetail from "@/components/meetups/meetup-detail";
import { DUMMY_MEETUPS } from "@/dummy-data";

const MeetupDetailPage = async ({
  params,
}: {
  params: Promise<{ meetupId: string }>;
}) => {
  const { meetupId } = await params;
  const meetup = DUMMY_MEETUPS.find(
    (meetup: MeetupItem) => meetup.id === Number(meetupId),
  );

  return (
    <main className="w-full h-full flex flex-col items-center py-20">
      <Suspense fallback={<p className="text-2xl text-center mt-18">Loading Meetup...</p>}>
        <MeetupDetail {...meetup} />
      </Suspense>
    </main>
  );
};

export default MeetupDetailPage;
