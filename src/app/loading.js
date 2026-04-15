import React from 'react';

const HomeLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">

            <h2 className="text-3xl font-bold text-[#244D3F]/20 mb-8 animate-pulse">
                KeenKeeper
            </h2>

            <div className="flex flex-col items-center gap-6">
                <span className="loading loading-dots loading-lg text-[#244D3F]"></span>
                
                <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                        Loading your friends
                    </p>
                    <progress className="progress progress-success w-56 bg-gray-100"></progress>
                </div>
            </div>
        </div>
    );
};

export default HomeLoading;