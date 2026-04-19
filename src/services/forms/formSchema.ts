import * as z from "zod";

const isValidURL = (val: string): boolean => {
  try {
    new URL(val);
    return true;
  } catch {
    return false;
  }
};

const isValidDate = (inputDate: string | Date): boolean => {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date.getTime() >= today.getTime();
};

export const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is too short!.")
    .max(50, "Title should be 50 characters maximum!."),
  image: z
    .string()
    .trim()
    .refine(isValidURL, { message: "Please enter a valid image URL." }),
  address: z
    .string()
    .trim()
    .min(5, "Address is too short!.")
    .max(60, "Address should be 60 characters maximum!."),
  date: z.coerce.date().refine(isValidDate, {
    message: "Date must be today or later.",
  }),
  description: z
    .string()
    .trim()
    .min(10, "Description is too short!.")
    .max(500, "Description should be 500 characters maximum!."),
});
