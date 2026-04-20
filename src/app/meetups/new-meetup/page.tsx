import { JSX } from "react";
import type { Metadata } from "next";

import MeetupForm from "@/components/meetups/meetup-form";

export const metadata: Metadata = {
  title: 'Add a New Meetup',
  description: 'Add your own meetups and create amazing networking opportunities.'
}

const NewMeetupPage = (): JSX.Element => {
  return (
    <main className="w-full h-full flex flex-col items-center py-12">
      <h1 className="text-center text-(--heading) text-3xl font-bold mb-8">
        Add New Meetup
      </h1>
      <MeetupForm />
    </main>
  );
};

export default NewMeetupPage;
