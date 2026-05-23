"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICards from "@/components/dashboard/KPICards";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import LeadsChart from "@/components/charts/LeadsChart";
import RevenueChart from "@/components/charts/RevenueChart";
import PieAnalytics from "@/components/charts/PieAnalytics";
import FunnelAnalytics from "@/components/charts/FunnelAnalytics";
import { generateReport } from "@/lib/generateReport";
export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <DashboardLayout>

                <section id="dashboard-content" className="space-y-10">

                    {/* HEADER */}
                    <div className="flex items-center justify-between flex-wrap gap-5">

                        <div>
                            <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
                                Startup CRM Dashboard
                            </h1>

                            <p className="text-slate-500 mt-3 text-lg">
                                Monitor startup operations, analytics, and founder engagement.
                            </p>
                        </div>

                        <button
                            onClick={() => generateReport()}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:scale-105 transition"
                        >
                            Generate Report
                        </button>
                    </div>

                    {/* KPI CARDS */}
                    <KPICards />

                    {/* MAIN ANALYTICS */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                        <LeadsChart />

                        <RevenueChart />
                    </div>

                    {/* SECONDARY ANALYTICS */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                        <PieAnalytics />

                        <FunnelAnalytics />
                    </div>

                    {/* AI INSIGHTS */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">

                        <div className="flex items-center justify-between flex-wrap gap-4">

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    AI Insights
                                </h2>

                                <p className="text-slate-500 mt-2">
                                    AI-generated startup performance analysis.
                                </p>
                            </div>

                            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:scale-105 transition">
                                View Full Analytics
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Lead Growth
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    Startup onboarding increased significantly this month with higher founder engagement.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Investor Readiness
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    SaaS startups currently demonstrate the strongest investor readiness pipeline.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">

                                <h3 className="font-semibold text-slate-900">
                                    Funnel Performance
                                </h3>

                                <p className="text-slate-500 mt-3 leading-7">
                                    Conversion rates improved after discovery call optimization and onboarding automation.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </DashboardLayout>
        </ProtectedRoute>
    );
}