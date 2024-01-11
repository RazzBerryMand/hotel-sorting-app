import React, { useState } from "react";
import { Travellers } from "../Travellers/travellers";
import { TripDates } from "../TripDates/tripDates";
import { StarRating } from "../StarRating/starRating";
import { BookNowCta } from "../BookNowCta/bookNowCta";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

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
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="bg-white text-slate-600">
      <div className="md:flex">
        <div className="overflow-hidden md:w-4/6 relative">
          <img className="object-cover h-full w-full" src={image} alt={name} />
          <button
            onClick={handleShowInfo}
            className="cursor-pointer absolute bottom-0 z-10 bg-white py-2 px-4 text-blue-800 flex"
          >
            {showInfo ? (
              <div className="flex items-center">
                <span className="font-bold mr-1">Read less</span>
                about this hotel
                <span className="ml-3">
                  <FaChevronDown />
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="font-bold mr-1">Read more</span>
                about this hotel
                <span className="ml-3">
                  <FaChevronRight />
                </span>
              </div>
            )}
          </button>
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
          <BookNowCta price={price} />
        </div>
      </div>

      {showInfo && (
        <div className="p-4">
          <h3 className="text-blue-800 pb-4">
            <strong>Overview</strong>
          </h3>
          <p>{overview}</p>
        </div>
      )}
    </article>
  );
};
