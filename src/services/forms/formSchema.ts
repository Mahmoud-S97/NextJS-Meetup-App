import * as z from "zod";

const isValidDate = (inputDate: string | Date): boolean => {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date.getTime() >= today.getTime();
};

const imageFileSchema = z
  .any()
  .refine((file) => file instanceof File, "Image is required")
  .refine((file) => file?.size > 0, "Image cannot be empty")
  .refine((file) => file?.type?.startsWith("image/"), "File must be an image")
  .refine((file) => file?.size <= 2 * 1024 * 1024, "Max file size is 2MB");

export const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is too short!.")
    .max(50, "Title should be 50 characters maximum!."),
  image: imageFileSchema,
  address: z
    .string()
    .trim()
    .min(5, "Address is too short!.")
    .max(60, "Address should be 60 characters maximum!."),
  date: z
    .string()
    .transform((val: string) => new Date(val))
    .refine(isValidDate, {
      message: "Date must be today or later.",
    }),
  description: z
    .string()
    .trim()
    .min(10, "Description is too short!.")
    .max(500, "Description should be 500 characters maximum!."),
});
