import { FiBookOpen, FiBookmark } from "react-icons/fi";
import { Button } from "..";
import { cn } from "@/utils/cn";

function BookCard({ book }) {
  return (
    <div
      className={cn(
        "bg-surface rounded border border-border p-4",
        "flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        "transition-all duration-200 relative",
        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
        "max-[700px]:p-3",
        "group "
      )}
    >
      {/* Book Cover */}
      <div
        className={cn(
          "w-full aspect-[3/4] relative mb-3 rounded overflow-hidden",
          "bg-gradient-to-b from-gray-50 to-gray-100",
          "flex items-center justify-center"
        )}
      >
        <img
          src={book.cover}
          alt={book.title}
          className={cn(
            "w-full h-full object-cover rounded",
            "shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
            " group-hover:scale-105 group-hover:cursor-pointer transition-transform duration-300"
          )}
        />

        {/* Availability Badge */}
        <div
          className={cn(
            "absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm",
            book.available ? "bg-green-600" : "bg-red-600"
          )}
        >
          {book.available ? "Available" : "Checked Out"}
        </div>

        {/* Genre Tag */}
        {book.genre && (
          <div
            className={cn(
              "absolute bottom-2 left-2 bg-primary/90 text-primary-foreground",
              "text-xs font-medium px-2 py-0.5 rounded shadow-sm"
            )}
          >
            {book.genre}
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className={cn(
            "font-bold text-base text-foreground line-clamp-2 leading-tight",
            "min-h-[2.5rem]",
            "group-hover:text-primary group-hover:cursor-pointer"
          )}
        >
          {book.title}
        </h3>

        {/* Author */}
        <p
          className={cn(
            "text-sm text-muted font-medium group-hover:cursor-pointer"
          )}
        >
          by {book.author || "Unknown Author"}
        </p>

        {/* Short Description */}
        {book.description && (
          <p
            className={cn(
              "text-sm text-muted line-clamp-3 group-hover:cursor-pointer"
            )}
          >
            {book.description}
          </p>
        )}

        {/* Action */}
        <Button
          variant={book.available ? "primary" : "outline"}
          disabled={!book.available}
          hover={false}
          className={cn(
            "mt-auto w-full gap-2",
            !book.available && "opacity-50"
          )}
        >
          <FiBookOpen className="w-4 h-4" />
          {book.available ? "Borrow Book" : "Unavailable"}
        </Button>
      </div>
    </div>
  );
}

export default BookCard;
