import React from "react";
import clsx from "clsx";
import { StarIcon } from "./icons/StarIcon";

type StarRatingProps = {
  value: number;
  className?: string;
};

export default function StarRating({ value, className }: StarRatingProps) {
  return (
    <div className={clsx("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((num) => (
        <StarIcon
          key={num}
          filled={num <= value}
          className={clsx(
            "text-gray-300 w-4 h-4",
            num <= value && "text-yellow-500" 
          )}
        />
      ))}
    </div>
  );
}
