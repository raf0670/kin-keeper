import TimelineOverall from '@/components/timeline/TimelineOverall';
import React from 'react';

export const metadata = {
  title: "Keen Keeper | Timeline",
  description: "The ultimate friend zone!",
};

const Timeline = () => {
    return (
        <div>
            <TimelineOverall></TimelineOverall>
        </div>
    );
};

export default Timeline;