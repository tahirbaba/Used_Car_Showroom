'use client';

import Image from "next/image";
import React from "react";

interface CarCardProps {
  id: string;
  image: string;
  model: string;
  year: number;
  mileage: string;
  color: string;
  price: string;
  location: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  image,
  model,
  year,
  mileage,
  color,
  price,
  location,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden w-full">
      
      {/* Car Image */}
      <div className="relative w-full h-[300px] overflow-hidden rounded-t-3xl group cursor-pointer">
        <Image
          src={image}
          alt={model}
          fill
          sizes="100%"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-3xl"></div>
      </div>

      {/* Car Details */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between">
          {model} 
          <span className="text-gray-500 text-sm">({year})</span>
        </h3>

        <ul className="text-sm text-gray-600 space-y-1">
          <li><span className="font-semibold">Mileage:</span> {mileage}</li>
          <li><span className="font-semibold">Color:</span> {color}</li>
          <li><span className="font-semibold">Location:</span> {location}</li>
        </ul>

        <div className="pt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-700">Rs. {price}</span>
          <a
            href={`/car/${id}`}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
