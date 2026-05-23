"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 5200 },
    { month: "Mar", revenue: 6800 },
    { month: "Apr", revenue: 7500 },
    { month: "May", revenue: 9200 },
    { month: "Jun", revenue: 12400 },
];

export default function RevenueChart() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md h-[350px]">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                    Revenue Overview
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                    Startup consulting revenue growth
                </p>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={data}>

                    <XAxis
                        dataKey="month"
                        stroke="#64748b"
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#06b6d4"
                        strokeWidth={4}
                        dot={{
                            r: 6,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}