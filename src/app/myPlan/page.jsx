import React from "react";

const MyPlanPage = () => {
    return (
        <div>
            <div className="w-[90%] m-auto my-12">
                <h1 className="font-bold text-2xl">MY PLAN</h1>
                <span className="text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </span>
            </div>

            {/* Calculate content */}
            <div className="w-[90%] h-40 p-5 rounded-2xl bg-[#13161D] m-auto flex justify-evenly">
                <div className="w-[33%] flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Exercise</p>
                    <h1 className="text-[#CCFF00] text-3xl font-bold">10</h1>
                </div>

                <div className="w-[33%]  flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Minutes</p>
                    <h1 className="text-3xl font-bold">10</h1>
                </div>

                <div className="w-[34%]  flex flex-col justify-center items-center">
                    <p className="text-[#8A92A0] my-1">Calories</p>
                    <h1 className="text-3xl font-bold">10</h1>
                </div>
            </div>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box w-[90%] m-auto my-6">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab rounded-xl w-32"
                    aria-label="Today's Plan"
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    Tab content 1
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab rounded-xl w-32"
                    aria-label="Saved"
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    Tab content 2
                </div>

        
            </div>
        </div>
    );
};

export default MyPlanPage;
