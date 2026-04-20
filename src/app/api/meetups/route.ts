import { NextApiResponse } from "next";
import clientPromise from "@/services/database/mongodb";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME);

    const meetupssCollection = db.collection("meetups");
    const result = await meetupssCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    const sortedMeetups = result.map((meetup) => ({
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      date: meetup.date?.toISOString(),
      description: meetup.description,
      createdAt: meetup.createdAt?.toISOString(),
    }));

    return Response.json(
      {
        success: true,
        message: "Success",
        data: sortedMeetups,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return Response.json(
      {
        success: false,
        message: message,
      },
      {
        status: 500,
      },
    );
  }
};
