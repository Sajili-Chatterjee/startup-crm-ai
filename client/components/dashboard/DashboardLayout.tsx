"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { useAuth } from "@/context/AuthContext";

import { useRouter } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { logout } = useAuth();

    const router = useRouter();

    const handleLogout = () => {
        logout();

        router.push("/login");
    };

    return (
        <div className="flex min-h-screen bg-slate-100">

            <Sidebar />

            <div className="ml-72 w-full">

                <Navbar />

                <main className="p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}