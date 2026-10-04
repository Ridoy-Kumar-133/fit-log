"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import footerlogo from "@/app/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GymContext } from "../gryComtext";

const Navbar = () => {
    const pathname = usePathname();

    const { todaysPlan, saveLater } = useContext(GymContext);

    const links = (
        <>
            <div className="flex gap-2">
                <li>
                    <Link
                        href="/"
                        className={`font-semibold px-3 py-2 rounded-3xl text-[10px] ${
                            pathname === "/"
                                ? "bg-[#C2F800]/15 text-lime-400"
                                : "text-gray-400"
                        }`}
                    >
                        Workouts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/myPlan"
                        className={`font-semibold px-3 py-2 rounded-3xl text-[10px] ${
                            pathname === "/myPlan"
                                ? "bg-[#C2F800]/15 text-lime-400"
                                : "text-gray-400"
                        }`}
                    >
                        My Plan
                    </Link>
                </li>
            </div>
        </>
    );

    return (
        <div className="border-b border-gray-500 sm:flex items-center justify-center">
            <div className="bg-black text-white flex flex-col sm:flex-row items-center w-[90%] m-auto py-4">
                <div className="flex items-center">
                    <div className="sm:flex">
                        <div className="mx-3">
                            <Image src={footerlogo} alt="img"></Image>
                        </div>
                        <div>
                            <h4 className="font-oswald">FITLOG</h4>
                        </div>
                    </div>
                </div>

               <div className="mt-4 sm:mt-0 list-none sm:absolute sm:left-1/2 sm:-translate-x-1/2">
    {links}
</div>

                <div className="flex gap-4 items-center sm:ml-auto mt-4 sm:mt-0">
                    <div className="flex gap-1 justify-center items-center">
                        <p>Plan</p>
                        <button className="bg-[#C2F800] w-5 h-5 rounded-full text-black text-xs font-bold">
                            {todaysPlan.length}
                        </button>
                    </div>

                    <div className="flex gap-1 justify-center items-center ml-2">
                        <p>Saved</p>
                        <button className="bg-gray-700 w-5 h-5 rounded-full text-white text-xs font-bold">
                            {saveLater.length}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
