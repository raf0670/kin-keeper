"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import HomeIcon from '../../assets/HomeIcon.png';
import TimelineIcon from '../../assets/TimelineIcon.png';
import StatsIcon from '../../assets/StatsIcon.png';

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/", img: HomeIcon},
        { name: "Timeline", href: "/timeline", img: TimelineIcon},
        { name: "Stats", href: "/stats", img: StatsIcon},
    ];

    const path = usePathname();

    const renderLinks = () => {
        return navLinks.map((link) => {
            const isActive = path === link.href;

            return (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={isActive ? "bg-[#244D3F] text-white font-bold" : "text-gray-600 flex gap-1 items-center font-bold"}
                    >
                        <span><Image src={link.img} width={16} height={16} alt=""></Image></span>
                        {link.name}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className="bg-base-100 shadow-sm">
            <div className='w-11/12 md:w-10/12 mx-auto navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {renderLinks()}
                        </ul>
                    </div>
                    <Link href={"/"}><h1 className={`text-3xl`}><span className='text-[#1F2937] font-bold'>Keen</span><span className='font-semibold text-[#244D3F]'>Keeper</span></h1></Link>
                </div>
                {/* <div className="navbar-center">
                </div> */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {renderLinks()}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;