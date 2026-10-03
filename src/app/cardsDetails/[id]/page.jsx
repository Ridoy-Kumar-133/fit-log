import React from "react";
import Image from "next/image";

const getPromiseSingle = async (id) => {
    try {
        const res = await fetch(
            `https://api.api-store.workers.dev/api/fitlog/${id}`,
        );
        return await res.json();
    } catch (error) {
        throw new Error("Didn't get single data");
    }
};

const CardDetail = async ({ params }) => {
    const { id } = await params;

    const data = await getPromiseSingle(id);

    const {
        name,
        image,
        muscleGroups,
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions,
    } = data;

    return (
        <div className="w-[90%] mx-auto py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="relative w-full h-175">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div>
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="text-gray-400 mt-3">{description}</p>

                    <div className="flex gap-2 mt-5">
                        {muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="bg-[#15171d] border border-gray-800 rounded-xl mt-6">
                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">
                                EQUIPMENT
                            </span>
                            <span>{equipment}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">
                                DIFFICULTY
                            </span>
                            <span>{difficulty}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">SETS</span>
                            <span>{sets}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">REPS</span>
                            <span>{reps}</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">
                                DURATION
                            </span>
                            <span>{duration} min</span>
                        </div>

                        <div className="flex justify-between p-4 border-b border-gray-800">
                            <span className="text-xs text-gray-400">
                                CALORIES
                            </span>
                            <span>{caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between p-4">
                            <span className="text-xs text-gray-400">
                                RATING
                            </span>
                            <span>☆ {rating}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-4">INSTRUCTIONS</h2>

                        <div className="space-y-3">
                            {instructions.map((instruction, index) => (
                                <div
                                    key={index}
                                    className="flex gap-3 text-sm text-gray-400"
                                >
                                    <span>{index + 1}.</span>
                                    <p>{instruction}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-7">
                        <button className="btn bg-[#C2F800] text-black border-none">
                            Add to today&apos;s plan
                        </button>

                        <button className="btn btn-outline">
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
