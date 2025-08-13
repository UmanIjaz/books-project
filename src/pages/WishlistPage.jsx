import { ProductList } from "../components";
import { cn } from "@/utils/cn";

// Book wishlist data
const wishlistProducts = [
  {
    id: "B-1001",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=100&q=80",
    price: 18.99,
    category: "Finance",
  },
  {
    id: "B-1002",
    name: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=100&q=80",
    price: 16.99,
    category: "Self-Help",
  },
  {
    id: "B-1003",
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=100&q=80",
    price: 14.99,
    category: "Business",
  },
  {
    id: "B-1004",
    name: "Deep Work",
    author: "Cal Newport",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    price: 19.99,
    category: "Productivity",
  },
  {
    id: "B-1005",
    name: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=100&q=80",
    price: 17.99,
    category: "Leadership",
  },
];

function WishlistPage() {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col gap-6",
        "max-[600px]:px-1 max-[600px]:py-4 max-[600px]:pb-6 max-[600px]:gap-5"
      )}
    >
      <h1 className={cn("text-3xl font-bold text-foreground mb-2")}>
        My Reading Wishlist
      </h1>

      {/* Future controls section - keeping structure for later */}
      {/* <div
        className={cn(
          "flex gap-5 items-center flex-wrap",
          "max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:items-stretch"
        )}
      ></div> */}

      <ProductList products={wishlistProducts} showDelete showAdd />
    </div>
  );
}

export default WishlistPage;
