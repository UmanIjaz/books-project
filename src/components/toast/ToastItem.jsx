import { cn } from "../../utils/cn";

function ToastItem({ message, type }) {
  return (
    <div
      className={cn(
        // Base toast styles
        "bg-gray-800 text-white px-4 py-3 rounded-lg mt-2 leading-tight text-center animate-toast-slide-in max-[370px]:w-[70%]",
        // Type variants
        {
          "bg-blue-600": type === "info",
          "bg-green-600": type === "success",
          "bg-red-600": type === "error",
        }
      )}
    >
      {message}
    </div>
  );
}

export default ToastItem;
