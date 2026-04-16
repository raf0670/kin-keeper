"use client";
import React from 'react';
import HomeStatCard from './HomeStatCard';
import friends from "../../../public/friends.json";
import HomeFriendCard from './HomeFriendCard';
import Link from 'next/link';
import { useTimeline } from '../timeline/TimelineContext';
// const promise = async() => {
//     const res = await fetch("/friends.json");
//     return res.json();
// };

const HomePage = () => {
    // console.log(friends);
    const onTrackCount = friends.filter(friend => friend.status === "on-track").length;
    const overdueCount = friends.filter(friend => friend.status === "overdue").length;

    const { interactions } = useTimeline();

    return (
        <div className='text-center w-11/12 sm:w-10/12 mx-auto mt-20'>
            <div className='space-y-8'>
                <h1 className='font-bold text-6xl'>Friends to keep close in your life</h1>
                <p className='text-[#64748B] max-w-xl mx-auto leading-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white font-semibold'>+ Add a Friend</button>
            </div>

            <div className='py-8 border-b mb-8 border-b-gray-200 flex flex-wrap gap-5 justify-center items-center'>
                <HomeStatCard number={friends.length} text={"Total Friends"}></HomeStatCard>
                <HomeStatCard number={onTrackCount} text={"On Track"}></HomeStatCard>
                <HomeStatCard number={overdueCount} text={"Need Attention"}></HomeStatCard>
                <HomeStatCard number={interactions.length} text={"Interactions This Month"}></HomeStatCard>
            </div>

            <h2 className='font-semibold text-start text-2xl mb-6'>Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20'>
                {
                    friends.map(friend => {
                        return <Link key={friend.id} href={`/${friend.id}`}><HomeFriendCard friend={friend}></HomeFriendCard></Link>
                    })
                }
            </div>
        </div>
    );
};

export default HomePage;