import React from 'react';
import Image from 'next/image';

const LibrarysCard = ({ data }) => {

  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating
  } = data;


  return (
    <div className="bg-[#15171d] rounded-xl overflow-hidden border border-gray-800">

      {/* Image */}
      <div className="w-full h-45 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="flex gap-2 mb-3">
          {muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-[#C2F800] text-black text-[10px] font-bold px-3 py-1 rounded-full"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-lg font-bold uppercase">
          {name}
        </h2>

        {/* Equipment */}
        <p className="text-sm text-gray-400 mt-1">
          {equipment}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Information */}
        <div className="flex items-center gap-4 text-xs text-gray-400">

          <p>
            ◷ {duration} min
          </p>

          <p>
            ● {caloriesBurned} kcal
          </p>

          <p>
            ☆ {rating}
          </p>

        </div>

      </div>

    </div>
  );
};

export default LibrarysCard;