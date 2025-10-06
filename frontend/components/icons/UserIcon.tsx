import { IconProps } from "@/types/Icon";
import React from "react";

const UserIcon: React.FC<IconProps> = ({
  width = 22,
  height = 26,
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
      viewBox="0 0 22 26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.9375 12.625C7.4707 12.625 4.6875 9.8418 4.6875 6.375C4.6875 2.95703 7.4707 0.125 10.9375 0.125C14.3555 0.125 17.1875 2.95703 17.1875 6.375C17.1875 9.8418 14.3555 12.625 10.9375 12.625ZM13.3789 14.9688C18.0664 14.9688 21.875 18.7773 21.875 23.4648C21.875 24.3926 21.0938 25.125 20.166 25.125H1.66016C0.732422 25.125 0 24.3926 0 23.4648C0 18.7773 3.75977 14.9688 8.44727 14.9688H13.3789Z"
        fill={fill}
      />
    </svg>
  );
};

export default UserIcon;
