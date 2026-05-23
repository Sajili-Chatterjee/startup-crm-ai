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

                <div className="flex justify-end px-10 pt-6">

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-2xl font-semibold transition"
                    >
                        Logout
                    </button>
                </div>

                <main className="p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}