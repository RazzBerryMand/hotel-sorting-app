import React from "react";

export const TripDates = ({ outbound, inbound }) => {
  const outboundDate = new Date(outbound);
  const inboundDate = new Date(inbound);

  const getDateSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const outboundFormatted =
    outboundDate.getDate() +
    getDateSuffix(outboundDate.getDate()) +
    " " +
    outboundDate.toLocaleString("default", { month: "long" }) +
    " " +
    outboundDate.getFullYear();

  const durationInDays = Math.round(
    (inboundDate - outboundDate) / (24 * 60 * 60 * 1000)
  );

  return (
    <p>
      <span className="font-bold">{outboundFormatted}</span> for{" "}
      <span className="font-bold">{durationInDays} days</span>
    </p>
  );
};
