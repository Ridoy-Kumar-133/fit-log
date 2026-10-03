import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LibrarysCard = ({ data }) => {
  

  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating} = data;


  return (
    <Link href={`/cardsDetails/${id}`}>
    <div className="bg-[#15171d] rounded-xl overflow-hidden border border-gray-800">

      <div className="w-full h-45 relative">
        <Image
          src={image}
          alt={name}
          sizes='...'
           fill
          className="w-full h-full object-fill"
        />
      </div>

      
      <div className="p-5">

        
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

        <h2 className="text-lg font-bold uppercase">
          {name}
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          {equipment}
        </p>

        
        <div className="border-t border-gray-800 my-4"></div>

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
    </Link>
  );
};

export default LibrarysCard;