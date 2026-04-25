export const formatDate = (value: string | Date): string => {
  const date = value instanceof Date ? value : new Date(value);

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: 'numeric',
    minute: '2-digit'
  });
  return formattedDate;
};
