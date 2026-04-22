import { useRef, useState } from "react";
import Icon from "./app-icon";

const ImagePicker = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    imageInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-10 flex items-center gap-3 p-1 rounded-2xl border-1 border-gray-800 dark:border-gray-500 focus:outline-(--primary) dark:focus:outline-gray-600">
      <input
        ref={imageInputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        name="image"
        id="meetup-image"
        onChange={handleChange}
        className="opacity-0 absolute w-0 h-0"
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-[50%] h-full sm:w-auto flex items-center justify-center gap-1 sm:gap-2 rounded-2xl px-1 sm:px-4 py-1 bg-gray-200 dark:bg-gray-600 text-xs sm:text-sm text-gray-800 dark:text-gray-200 focus:outline-(--primary) dark:focus:outline-gray-600"
      >
        <span>Upload Image</span>
        <Icon name="upload" size={14} />
      </button>
      <span className="text-sm text-gray-800 dark:text-gray-400 line-clamp-1">
        {imageName || "No image selected"}
      </span>
      {preview && (
        <img src={preview} className="w-10 h-8 object-cover rounded" />
      )}
    </div>
  );
};

export default ImagePicker;
