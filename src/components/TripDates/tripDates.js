import React from "react";

export const TripDates = ({ outbound, inbound }) => {
  console.log(outbound, inbound);

  // TODO: format dates

  return (
    <p>
      {outbound} {inbound}
    </p>
  );
};
