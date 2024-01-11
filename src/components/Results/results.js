import React from "react";
import { HolidayPod } from "../HolidayPod/holidayPod";

export const Results = ({ data }) => {
  return (
    <section className="md:col-span-2 md:col-start-2">
      <ul className="grid auto-rows-auto gap-y-8">
        {data.map((holiday) => (
          <li key={holiday.id}>
            <HolidayPod {...holiday} />
          </li>
        ))}
      </ul>
    </section>
  );
};
