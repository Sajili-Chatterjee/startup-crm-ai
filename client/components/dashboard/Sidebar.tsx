"use client";

import Link from "next/link";

import {
    LayoutDashboard,
    Users,
    Bot,
    BarChart3,
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        name: "CRM",
        icon: Users,
        href: "/crm",
    },
    {
        name: "AI Assistant",
        icon: Bot,
        href: "/assistant",
    },
    {
        name: "Analytics",
        icon: BarChart3,
        href: "/analytics",
    },
];

export default function Sidebar() {
    return (
        <aside className="h-screen w-72 bg-white/70 backdrop-blur-xl border-r border-slate-200 fixed p-6 flex flex-col justify-between shadow-xl">
            <div>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        VenturePilot
                    </h1>

                    <p className="text-sm text-slate-500 mt-2">
                        Startup Operations Platform
                    </p>
                </div>

                <nav className="space-y-3">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-4 p-4 rounded-2xl text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 group"
                            >
                                <Icon
                                    size={22}
                                    className="group-hover:scale-110 transition"
                                />

                                <span className="font-medium">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-lg">
                <h3 className="font-semibold text-lg">
                    AI Assistant
                </h3>

                <p className="text-sm opacity-90 mt-2">
                    Ask startup compliance and fundraising questions instantly.
                </p>
            </div>
        </aside>
    );
}