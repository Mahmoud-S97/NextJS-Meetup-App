"use server";

import clientPromise from "../database/mongodb";
import { formSchema } from "./formSchema";

const initialState: Omit<MeetupItem, "id" | "createdAt"> = {
  title: "",
  image: "",
  address: "",
  date: "",
  description: "",
};

export const addNewMeetupAction = async (
  prevState: Record<string, any>,
  formData: FormData,
): Promise<any> => {
  const enteredTitle = formData.get("title") as string;
  const enteredImageUrl = formData.get("image") as string;
  const enteredAddress = formData.get("address") as string;
  const enteredDate = formData.get("date") as string;
  const enteredDescription = formData.get("description") as string;

  const data = {
    title: String(enteredTitle || ""),
    image: String(enteredImageUrl || ""),
    address: String(enteredAddress || ""),
    date: String(enteredDate || ""),
    description: String(enteredDescription || ""),
  };

  const results = formSchema.safeParse(data);

  if (!results.success) {
    const errors = results.error.flatten();
    return {
      success: false,
      errors: {
        ...errors?.fieldErrors,
      },
      values: data,
    };
  }

  const validData = results.data;

  const savedData = await insertMeetupData(validData);

  return {
    success: true,
    values: initialState,
    data: savedData,
  };
};

const insertMeetupData = async (data: any): Promise<MeetupItem> => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME);

    const now = new Date();

    const newMeetup = {
      ...data,
      createdAt: now,
    };

    const meetupsCollection = db.collection("meetups");
    const insertResult = await meetupsCollection.insertOne(newMeetup);

    return {
      id: insertResult.insertedId.toString(),
      ...data,
      createdAt: now.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong!");
  }
};
