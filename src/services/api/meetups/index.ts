import { GET_MEETUPS } from "@/constants/api-endpoints";
import { BASE_URL } from "@/constants/config";

// ==== Get All Meetups API ==== //
export const fetchMeetups = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/${GET_MEETUPS}`);
    const results = await response.json();
    if (!response.ok) {
      throw new Error(
        results?.message || "Cannot load meetups, please try again later.",
      );
    }
    return results;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Fetching meetups failed!";
    throw new Error(errorMessage);
  }
};

// ==== Get SINGLE Meetup API ==== //
export const fetchSingleMeetupById = async (meetupId: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/${GET_MEETUPS}/${meetupId}`);
    const results = await response.json();
    if (!response.ok) {
      throw new Error(
        results?.message || "Cannot load meetup, please try again later.",
      );
    }
    return results;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Fetching single meetup failed!";
    throw new Error(errorMessage);
  }
};