import React from "react";
import { FaStar } from "react-icons/fa6";

export const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < Math.min(rating, 5); i++) {
    stars.push(
      <span className="mr-1">
        <FaStar />
      </span>
    );
  }

  return <div className="flex text-yellow-300 pt-1 pb-4">{stars}</div>;
};
