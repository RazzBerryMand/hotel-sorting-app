import React from "react";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { SortButton } from "../SortButton/sortButton";

export const Sidebar = ({ onSort, selectedSort }) => {
  const handleSort = (type) => {
    onSort(type);
  };

  const style = { fontSize: "1.5em" };

  const sortOptions = [
    {
      label: "alphabetically",
      labelPrefix: "sort ",
      value: "alphabetically",
      checked: selectedSort === "alphabetically",
      icon: <MdOutlineSortByAlpha style={style} />,
    },
    {
      label: "price",
      labelPrefix: "sort by ",
      value: "price",
      checked: selectedSort === "price",
      icon: <RiMoneyPoundCircleFill style={style} />,
    },
    {
      label: "star rating",
      labelPrefix: "sort by ",
      value: "rating",
      checked: selectedSort === "rating",
      icon: <FaStar style={style} />,
    },
  ];

  if (!sortOptions || sortOptions.length === 0) {
    return <p>No sorting options available.</p>;
  }

  return (
    <aside className="mb-8 md:mb-0">
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
