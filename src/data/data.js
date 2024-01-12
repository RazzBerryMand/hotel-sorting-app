import HotelImage1 from "../assets/hotel-image-1.png";
import HotelImage2 from "../assets/hotel-image-2.png";
import HotelImage3 from "../assets/hotel-image-3.png";

export const data = [
  {
    id: "1",
    name: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    rating: 5,
    guests: {
      adults: 2,
      children: 2,
      infants: 1,
    },
    tripDates: {
      outbound: "2019-07-03",
      inbound: "2019-07-10",
    },
    departureAirport: "East Midlands",
    price: 1136.5,
    image: HotelImage1,
    overview:
      "Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs.",
  },
  {
    id: "2",
    name: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    rating: 4,
    guests: {
      adults: 2,
      children: 1,
    },
    tripDates: {
      outbound: "2019-05-27",
      inbound: "2019-06-03",
    },
    departureAirport: "Liverpool",
    price: 696.8,
    image: HotelImage2,
    overview:
      "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
  },
  {
    id: "3",
    name: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    rating: 3,
    guests: {
      adults: 2,
      children: 2,
    },
    tripDates: {
      outbound: "2019-07-03",
      inbound: "2019-07-10",
    },
    departureAirport: "Manchester",
    price: 499.99,
    image: HotelImage3,
    overview:
      "What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That's what.",
  },
];
