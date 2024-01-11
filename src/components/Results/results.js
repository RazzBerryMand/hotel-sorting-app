import React from "react";
import { HolidayPod } from "../HolidayPod/holidayPod";

export const Results = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <section className="md:col-span-2 md:col-start-2">
      <ul className="grid auto-rows-max gap-y-8">
        {data.map((holiday) => (
          <li key={holiday.id}>
            <HolidayPod {...holiday} />
          </li>
        ))}
      </ul>
    </section>
  );
};
