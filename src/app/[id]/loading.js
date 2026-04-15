import React from 'react';

const LoadingDetail = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>

            <p className="text-gray-500 font-medium animate-pulse">
                Fetching your friend...
            </p>
        </div>
    );
};

export default LoadingDetail;