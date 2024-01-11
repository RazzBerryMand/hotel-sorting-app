import React from "react";
import { HolidayPod } from "../HolidayPod/holidayPod";

export const Results = ({ data }) => {
  return (
    <ul className="lg:col-span-3">
      {data.map((holiday) => (
        <li key={holiday.id} className="mb-4">
          <HolidayPod {...holiday} />
        </li>
      ))}
    </ul>
  );
};
