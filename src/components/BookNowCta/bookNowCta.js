import React from "react";

export const BookNowCta = ({ price }) => {
  const handleClick = () => {
    alert("Great choice!");
  };

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  const formatPrice = (price) => {
    return formatter.format(price);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded bg-yellow-300 hover:bg-yellow-400 py-2 px-4 text-blue-900 w-full flex flex-col items-center font-bold"
    >
      <span className="text-sm">Book now</span>
      <span className="text-2xl">{formatPrice(price)}</span>
    </button>
  );
};
