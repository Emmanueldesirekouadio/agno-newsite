import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cardThemes = {
  modern: {
    background: "bg-gradient-to-br from-blue-500 to-purple-600",
    textColor: "text-white",
    accentColor: "text-yellow-300",
    borderColor: "border-white/20",
    fontFamily: "font-sans",
  },
  classic: {
    background: "bg-gradient-to-br from-gray-800 to-gray-900",
    textColor: "text-white",
    accentColor: "text-gray-300",
    borderColor: "border-gray-700",
    fontFamily: "font-serif",
  },
  minimal: {
    background: "bg-white",
    textColor: "text-gray-900",
    accentColor: "text-gray-500",
    borderColor: "border-gray-200",
    fontFamily: "font-sans",
  },
  elegant: {
    background: "bg-gradient-to-br from-rose-400 to-pink-500",
    textColor: "text-white",
    accentColor: "text-rose-200",
    borderColor: "border-white/20",
    fontFamily: "font-serif",
  },
} as const;

export type CardTheme = keyof typeof cardThemes;
