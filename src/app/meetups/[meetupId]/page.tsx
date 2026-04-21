import React, { JSX, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetupDetail from "@/components/meetups/meetup-detail";
import { fetchSingleMeetupById } from "@/services/api/meetups";
import MeetupDetailSkeleton from "@/components/meetups/skeletons/meetup-detail-skeleton";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ meetupId: string }>;
}): Promise<Metadata> => {
  const { meetupId } = await params;
  const results = await fetchSingleMeetupById(meetupId);

  if (!results.success) {
    throw new Error(results?.message || "Something went wrong!");
  }

  if (results.success && (!results || !results?.data)) {
    return notFound();
  }

  return {
    title: results.data?.title,
    description: results.data?.description,
  };
};

const MeetupDetailPage = async ({
  params,
}: {
  params: Promise<{ meetupId: string }>;
}) => {
  const { meetupId } = await params;

  const results = await fetchSingleMeetupById(meetupId);

  if (!results) {
    return notFound();
  }

  if (!results.success) {
    throw new Error(results?.message || "Something went wrong!");
  }

  return (
    <main className="w-full h-full flex flex-col items-center py-20">
      <Suspense fallback={<MeetupDetailSkeleton />}>
        <MeetupDetail {...results?.data} />
      </Suspense>
    </main>
  );
};

export default MeetupDetailPage;
