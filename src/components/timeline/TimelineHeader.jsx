import Image from 'next/image';
import React from 'react';
import DownArrow from "../../assets/DownArrow.png";

const TimelineHeader = ({ setFilter }) => {
    return (
        <div className='space-y-4'>
            <h1 className='text-5xl font-bold'>Timeline</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-center text-gray-500">Filter Timeline <Image src={DownArrow} width={12} height={8} alt=''></Image></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 gap-2 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={() => setFilter("All")} className=''>All</button></li>
                    <li><button onClick={() => setFilter("Call")} className=''>Call</button></li>
                    <li><button onClick={() => setFilter("Text")} className=''>Text</button></li>
                    <li><button onClick={() => setFilter("Video")} className=''>Video</button></li>
                </ul>
            </div>
        </div>
    );
};

export default TimelineHeader;