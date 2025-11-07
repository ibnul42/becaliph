import { IconProps } from "@/types/Icon";
import React from "react";

const FacebookIcon: React.FC<IconProps> = ({
  width = 15,
  height = 24,
  size,
  fill = "currentColor",
  ...props
}) => {
  const finalWidth = size ?? width;
  const finalHeight = size ?? height;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 15 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 13.8H13.5714L15 9H10V6.6C10 5.364 10 4.2 12.8571 4.2H15V0.168C14.5343 0.1164 12.7757 0 10.9186 0C7.04 0 4.28571 1.9884 4.28571 5.64V9H0V13.8H4.28571V24H10V13.8Z"
        fill={fill}
      />
    </svg>
  );
};

export default FacebookIcon;
