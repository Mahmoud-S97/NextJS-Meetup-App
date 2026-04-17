"use server";

export const addNewMeetupAction = async (
  prevState: Record<string, any>,
  formData: FormData,
): Promise<any> => {
  const enteredTitle = formData.get("title") as string;
  const enteredImageUrl = formData.get("image") as string;
  const enteredAddress = formData.get("address") as string;
  const enteredDescription = formData.get("description") as string;

  console.log({
    enteredTitle,
    enteredImageUrl,
    enteredAddress,
    enteredDescription,
  });
};
