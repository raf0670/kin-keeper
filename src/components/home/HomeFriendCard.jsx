import Image from 'next/image';
import React from 'react';

const statusColors = {
    "on-track": "bg-green-500",
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-500"
};

const HomeFriendCard = ({ friend }) => {
    const { tags, status, days_since_contact, name, picture } = friend;
    return (
        <div className='p-10 bg-white rounded-lg shadow-md flex flex-col gap-2 justify-center items-center'>
            <Image src={picture} alt='' width={80} height={80} className='rounded-full'></Image>

            <h1 className='font-semibold text-2xl grow'>{name}</h1>

            <p className='text-[#64748B]'>{days_since_contact}d ago</p>

            <div className='flex gap-2 font-semibold justify-center items-center'>
                {
                    tags.map((tag, idx) => {
                        return (
                            <div key={idx} className='rounded-4xl bg-[#CBFADB] pb-0.5 px-2'>
                                <p>{tag}</p>
                            </div>
                        );
                    })
                }
            </div>

            <p className={`text-white px-3 badge badge-sm pb-0.5 font-semibold rounded-full ${statusColors[status]}`}>{status}</p>
        </div>
    );
};

export default HomeFriendCard;