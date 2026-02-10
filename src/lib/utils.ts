import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function asset(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Ensure path starts with / if not present (unless it's empty)
  const safePath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${safePath}`;
}
