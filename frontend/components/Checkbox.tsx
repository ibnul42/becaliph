import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  linkLabel?: string;
  linkHref?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  linkLabel,
  linkHref,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
      <div className="relative flex items-center justify-center w-4 h-4 mt-[1px]">
        <input
          type="checkbox"
          className="peer appearance-none w-4 h-4 rounded-full border border-primary-700 cursor-pointer transition-all duration-200 checked:border-primary-700"
          {...props}
        />
        <span
          className="pointer-events-none absolute w-2 h-2 rounded-full bg-primary-700 scale-0 peer-checked:scale-100 transition-transform duration-200"
        />
      </div>

      <span>
        {label}{" "}
        {linkLabel && linkHref && (
          <a
            href={linkHref}
            className="text-primary-700 font-medium underline underline-offset-2 hover:text-primary-800 transition"
          >
            {linkLabel}
          </a>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
