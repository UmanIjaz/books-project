import ProductCard from "./ProductCard";
import products from "../../data/products";
import { cn } from "@/utils/cn";

const books = [
  {
    id: 1,
    title: "The 48 Laws of Power",
    author: "Robert Green",
    genre: "Psychology",
    cover: "https://m.media-amazon.com/images/I/71aG+xDKSYL.jpg",
    description:
      "A groundbreaking exploration of the two systems that drive the way we think—System 1, fast and intuitive, and System 2, slow and deliberate.",
    available: true,
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    cover: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    description:
      "An exploration of the history of Homo sapiens, from the Stone Age through the modern age of technology.",
    available: false,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    description:
      "A practical guide to building good habits and breaking bad ones using small, incremental changes.",
    available: true,
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
    description:
      "A memoir recounting the author’s journey from a survivalist family in rural Idaho to earning a PhD from Cambridge.",
    available: true,
  },
];

function Products() {
  return (
    <section className={cn("w-full mx-auto")}>
      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 w-full",
          "max-[700px]:gap-5"
        )}
      >
        {books.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default Products;
