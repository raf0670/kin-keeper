import Image from 'next/image';
import React from 'react';

const HomeFriendCard = ({ friend }) => {
    const { tags, status, days_since_contact, name, picture } = friend;
    return (
        <div className='p-10 bg-white rounded-lg shadow-md flex flex-col gap-2 justify-center items-center'>
            <Image src={picture} alt='' width={80} height={80} className='rounded-full'></Image>

            <h1 className='font-semibold text-2xl grow'>{name}</h1>

            <p className='text-[#64748B]'>{days_since_contact}d ago</p>

            <div className='flex gap-2 font-semibold justify-center items-center'>
                {
                    tags.map(tag => {
                        return (
                            <div key={friend.id} className='badge badge-xs bg-[#CBFADB] pt-2 pb-2.5'>
                                ${tag}
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
};

export default HomeFriendCard;