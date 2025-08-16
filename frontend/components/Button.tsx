import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string; // e.g. "bg-blue-900"
  textColor?: string; // e.g. "text-white"
  hoverColor?: string; // e.g. "hover:bg-blue-800"
  rounded?: string; // e.g. "rounded-full"
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className,
  bgColor = "bg-blue-900",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-800", // must include "hover:"
  rounded = "rounded-full",
  disabled = false,
}) => {
  const baseClasses = clsx(
    "px-6 py-2 font-medium transition cursor-pointer",
    bgColor,
    textColor,
    hoverColor, // ✅ applied directly, no string interpolation
    rounded,
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;
