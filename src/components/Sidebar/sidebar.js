import React from "react";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

export const Sidebar = ({ onSort, selectedSort }) => {
  const handleSort = (type) => {
    onSort(type);
  };

  const sortOptions = [
    {
      label: "alphabetically",
      labelPrefix: "sort ",
      value: "alphabetically",
      checked: false,
      icon: <MdOutlineSortByAlpha />,
    },
    {
      label: "price",
      labelPrefix: "sort by ",
      value: "price",
      checked: true,
      icon: <RiMoneyPoundCircleFill />,
    },
    {
      label: "star rating",
      labelPrefix: "sort by ",
      value: "rating",
      checked: false,
      icon: <FaStar />,
    },
  ];

  return (
    <aside>
      {sortOptions.map(({ label, labelPrefix, value, checked, icon }) => (
        <label key={value}>
          <input
            type="radio"
            value={value}
            checked={selectedSort === value}
            onChange={() => handleSort(value)}
          />
          {labelPrefix} {label} {icon}
        </label>
      ))}
    </aside>
  );
};
