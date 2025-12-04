import React from "react";
import { IconProps } from "@/types/Icon";

const StarIcon: React.FC<IconProps> = ({
  width = 21,
  height = 21,
  size,
  fill = "#ED9E15",
  ...props
}) => {
  const finalWidth = size ?? width;
  const finalHeight = size ?? height;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M14.0625 5.89844L19.6484 6.71875C20.1172 6.79688 20.5078 7.10938 20.6641 7.57812C20.8203 8.00781 20.7031 8.51562 20.3516 8.82812L16.2891 12.8516L17.2656 18.5547C17.3438 19.0234 17.1484 19.4922 16.7578 19.7656C16.3672 20.0781 15.8594 20.0781 15.4297 19.8828L10.4297 17.1875L5.39062 19.8828C5 20.0781 4.45312 20.0781 4.10156 19.7656C3.71094 19.4922 3.51562 19.0234 3.59375 18.5547L4.53125 12.8516L0.46875 8.82812C0.117188 8.51562 0 8.00781 0.15625 7.57812C0.3125 7.10938 0.703125 6.79688 1.17188 6.71875L6.79688 5.89844L9.29688 0.703125C9.49219 0.273438 9.92188 0 10.4297 0C10.8984 0 11.3281 0.273438 11.5234 0.703125L14.0625 5.89844Z"
        fill={fill}
      />
    </svg>
  );
};

export default StarIcon;
