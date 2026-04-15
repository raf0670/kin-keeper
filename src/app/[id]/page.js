import React from 'react';
import friends from "../../../public/friends.json";
import DetailFriend from '@/components/detailFriend/DetailFriend';

const FriendInfo = async ({ params }) => {
    const res = await params;
    const id = res.id;
    // console.log(id);

    const friend = friends.find(individual => {
        if (individual.id == id) return individual;
    });
    // console.log(friend);
    
    
    return (
        <div className='sm:w-10/12 w-11/12 mx-auto'>
            <DetailFriend friend={friend}></DetailFriend>
        </div>
    );
};

export default FriendInfo;