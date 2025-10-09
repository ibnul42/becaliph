import React, { useState } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  id,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  const [isFocus, setIsFocus] = useState(false);

  const inputId =
    id ||
    (name
      ? `${name}-${type}-input`
      : `floating-input-${Math.random().toString(36).substring(7)}`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(e);
  };

  const isFloated = isFocus || value.length > 0;

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        onChange={handleInputChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder=" "
        className="peer w-full px-4 py-2 border border-primary-700 rounded-full text-sm md:text-base outline-none focus:ring focus:ring-primary-700 bg-transparent text-gray-900"
        {...props}
      />

      <label
        htmlFor={inputId}
        className={clsx(
          "absolute transition-all duration-200 cursor-auto",
          {
            "-top-2 left-5 text-xs text-primary-900 px-1.5 bg-white": isFloated,
            "top-1/2 left-4 -translate-y-1/2 text-base text-gray-400": !isFloated,
          }
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
