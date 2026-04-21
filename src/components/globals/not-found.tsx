import Link from "next/link";
import Icon from "@/components/globals/app-icon";

const NotFound = ({ message }: { message?: string }) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold -mt-18 text-(--heading) dark:text-gray-400">404 - Not Found</h1>
      {message && <p className="text-md dark:text-gray-400">{message}</p>}
      <Link
        href="/"
        className="flex flex-row items-center justify-center text-gray-100 dark:text-gray-300 shadow-xl rounded-full gap-2 py-2 px-4 mt-2 bg-(--primary) hover:bg-(--primary)/80 transition"
      >
        <Icon name="arrowLeft" className="text-gray-100 dark:text-gray-300" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
