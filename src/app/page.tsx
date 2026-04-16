import Image from "next/image";
import Link from "next/link";
import MeetUpList from "@/components/meetups/meetup-list";

import meetup1 from "@/assets/images/meetups/meetup-1.jpeg";
import meetup2 from "@/assets/images/meetups/meetup-2.jpg";
import meetup3 from "@/assets/images/meetups/meetup-3.webp";

const DUMMY_MEETUPS: any = [
  {
    id: 1,
    title: "Meetup 1",
    image: meetup1,
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    address: "Dublin 7, Ireland",
    date: "2026-04-15",
  },
  {
    id: 2,
    title: "Meetup 2",
    image: meetup2,
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    address: "Dublin 2, Ireland",
    date: "2026-04-15",
  },
  {
    id: 3,
    title: "Meetup 3",
    image: meetup3,
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    address: "Dublin 9, Ireland",
    date: "2026-04-15",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <h1 className="text-center text-(--heading) text-3xl font-bold my-8">
        All Meetups
      </h1>
      <MeetUpList meetupList={DUMMY_MEETUPS} />
    </main>
  );
}
