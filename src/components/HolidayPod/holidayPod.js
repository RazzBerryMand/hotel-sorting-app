import React from "react";
import { Travellers } from "../Travellers/travellers";
import { TripDates } from "../TripDates/tripDates";
import { StarRating } from "../StarRating/starRating";

export const HolidayPod = ({
  name,
  location,
  rating,
  travellers,
  tripDates,
  departureAirport,
  price,
  image,
  overview,
}) => {
  return (
    <article className="bg-white text-slate-600">
      <div className="md:flex">
        <div className="overflow-hidden md:w-4/6 relative">
          <img className="object-cover h-full w-full" src={image} alt={name} />
          <button>Read more about this hotel</button>
        </div>
        <div className="p-4 md:w-2/6">
          <div className="pb-2">
            <h2 className="text-lg font-bold text-blue-900">{name}</h2>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
          <StarRating rating={rating} />
          <div className="text-sm pb-4">
            <Travellers {...travellers} />
            <TripDates {...tripDates} />
            <p>
              departing from{" "}
              <span className="font-bold">{departureAirport}</span>
            </p>
          </div>
          {/* TODO: build price button */}
          {price}
        </div>
      </div>
      {/* TODO: finish overview panel show/hide functionality */}
      <div>{overview}</div>
    </article>
  );
};
