import Link from "next/link";
import React from "react";
import footerlogo from "@/app/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className="font-semibold  px-3 py-2 rounded-3xl bg-[#C2F800]/15 text-lime-400 text-[10px]"
                >
                    Workouts
                </Link>
            </li>
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

                <div className="mt-4 sm:mt-0  list-none">{links}</div>

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
