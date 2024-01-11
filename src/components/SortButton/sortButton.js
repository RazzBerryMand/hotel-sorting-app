import React from "react";

export const SortButton = ({
  label,
  labelPrefix,
  value,
  checked,
  icon,
  onChange,
}) => {
  const labelClass = checked
    ? "bg-blue-900 text-white"
    : "bg-white text-blue-900";

  const iconClass = checked ? "text-white" : "text-gray-400";

  return (
    <div className="flex items-center bg-white last:border-none border-b border-b-blue-900">
      <label
        htmlFor={value}
        className={`cursor-pointer w-full p-4 text-sm font-medium flex ${labelClass}`}
      >
        <input
          id={value}
          type="radio"
          value={value}
          checked={checked}
          aria-checked={checked}
          onChange={onChange}
          className="appearance-none"
        />
        {labelPrefix}
        <span className="font-bold ml-1">{label}</span>
        <span className={`ml-auto ${iconClass}`}>{icon}</span>
      </label>
    </div>
  );
};
