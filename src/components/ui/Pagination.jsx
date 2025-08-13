import { cn } from "@/utils/cn";

/**
 * Simple Pagination Component - Styled only, no logic
 *
 * @param {Object} props
 * @param {Array} props.pages - Array of page numbers to display
 * @param {number} props.currentPage - Current active page
 * @param {Function} props.onPageChange - Page change handler
 * @param {boolean} props.showPrevNext - Whether to show prev/next buttons
 * @param {string} props.className - Additional CSS classes
 */
function Pagination({
  pages = [1, 2, 3, 4, 5],
  currentPage = 1,
  onPageChange,
  showPrevNext = true,
  className,
}) {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < Math.max(...pages);

  return (
    <nav
      className={cn("flex items-center justify-center gap-2 mt-8", className)}
      aria-label="Pagination"
    >
      {/* Previous Button */}
      {showPrevNext && (
        <button
          onClick={() => canGoPrevious && onPageChange?.(currentPage - 1)}
          disabled={!canGoPrevious}
          className={cn(
            "px-3 py-2 rounded border border-border bg-surface text-foreground text-sm font-medium",
            "transition-colors duration-200",
            canGoPrevious
              ? "hover:bg-hover hover:border-primary/50 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          )}
        >
          Previous
        </button>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange?.(page)}
          className={cn(
            "px-3 py-2 rounded text-sm font-medium transition-colors duration-200",
            page === currentPage
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-surface text-foreground hover:bg-hover hover:border-primary/50"
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      {showPrevNext && (
        <button
          onClick={() => canGoNext && onPageChange?.(currentPage + 1)}
          disabled={!canGoNext}
          className={cn(
            "px-3 py-2 rounded border border-border bg-surface text-foreground text-sm font-medium",
            "transition-colors duration-200",
            canGoNext
              ? "hover:bg-hover hover:border-primary/50 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          )}
        >
          Next
        </button>
      )}
    </nav>
  );
}

export default Pagination;
