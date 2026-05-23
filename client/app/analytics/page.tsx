"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import KPICards from "@/components/dashboard/KPICards";

import LeadsChart from "@/components/charts/LeadsChart";

import PieAnalytics from "@/components/charts/PieAnalytics";

import FunnelAnalytics from "@/components/charts/FunnelAnalytics";

export default function AnalyticsPage() {
    return (
        <ProtectedRoute>
            <DashboardLayout>

                <div className="space-y-10">

                    <div>
                        <h1 className="text-5xl font-bold text-slate-900">
                            Analytics Overview
                        </h1>

                        <p className="text-slate-500 mt-3 text-lg">
                            Monitor startup growth, CRM funnel performance, and investor readiness analytics.
                        </p>
                    </div>

                    <KPICards />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                        <LeadsChart />

                        <PieAnalytics />

                    </div>

                    <FunnelAnalytics />

                    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">

                        <h2 className="text-2xl font-bold text-slate-900">
                            Strategic Insights
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Lead Acquisition
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    Startup onboarding activity continues to increase steadily across SaaS and fintech sectors.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Funnel Optimization
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    Discovery-call conversion rates indicate strong early-stage founder engagement.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Investor Readiness
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    Investor-ready startup ratios can improve further through AI-guided operational insights.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </DashboardLayout>
        </ProtectedRoute>
    );
}