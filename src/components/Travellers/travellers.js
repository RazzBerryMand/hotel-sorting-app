import React from "react";

export const Travellers = ({ adults, children, infants }) => {
  const formatAdultsText = (adults) => {
    return adults > 1 ? " Adults" : " Adult";
  };

  const formatChildrenText = (children) => {
    return children > 1 ? " children" : " child";
  };

  const formatInfantsText = (infants) => {
    return infants > 1 ? " infants" : " infant";
  };

  return (
    <p>
      <span className="font-bold">{adults}</span> {formatAdultsText(adults)}
      {children && (
        <span>
          , <span className="font-bold">{children}</span>
          {formatChildrenText(children)}
        </span>
      )}
      {infants && (
        <span>
          {" "}
          & <span className="font-bold">{infants}</span>
          {formatInfantsText(infants)}
        </span>
      )}
    </p>
  );
};
