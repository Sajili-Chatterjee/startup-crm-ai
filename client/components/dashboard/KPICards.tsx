"use client";

import { useEffect, useState } from "react";

import { API } from "@/lib/api";

type KPIData = {
    totalLeads: number;
    investorReady: number;
    clients: number;
    conversionRate: number;
};

export default function KPICards() {
    const [data, setData] =
        useState<KPIData | null>(null);

    useEffect(() => {
        fetchKPIs();
    }, []);

    const fetchKPIs = async () => {
        try {
            const res = await API.get(
                "/analytics/kpis"
            );

            setData(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    const cards = [
        {
            title: "Total Leads",
            value: data?.totalLeads || 0,
        },

        {
            title: "Investor Ready",
            value: data?.investorReady || 0,
        },

        {
            title: "Clients",
            value: data?.clients || 0,
        },

        {
            title: "Conversion Rate",
            value: `${data?.conversionRate || 0}%`,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md"
                >
                    <p className="text-slate-500 text-sm">
                        {card.title}
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 mt-4">
                        {card.value}
                    </h2>
                </div>
            ))}
        </div>
    );
}