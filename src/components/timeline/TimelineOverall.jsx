"use client";
import Interaction from '@/components/timeline/Interaction';
import { useTimeline } from '@/components/timeline/TimelineContext';
import TimelineHeader from '@/components/timeline/TimelineHeader';
import React, { useState } from 'react';

const TimelineOverall = () => {
    const { interactions } = useTimeline();
    // console.log(interactions);
    const [filter, setFilter] = useState("All");

    const legalEntries = filter === "All"
        ? interactions
        : interactions.filter(interaction => interaction.type === filter);

    return (
        <div className='sm:mt-16 sm:mb-16 py-2 space-y-4 w-11/12 sm:w-10/12 mx-auto'>
            <TimelineHeader setFilter={setFilter}></TimelineHeader>
            <div className='flex flex-col gap-4'>
                {
                    legalEntries.map((interaction, idx) => <Interaction key={idx} interaction={interaction}></Interaction>)
                }
            </div>
        </div>
    );
};

export default TimelineOverall;