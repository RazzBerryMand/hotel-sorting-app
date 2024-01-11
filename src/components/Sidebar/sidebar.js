import React from "react";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { SortButton } from "../SortButton/sortButton";

export const Sidebar = ({ onSort, selectedSort }) => {
  const handleSort = (type) => {
    onSort(type);
  };

  const sortOptions = [
    {
      label: "alphabetically",
      labelPrefix: "sort ",
      value: "alphabetically",
      checked: selectedSort === "alphabetically",
      icon: <MdOutlineSortByAlpha />,
    },
    {
      label: "price",
      labelPrefix: "sort by ",
      value: "price",
      checked: selectedSort === "price",
      icon: <RiMoneyPoundCircleFill />,
    },
    {
      label: "star rating",
      labelPrefix: "sort by ",
      value: "rating",
      checked: selectedSort === "rating",
      icon: <FaStar />,
    },
  ];

  return (
    <aside>
      {sortOptions.map((sortOption) => (
        <SortButton
          key={sortOption.value}
          {...sortOption}
          onChange={() => handleSort(sortOption.value)}
        />
      ))}
    </aside>
  );
};
