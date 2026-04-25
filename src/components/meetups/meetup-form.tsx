"use client";
import React, { useActionState, useEffect } from "react";
import { addNewMeetupAction } from "@/services/forms/actions";
import { classes } from "@/utils/classes";
import { redirect } from "next/navigation";
import Icon from "../globals/app-icon";
import ImagePicker from "../globals/image-picker";

const initialState: Omit<MeetupItem, "id" | "createdAt"> = {
  title: "",
  image: "",
  address: "",
  date: "",
  description: "",
};

const MeetupForm = () => {
  const [state, formAction, pending] = useActionState(addNewMeetupAction, {
    values: initialState,
  });

  const now = new Date();
  const localISOTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  useEffect(() => {
    if (!state?.success) return;
    const timeout = setTimeout(() => {
      redirect("/");
    }, 800);
    return () => clearTimeout(timeout);
  }, [state]);

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
          defaultValue={state.values.title}
          name="title"
          id="meetup-title"
          required
        />
        {state.errors?.title && (
          <p className="text-start text-red-400 text-sm font-[600]">
            {state.errors?.title[0]}
          </p>
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor="meetup-image"
          className="text-start text-gray-800 dark:text-gray-400 font-semibold"
        >
          Meetup Image
        </label>
        <ImagePicker />
        {state.errors?.image && (
          <p className="text-start text-red-400 text-sm font-[600]">
            {state.errors?.image[0]}
          </p>
        )}
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
          defaultValue={state.values.address}
          name="address"
          id="address"
          required
        />
        {state.errors?.address && (
          <p className="text-start text-red-400 text-sm font-[600]">
            {state.errors?.address[0]}
          </p>
        )}
      </div>
      <label
        htmlFor="date"
        className="text-start text-gray-800 dark:text-gray-400 font-semibold"
      >
        Select Date
      </label>
      <div className="w-full flex flex-col gap-2">
        <input
          className="w-full h-10 p-4 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600 [color-scheme:light] dark:[color-scheme:dark]"
          type="datetime-local"
          id="date"
          name="date"
          min={localISOTime}
          required
        />
        {state.errors?.date && (
          <p className="text-start text-red-400 text-sm font-[600]">
            {state.errors?.date[0]}
          </p>
        )}
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
          defaultValue={state.values.description}
          rows={5}
          required
        ></textarea>
        {state.errors?.description && (
          <p className="text-start text-red-400 text-sm font-[600]">
            {state.errors?.description[0]}
          </p>
        )}
      </div>
      {state.data?.message && (
        <h3 className="text-center my-1 text-green-500 font-semibold">
          {state.data?.message}
        </h3>
      )}
      {state.success && (
        <h2 className="text-2xl text-center mt-2 font-semibold text-green-600">
          Success, redirecting...
        </h2>
      )}
      <button
        type="submit"
        disabled={pending}
        className={classes(
          "text-sm text-white font-semibold dark:text-gray-200 shadow-xl mt-4 px-6 py-2 cursor-pointer flex self-end rounded-2xl transition bg-(--primary) hover:bg-(--primary)/80 focus:outline-(--primary) dark:focus:outline-gray-600 border-1 border-gray-600 dark:border-gray-500",
          { "bg-gray-500 hover:bg-gray-500 dark:bg-gray-500": pending },
        )}
      >
        {pending ? "Adding Meetup..." : "Add Meetup"}
      </button>
    </form>
  );
};

export default MeetupForm;
