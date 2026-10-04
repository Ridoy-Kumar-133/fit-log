import Image from "next/image";
import Link from "next/link";
import SetMartForToday from "./setMartFotToday";
import TodaysButton from "./TodaysButton";



const SelectedCardForTodaysPlan = ({ data }) => {

    const {
        id,
        name,
        image,
        equipment,
        duration,
        caloriesBurned,
        rating
    } = data;

    return (
        <div className="w-full bg-[#15171d] border border-gray-800 rounded-xl p-3 flex items-center gap-4 my-4">

            {/* Image */}
            <div className="relative w-24 h-16 shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="96px"
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Workout Information */}
            <div className="flex-1">

                <h2 className="font-bold text-sm uppercase">
                    {name}
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                    {equipment}
                </p>

                <div className="flex gap-4 text-xs text-gray-400 mt-2">

                    <span>
                        ◷ {duration} min
                    </span>

                    <span>
                        🔥 {caloriesBurned} kcal
                    </span>

                    <span className="text-lime-400">
                        ☆ {rating}
                    </span>

                </div>

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">

               <Link
               href={`/cardsDetails/${id}`}
               >
                 <button className="border border-gray-700 rounded-full px-4 py-2 text-xs">
                    View Details
                </button>
               </Link>

               <SetMartForToday key={data.id} data={data} ></SetMartForToday>

                <TodaysButton data={data}></TodaysButton>

            </div>

        </div>
    );
};

export default SelectedCardForTodaysPlan;