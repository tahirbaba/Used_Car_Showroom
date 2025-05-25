"use client";

import React, { useState } from "react";
import CarCard from "@/components/CarCard";

const Cars = [
  {
    id: "1",
    image: "/fortuner.webp",
    model: "Toyota Fortuner",
    year: 2020,
    mileage: "52,000 KM",
    color: "Gray",
    price: "9,800,000",
    location: "Clifton, Karachi",
  },
  {
    id: "2",
    image: "/toyota-hilux-vigo.jpg",
    model: "Toyota Vigo",
    year: 2018,
    mileage: "65,000 KM",
    color: "White",
    price: "8,200,000",
    location: "Gulistan-e-Johar",
  },
  {
    id: "3",
    image: "/honda-civic.jpg",
    model: "Honda Civic",
    year: 2024,
    mileage: "10,000 KM",
    color: "Gray",
    price: "5,100,000",
    location: "DHA Phase 5, Karachi",
  },
  {
    id: "4",
    image: "/Suzuki Cultus.jpg",
    model: "Suzuki Cultus",
    year: 2021,
    mileage: "25,000 KM",
    color: "Silver",
    price: "2,500,000",
    location: "North Nazimabad, Karachi",
  },
  {
    id: "5",
    image: "/KIA Sportage.jpg",
    model: "KIA Sportage",
    year: 2022,
    mileage: "18,000 KM",
    color: "Black",
    price: "7,200,000",
    location: "PECHS, Karachi",
  },
  {
    id: "6",
    image: "/Hyundai Tucson.jpg",
    model: "Hyundai Tucson",
    year: 2021,
    mileage: "30,000 KM",
    color: "Red",
    price: "6,800,000",
    location: "Nazimabad, Karachi",
  },
  {
    id: "7",
    image: "/Suzuki Alto.jpg",
    model: "Suzuki Alto",
    year: 2017,
    mileage: "42,000 KM",
    color: "White",
    price: "1,900,000",
    location: "Federal B Area, Karachi",
  },
  {
    id: "8",
    image: "/honda city.jpg",
    model: "Honda City",
    year: 2006,
    mileage: "55,000 KM",
    color: "Black",
    price: "3,300,000",
    location: "Korangi, Karachi",
  },
  {
    id: "9",
    image: "/Toyota Corolla.jpg",
    model: "Toyota Corolla",
    year: 2017,
    mileage: "75,000 KM",
    color: "Dark Blue",
    price: "3,600,000",
    location: "Gulshan-e-Iqbal, Karachi",
  },
  {
    id: "10",
    image: "/Daihatsu Mira.jpg",
    model: "Daihatsu Mira",
    year: 2020,
    mileage: "38,000 KM",
    color: "White",
    price: "2,150,000",
    location: "Malir, Karachi",
  },
  {
    id: "11",
    image: "/Suzuki Wagon R.webp",
    model: "Suzuki Wagon R",
    year: 2021,
    mileage: "29,000 KM",
    color: "White",
    price: "2,400,000",
    location: "Shah Faisal Colony, Karachi",
  },
  {
    id: "12",
    image: "/Nissan Dayz.jpg",
    model: "Nissan Dayz",
    year: 2018,
    mileage: "40,000 KM",
    color: "Gray",
    price: "2,300,000",
    location: "Johar Mor, Karachi",
  },
  {
    id: "13",
    image: "/Toyota Aqua.webp",
    model: "Toyota Aqua",
    year: 2015,
    mileage: "60,000 KM",
    color: "Red",
    price: "3,900,000",
    location: "Karimabad, Karachi",
  },
  {
    id: "14",
    image: "/Honda BR-V.webp",
    model: "Honda BR-V",
    year: 2022,
    mileage: "28,000 KM",
    color: "White",
    price: "4,850,000",
    location: "University Road, Karachi",
  },
  {
    id: "15",
    image: "/Toyota Prius.webp",
    model: "Toyota Prius",
    year: 2014,
    mileage: "82,000 KM",
    color: "White",
    price: "4,700,000",
    location: "Bahadurabad, Karachi",
  },
  {
    id: "16",
    image: "/MG HS.webp",
    model: "MG HS",
    year: 2020,
    mileage: "22,000 KM",
    color: "White",
    price: "8,000,000",
    location: "Gulberg, Karachi",
  },
  {
    id: "17",
    image: "/Changan Alsvin.webp",
    model: "Changan Alsvin",
    year: 2021,
    mileage: "35,000 KM",
    color: "White",
    price: "3,200,000",
    location: "Model Colony, Karachi",
  },
  {
    id: "18",
    image: "/KIA Picanto.jpg",
    model: "KIA Picanto",
    year: 2020,
    mileage: "33,000 KM",
    color: "Sky Blue",
    price: "2,400,000",
    location: "Garden West, Karachi",
  },
  {
    id: "19",
    image: "/Suzuki Swift.jpg",
    model: "Suzuki Swift",
    year: 2019,
    mileage: "47,000 KM",
    color: "Red",
    price: "2,900,000",
    location: "Ancholi, Karachi",
  },
  {
    id: "20",
    image: "/Honda Vezel.webp",
    model: "Honda Vezel",
    year: 2022,
    mileage: "77,000 KM",
    color: "Blue",
    price: "4,950,000",
    location: "Airport, Karachi",
  },

  // ... same array you provided
];

export default function BrowseCarsPage() {
  const [search, setSearch] = useState("");

  const filteredCars = Cars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 drop-shadow-md">
        Browse Available Cars
      </h1>

      {/* Search Box */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="search"
          placeholder="Search by model name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
          aria-label="Search cars by model name"
        />
      </div>

      {/* Cars Grid - Always 2 Cards Per Row */}
      <section
        aria-label="Available cars list"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} {...car} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No cars found matching your search.
          </p>
        )}
      </section>
    </main>
  );
}
