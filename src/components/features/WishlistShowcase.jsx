import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
import { FiBookmark, FiArrowRight } from "react-icons/fi";
import Button from "../ui/Button";

// Book wishlist data
const wishlist = [
  {
    id: "B-1001",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=200&q=80",
    price: 18.99,
  },
  {
    id: "B-1002",
    name: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=200&q=80",
    price: 16.99,
  },
  {
    id: "B-1003",
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=80",
    price: 14.99,
  },
  {
    id: "B-1004",
    name: "Deep Work",
    author: "Cal Newport",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    price: 19.99,
  },
];

function WishlistShowcase() {
  const navigate = useNavigate();

  return (
    <section
      className={cn(
        "bg-surface rounded-xl border border-border/50",
        "p-6 min-w-0 overflow-hidden relative",
        "max-[600px]:p-4"
      )}
    >
      {/* Header */}
      <div className={cn("flex items-center justify-between mb-6")}>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
            )}
          >
            <FiBookmark className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3
              className={cn(
                "text-xl font-bold text-foreground mb-0.5",
                "max-[600px]:text-lg"
              )}
            >
              My Wishlist
            </h3>
            <p className="text-sm text-muted">
              {wishlist.length} books waiting
            </p>
          </div>
        </div>

        <Button onClick={() => navigate("/wishlist")} size="sm" hover={true}>
          View All
          <FiArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Books Grid */}
      <div
        className={cn(
          "flex gap-4 overflow-x-auto pb-2 scrollbar-hide",
          "-mx-2 px-2"
        )}
      >
        {wishlist.map((book) => (
          <div
            key={book.id}
            className={cn("flex-shrink-0 group cursor-pointer")}
          >
            {/* Book Cover */}
            <div
              className={cn(
                "relative mb-3 overflow-hidden rounded-lg",
                "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
                "group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]",
                "transition-all duration-200"
              )}
            >
              <img
                src={book.image}
                alt={book.name}
                className={cn(
                  "w-[100px] h-[140px] object-cover",
                  "group-hover:scale-105 transition-transform duration-500",
                  "max-[600px]:w-[85px] max-[600px]:h-[120px]"
                )}
              />

              {/* Overlay gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}
              />

              {/* Price tag */}
              <div
                className={cn(
                  "absolute top-2 right-2 bg-primary text-primary-foreground",
                  "px-2 py-1 rounded text-xs font-semibold",
                  "shadow-sm"
                )}
              >
                ${book.price}
              </div>
            </div>

            {/* Book Info */}
            <div className={cn("w-[100px] max-[600px]:w-[85px]")}>
              <h4
                className={cn(
                  "font-semibold text-sm text-foreground mb-1",
                  "line-clamp-2 leading-tight",
                  "group-hover:text-primary transition-colors duration-200"
                )}
              >
                {book.name}
              </h4>
              <p className={cn("text-xs text-muted line-clamp-1 mb-2")}>
                {book.author}
              </p>

              {/* Read indicator */}
              <div
                className={cn(
                  "flex items-center gap-1 text-xs text-primary/70",
                  "group-hover:text-primary transition-colors duration-200"
                )}
              >
                Want to read
                <FiArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-20",
          "bg-gradient-to-l from-surface to-transparent pointer-events-none",
          "opacity-50"
        )}
      />
    </section>
  );
}

export default WishlistShowcase;
