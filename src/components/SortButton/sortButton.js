import React from "react";

export const SortButton = ({
  label,
  labelPrefix,
  value,
  checked,
  icon,
  onChange,
}) => (
  <label>
    <input type="radio" value={value} checked={checked} onChange={onChange} />
    {labelPrefix} {label} {icon}
  </label>
);
