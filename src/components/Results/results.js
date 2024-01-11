import React from "react";
import { data } from "../../data/data";
import { HolidayPod } from "../HolidayPod/holidayPod";

export const Results = () => {
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
