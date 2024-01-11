import React from "react";

export const Travellers = ({ adults, children, infants }) => {
  const formatAdultsText = (adults) => {
    return adults > 1 ? "Adults" : "Adult";
  };

  const formatChildrenText = (children) => {
    return children > 1 ? "children" : "child";
  };

  const formatInfantsText = (infants) => {
    return infants > 1 ? "infants" : "infant";
  };

  return (
    <p>
      {adults} {formatAdultsText(adults)}
      {children && (
        <span>
          , {children} {formatChildrenText(children)}
        </span>
      )}
      {infants && (
        <span>
          {" "}
          & {infants} {formatInfantsText(infants)}
        </span>
      )}
    </p>
  );
};
