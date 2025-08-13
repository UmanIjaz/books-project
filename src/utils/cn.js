import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for optimal class handling
 * @param {...any} inputs - Class names, objects, arrays, etc.
 * @returns {string} - Merged and deduplicated class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
