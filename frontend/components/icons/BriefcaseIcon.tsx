import { IconProps } from '@/types/Icon';
import React from 'react';

const BriefcaseIcon: React.FC<IconProps> = ({
  width = 25,
  height = 24,
  size,
  fill = 'currentColor',
  ...props
}) => {
  const finalWidth = size ?? width;
  const finalHeight = size ?? height;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.625 16.5312V14.1875H25V21.2188C25 22.4883 23.877 23.5625 22.6562 23.5625H2.34375C1.07422 23.5625 0 22.4883 0 21.2188V14.1875H9.375V16.5312C9.375 16.9707 9.7168 17.3125 10.1562 17.3125H14.8438C15.2344 17.3125 15.625 16.9707 15.625 16.5312ZM22.6562 4.8125C23.877 4.8125 25 5.93555 25 7.15625V12.625H0V7.15625C0 5.93555 1.07422 4.8125 2.34375 4.8125H6.25V2.46875C6.25 1.24805 7.32422 0.125 8.59375 0.125H16.4062C17.627 0.125 18.75 1.24805 18.75 2.46875V4.8125H22.6562ZM16.4062 4.8125V2.46875H8.59375V4.8125H16.4062Z"
        fill={fill}
      />
    </svg>
  );
};

export default BriefcaseIcon;