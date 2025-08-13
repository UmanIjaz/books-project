import { FilterDropdown, SearchBar } from "../";
import { FaTrashAlt } from "react-icons/fa";
import { cn } from "@/utils/cn";

function ProductList({ products = [], showDelete, showAdd }) {
  return (
    <section className={cn("bg-surface p-4 rounded-lg shadow-card")}>
      {/* Search and Filter Header */}
      <div className={cn("flex gap-2 mb-6", "max-[480px]:flex-col")}>
        <SearchBar placeholder="Search books..." />
        <FilterDropdown
          options={["All", "Fiction", "Non-Fiction", "Biography", "Science"]}
        />
      </div>

      {/* Book List */}
      <ul className={cn("flex flex-col gap-3 list-none p-0 m-0")}>
        {products.map((product) => (
          <li
            key={product.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-lg border border-border",
              "bg-surface hover:bg-hover transition-colors duration-200",
              "min-w-[260px] h-[90px]",
              "max-[600px]:min-w-[180px] max-[600px]:p-3 max-[600px]:gap-3"
            )}
          >
            {/* Book Cover */}
            <img
              src={product.image}
              alt={product.name}
              className={cn(
                "w-[54px] h-[54px] rounded object-cover flex-shrink-0",
                "shadow-sm border border-border/50",
                "max-[600px]:w-[38px] max-[600px]:h-[38px]"
              )}
            />

            {/* Book Info */}
            <div className={cn("flex flex-col flex-1 min-w-[120px]")}>
              <div
                className={cn(
                  "text-sm font-bold text-foreground mb-1 line-clamp-1"
                )}
              >
                {product.name}
              </div>
              <div className={cn("text-xs text-primary font-medium mb-1")}>
                {product.category}
              </div>
              <div className={cn("text-sm text-green-600 font-semibold")}>
                ${product.price}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={cn("flex gap-2 ml-auto")}>
              {showAdd && (
                <button
                  className={cn(
                    "px-3 py-1.5 rounded text-xs font-semibold",
                    "bg-primary/10 text-primary border border-primary/20",
                    "hover:bg-primary hover:text-primary-foreground",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    "transition-all duration-200"
                  )}
                  disabled
                >
                  Add
                </button>
              )}
              {showDelete && (
                <button
                  className={cn(
                    "px-2 py-1.5 rounded text-sm",
                    "bg-red-50 text-red-600 border border-red-200",
                    "hover:bg-red-600 hover:text-white",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    "transition-all duration-200",
                    "flex items-center justify-center"
                  )}
                  disabled
                >
                  <FaTrashAlt className="w-3 h-3" />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {products.length === 0 && (
        <div className={cn("text-center py-12 text-muted")}>
          <div className="text-4xl mb-4">📚</div>
          <p className="text-lg font-medium mb-2">No books found</p>
          <p className="text-sm">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductList;
