"use client";
import React from 'react';
import { useTimeline } from '../timeline/TimelineContext';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatsCard = () => {
    const { interactions } = useTimeline();

    const data = [
        { name: 'Text', value: interactions.filter(i => i.type === 'Text').length },
        { name: 'Call', value: interactions.filter(i => i.type === 'Call').length },
        { name: 'Video', value: interactions.filter(i => i.type === 'Video').length },
    ];

    const colors = ['#7C3AED', '#2D4A3E', '#63A36C'];

    return (
        <div className="bg-white p-8 pb-20 rounded-2xl shadow-sm border border-gray-100 w-full h-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">By Interaction Type</h3>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="45%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={8}
                        cornerRadius={10}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        iconSize={10}
                        formatter={(value) => <span className="text-gray-500 font-medium ml-2">{value}</span>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatsCard;