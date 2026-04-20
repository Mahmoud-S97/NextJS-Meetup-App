import React, { JSX, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetupDetail from "@/components/meetups/meetup-detail";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { meetupId } = await params;
  const response = await fetch(`http://localhost:3000/api/meetups/${meetupId}`);
  const meetup = await response.json();

  if (!response.ok || !meetup?.success || !meetup?.data) {
    return notFound();
  }

  return {
    title: meetup.data?.title,
    description: meetup.data?.description,
  };
};

const MeetupDetailPage = async ({
  params,
}: {
  params: Promise<{ meetupId: string }>;
}) => {
  const { meetupId } = await params;

  const response = await fetch(`http://localhost:3000/api/meetups/${meetupId}`);
  const meetup = await response.json();

  if (!response.ok || !meetup?.success || !meetup?.data) {
    return notFound();
  }

  return (
    <main className="w-full h-full flex flex-col items-center py-20">
      <Suspense
        fallback={
          <p className="text-3xl text-center font-bold mt-18">
            Loading Meetup...
          </p>
        }
      >
        <MeetupDetail {...meetup?.data} />
      </Suspense>
    </main>
  );
};

export default MeetupDetailPage;
