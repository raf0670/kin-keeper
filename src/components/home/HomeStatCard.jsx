import React from 'react';

const HomeStatCard = ({ number, text }) => {
    return (
        <div className='bg-white text-center shadow-md rounded-xl py-10 px-10 min-w-3xs'>
            <h2 className='text-[#244D3F] text-3xl font-bold'>{number}</h2>
            <p className='text-[#64748B]'>{text}</p>
        </div>
    );
};

export default HomeStatCard;