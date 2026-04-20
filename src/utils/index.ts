export const formatDate = (value: string | Date): string => {
  const date = value instanceof Date ? value : new Date(value);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
  });
  return formattedDate;
};
