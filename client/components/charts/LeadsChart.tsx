"use client";

import { useEffect, useState } from "react";

import { API } from "@/lib/api";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
} from "recharts";

type GrowthData = {
    month: number;
    leads: number;
};

export default function LeadsChart() {
    const [data, setData] = useState<
        GrowthData[]
    >([]);

    useEffect(() => {
        fetchGrowth();
    }, []);

    const fetchGrowth = async () => {
        try {
            const res = await API.get(
                "/analytics/leads-growth"
            );

            setData(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md h-[350px]">

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                    Lead Growth
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                    Monthly startup onboarding analytics
                </p>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>

                    <defs>
                        <linearGradient
                            id="colorLeads"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#3b82f6"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#3b82f6"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="month"
                        stroke="#64748b"
                    />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="leads"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorLeads)"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}