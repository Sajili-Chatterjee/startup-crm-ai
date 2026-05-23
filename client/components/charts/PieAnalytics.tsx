"use client";

import { useEffect, useState } from "react";

import { API } from "@/lib/api";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

type CategoryData = {
    name: string;
    value: number;
};

const COLORS = [
    "#3b82f6",
    "#06b6d4",
    "#8b5cf6",
    "#14b8a6",
];

export default function PieAnalytics() {
    const [data, setData] = useState<
        CategoryData[]
    >([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await API.get(
                "/analytics/categories"
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
                    Startup Categories
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                    Distribution of startup domains
                </p>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <PieChart>

                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={
                                    COLORS[
                                    index % COLORS.length
                                    ]
                                }
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}