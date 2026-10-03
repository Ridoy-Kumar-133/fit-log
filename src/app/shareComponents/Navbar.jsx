"use client";
import Link from "next/link";
import React, { useState } from "react";
import footerlogo from "@/app/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    console.log(pathname);

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
            <div className="bg-black text-white flex flex-col navbar  shadow-sm relative sm:flex-row w-[90%] m-auto">
                <div className="navbar-start">
                    <div className="sm:flex">
                        <div className="mx-3">
                            <Image src={footerlogo} alt="img"></Image>
                        </div>
                        <div>
                            <h4>FITLOG</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-4 sm:mt-0 w-75   list-none">{links}</div>

                <div>
                    <div></div>
                    <div></div>
                </div>

                <div className="navbar-end"></div>
            </div>
        </div>
    );
};

export default Navbar;
