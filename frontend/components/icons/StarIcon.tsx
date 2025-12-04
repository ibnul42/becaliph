import React from "react";

type StarProps = {
  filled?: boolean;
  className?: string;
};

export function StarIcon({ filled = false, className }: StarProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M10 1.5L12.4721 7.02786L18.5 7.73607L13.75 11.9721L15.0557 17.9639L10 14.8L4.94427 17.9639L6.25 11.9721L1.5 7.73607L7.52786 7.02786L10 1.5Z"
      />
    </svg>
  );
}
