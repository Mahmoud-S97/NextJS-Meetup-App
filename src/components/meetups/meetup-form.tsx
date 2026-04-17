"use client";
import React, { useRef, useActionState } from "react";
import { addNewMeetupAction } from "@/services/forms/actions";
import { classes } from "@/utils/classes";

const initialState: Pick<
  MeetupItem,
  "title" | "image" | "address" | "description"
> = {
  title: "",
  image: "",
  address: "",
  description: "",
};

const MeetupForm = () => {
  const [state, formAction, pending] = useActionState(
    addNewMeetupAction,
    initialState,
  );

  return (
    <form
      className="w-full sm:max-w-160 flex flex-col gap-3 p-6 rounded-2xl shadow-xl dark:shadow-lg dark:shadow-gray-500/20 border-1 border-gray-800 dark:border-gray-500"
      action={formAction}
    >
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="meetup-title"
          className="text-start text-gray-800 dark:text-gray-400 font-semibold"
        >
          Meetup Title
        </label>
        <input
          className="w-full h-10 p-4 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600"
          type="text"
          name="title"
          id="meetup-title"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="meetup-image"
          className="text-start text-gray-800 dark:text-gray-400 font-semibold"
        >
          Meetup Image
        </label>
        <input
          className="w-full h-10 p-4 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600"
          type="text"
          name="image"
          id="meetup-image"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="address"
          className="text-start text-gray-800 dark:text-gray-400 font-semibold"
        >
          Address
        </label>
        <input
          className="w-full h-10 p-4 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600"
          type="text"
          name="address"
          id="address"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-start text-gray-800 dark:text-gray-400 font-semibold"
        >
          Description
        </label>
        <textarea
          className="w-full h-28 p-4 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600"
          name="description"
          id="description"
          rows={5}
          required
        ></textarea>
      </div>
      <button
        disabled={pending}
        className={classes(
          "text-sm text-white font-semibold dark:text-gray-200 mt-4 px-6 py-2 cursor-pointer flex self-end rounded-2xl transition bg-(--primary) hover:bg-(--primary)/80 border-1 border-gray-600 dark:border-gray-500",
          { "bg-gray-500 hover:bg-gray-500 dark:bg-gray-500": pending },
        )}
      >
        {pending ? "Adding Meetup..." : "Add Meetup"}
      </button>
    </form>
  );
};

export default MeetupForm;
