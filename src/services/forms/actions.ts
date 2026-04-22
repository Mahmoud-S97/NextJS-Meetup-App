"use server";

import xss from "xss";
import { generateImageURL } from "../aws/s3";
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
  const enteredImage = formData.get("image") as File;
  const enteredAddress = formData.get("address") as string;
  const enteredDate = formData.get("date") as string;
  const enteredDescription = formData.get("description") as string;

  const data = {
    title: String(enteredTitle || ""),
    image: enteredImage || {},
    address: String(enteredAddress || ""),
    date: String(enteredDate || ""),
    description: String(enteredDescription || ""),
  };

  const results = formSchema.safeParse(data);

  if (!results.success) {
    const errors = results.error.flatten();
    const imageName = data.image?.name || "";
    return {
      success: false,
      errors: {
        ...errors?.fieldErrors,
      },
      values: { ...data, image: imageName },
    };
  }

  const validImageName = results.data.image.name;

  const validData = results.data;

  const savedData = await insertMeetupData(validData);

  return {
    success: true,
    values: initialState,
    data: { ...savedData, image: validImageName },
  };
};

const insertMeetupData = async (data: any): Promise<MeetupItem> => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB_NAME);

    const now = new Date();

    const sanitized_title = xss(data.title);

    const imageURL = await generateImageURL(data.image, sanitized_title);

    const sanitized_address = xss(data.address);
    const sanitized_description = xss(data.description);

    const newMeetup = {
      title: sanitized_title,
      image: imageURL,
      address: sanitized_address,
      date: data.date,
      description: sanitized_description,
      createdAt: now,
    };

    const meetupsCollection = db.collection("meetups");
    const insertResult = await meetupsCollection.insertOne({ ...newMeetup });

    return {
      id: insertResult.insertedId.toString(),
      ...newMeetup,
      createdAt: now.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong!");
  }
};
