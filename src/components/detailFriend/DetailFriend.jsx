import Image from 'next/image';
import React from 'react';
import { FaArchive, FaBell, FaPhoneAlt, FaRegCommentDots, FaTrashAlt, FaVideo } from 'react-icons/fa';

const statusColors = {
    "on-track": "bg-green-500",
    "overdue": "bg-red-500",
    "almost due": "bg-yellow-500"
};

const DetailFriend = ({ friend }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 lg:mt-20">

            <aside className="lg:col-span-4 space-y-6">

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full mx-auto">
                            <Image width={80} height={80} src={friend.picture} alt={friend.name} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
                    <div className="flex flex-col items-center gap-2 mt-2">
                        <span className={`badge ${statusColors[friend.status]} text-white font-semibold uppercase text-xs p-3`}>
                            {friend.status}
                        </span>
                        <div className='flex gap-2 font-semibold justify-center items-center'>
                            {
                                friend.tags.map((tag, idx) => {
                                    return (
                                        <div key={idx} className='rounded-4xl bg-[#CBFADB] pb-0.5 px-2'>
                                            <p>{tag}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <p className="mt-4 italic text-gray-500">{friend.bio}</p>
                    <p className="text-sm text-gray-400 mt-2">Preferred: {friend.email}</p>
                </div>

                <div className="space-y-3">
                    <button className="btn bg-white shadow-sm w-full justify-start gap-3 rounded-sm normal-case">
                        <FaBell /> Snooze 2 Weeks
                    </button>
                    <button className="btn bg-white shadow-sm w-full justify-start gap-3 rounded-sm normal-case">
                        <FaArchive /> Archive
                    </button>
                    <button className="btn bg-white shadow-sm w-full justify-start gap-3 rounded-sm normal-case bg-transparent hover:bg-red-50">
                        <FaTrashAlt /> Delete
                    </button>
                </div>
            </aside>

            <main className="lg:col-span-8 space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <h4 className="text-4xl font-bold text-[#244D3F]">{friend.days_since_contact}</h4>
                        <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <h4 className="text-4xl font-bold text-[#244D3F]">{friend.goal}</h4>
                        <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <h4 className="text-4xl font-bold text-[#244D3F] leading-tight">{friend.next_due_date}</h4>
                        <p className="text-gray-500 text-sm mt-1">Next Due</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-[#244D3F]">Relationship Goal</h3>
                        <p className="mt-2 text-gray-600">Connect every <span className="font-bold">30 days</span></p>
                    </div>
                    <button className="btn btn-ghost border border-gray-200 px-6 rounded-lg">Edit</button>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button className="flex flex-col items-center justify-center p-8 border border-gray-200 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                            <FaPhoneAlt className="text-2xl mb-2 text-gray-700 group-hover:text-[#244D3F]" />
                            <span className="font-medium text-gray-700">Call</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-8 border border-gray-200 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                            <FaRegCommentDots className="text-2xl mb-2 text-gray-700 group-hover:text-[#244D3F]" />
                            <span className="font-medium text-gray-700">Text</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-8 border border-gray-200 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                            <FaVideo className="text-2xl mb-2 text-gray-700 group-hover:text-[#244D3F]" />
                            <span className="font-medium text-gray-700">Video</span>
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default DetailFriend;