"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8 p-10 rounded-3xl bg-[#244D3F] shadow-2xl border border-[#2d5d4d]">

                {/* Icon Section */}
                <div className="flex justify-center">
                    <div className="bg-[#1f4236] p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15.332c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-white">Oops! Something went wrong</h2>
                    <p className="text-emerald-100/80">
                        We encountered an unexpected error while loading this page. Don&apos;t worry, it&apos;s not your fault.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => reset()}
                        className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-[#1F2937] font-bold px-8"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8"
                    >
                        Back Home
                    </Link>
                </div>

                {/* Error ID or Detail (Optional/Subtle) */}
                <p className="text-xs text-emerald-900/40 pt-4 uppercase tracking-widest">
                    Error Boundary Triggered
                </p>
            </div>
        </div>
    );
}