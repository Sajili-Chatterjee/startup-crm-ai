"use client";

import { useEffect, useState } from "react";

import { API } from "@/lib/api";

type FunnelData = {
    _id: string;
    count: number;
};

export default function FunnelAnalytics() {
    const [data, setData] = useState<
        FunnelData[]
    >([]);

    useEffect(() => {
        fetchFunnel();
    }, []);

    const fetchFunnel = async () => {
        try {
            const res = await API.get(
                "/analytics/funnel"
            );

            setData(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                    Conversion Funnel
                </h2>

                <p className="text-slate-500 mt-2">
                    Startup onboarding progression
                </p>
            </div>

            <div className="space-y-5">

                {data.map((item, index) => (
                    <div key={index}>

                        <div className="flex justify-between mb-2">

                            <span className="font-medium text-slate-700">
                                {item._id}
                            </span>

                            <span className="text-slate-500">
                                {item.count}
                            </span>
                        </div>

                        <div className="w-full bg-slate-100 rounded-full h-4">

                            <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full"
                                style={{
                                    width: `${item.count * 20}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}