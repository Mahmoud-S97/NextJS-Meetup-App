import { NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "@/services/database/mongodb";

export const GET = async (
  req: Request,
  { params }: { params: { meetupId: string } },
) => {
  try {
    const { meetupId } = await params;

    if (!ObjectId.isValid(meetupId)) {
      return Response.json({ success: false, message: "Invalid Meetup-ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME);

    const meetupssCollection = db.collection("meetups");
    const meetup = await meetupssCollection.findOne({
      _id: new ObjectId(meetupId),
    });

    if (!meetup) {
      return Response.json(
        {
          success: false,
          message: "Could not find a meetup with such id",
        },
        {
          status: 404,
        },
      );
    }

    const formattedMeetup = {
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      date: meetup.date?.toISOString(),
      description: meetup.description,
      createdAt: meetup.createdAt?.toISOString(),
    };

    return Response.json(
      {
        success: true,
        message: "Success",
        data: formattedMeetup,
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
