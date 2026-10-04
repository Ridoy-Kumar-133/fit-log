"use client";
import React, { useContext, useState } from "react";
import EmptyState from "../shareComponents/EmptyState";
import { GymContext } from "../gryComtext";
import SelectedCardForTodaysPlan from "../components/selectedCardForTodaysPlan";
import SelectedCardForSaveLater from "../components/selectedCardForSave";

const MyPlanPage = () => {
    const { todaysPlan, saveLater } = useContext(GymContext);

    const [activeTab, setActiveTab] = useState("today");
    const [sortby, setSortby] = useState("duration"); 

    const sortCards = (datas) =>{
        const sortedDatas = [...datas];
        if(sortby === 'duration'){
            sortedDatas.sort( (a,b) => b.duration - a.duration );
        }else if(sortby === 'calories'){
           sortedDatas.sort( (a,b) => b.caloriesBurned - a.caloriesBurned )
        }else if(sortby === 'rating'){
            sortedDatas.sort( (a,b) => b.rating - a.rating )
        }
        return sortedDatas;
    }

    const sortedTodaysPlan = sortCards(todaysPlan);
    const sortedSaveLater = sortCards(saveLater);
    

    const selectedData = activeTab === "today" ? todaysPlan : saveLater;

    const totalExercise = selectedData.length;
    const totalMinutes = selectedData.reduce(
        (total, item) => total + item.duration,
        0,
    );
    const totaCalories = selectedData.reduce(
        (total, item) => total + item.caloriesBurned,
        0,
    );

    return (
        <div>
            <div className="w-[90%] m-auto my-12">
                <h1 className="font-bold text-2xl">MY PLAN</h1>
                <span className="text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </span>
            </div>

            {/* Calculate content */}
            <div className="w-[90%] h-40 p-5 rounded-2xl bg-[#0a0b0f]  m-auto flex justify-evenly">
                <div className="w-[33%] flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Exercise</p>
                    <h1 className="text-[#CCFF00] text-3xl font-bold">
                        {totalExercise}
                    </h1>
                </div>

                <div className="w-[33%]  flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Minutes</p>
                    <h1 className="text-3xl font-bold">{totalMinutes}</h1>
                </div>

                <div className="w-[34%]  flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Calories</p>
                    <h1 className="text-3xl font-bold">{totaCalories}</h1>
                </div>
            </div>

            <div className="w-[90%] m-auto flex justify-center items-center my-5">
                <select
                    value={sortby}
                    onChange={ (e) => setSortby( e.target.value) }
    
                    className="select select-success"
                >
                    <option disabled={true}>Sort by</option>
                    <option value={'duration'}>Duration</option>
                    <option value={'calories'}>Calories</option>
                    <option value={'rating'}>Rating</option>
                    
                </select>
            </div>




            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box w-[90%] m-auto my-6 bg-[#010101]">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab rounded-xl w-32"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => setActiveTab("today")}
                />
                <div className="tab-content border-base-300 p-6 bg-[#060607]">
                    {sortedTodaysPlan.length === 0 ? (
                        <EmptyState></EmptyState>
                    ) : (
                        <div className="">
                            {sortedTodaysPlan.map((data) => (
                                <SelectedCardForTodaysPlan
                                    key={data.id}
                                    data={data}
                                ></SelectedCardForTodaysPlan>
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab rounded-xl w-32"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}
                />
                <div className="tab-content bg-[#060607] border-base-300 p-6">
                    {sortedSaveLater.length === 0 ? (
                        <EmptyState></EmptyState>
                    ) : (
                        <div className="">
                            {sortedSaveLater.map((data) => (
                                <SelectedCardForSaveLater
                                    key={data.id}
                                    data={data}
                                ></SelectedCardForSaveLater>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;
