import React from 'react';

const TimelineLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
            
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            
            <div className="text-center">
                <p className="text-gray-500 font-medium">Loading Timeline...</p>
                <p className="text-gray-300 text-xs uppercase tracking-widest mt-1">KeenKeeper</p>
            </div>
        </div>
    );
};

export default TimelineLoading;