import StatsCard from '@/components/stats/StatsCard';
import StatsHeader from '@/components/stats/StatsHeader';
import React from 'react';

const Stats = () => {
    return (
        <div className='sm:mt-16 sm:mb-16 py-2 w-11/12 sm:w-10/12 mx-auto space-y-10'>
            <StatsHeader></StatsHeader>
            <StatsCard></StatsCard>
        </div>
    );
};

export default Stats;