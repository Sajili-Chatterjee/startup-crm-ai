"use client";

import { useAuth } from "@/context/AuthContext";

import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
    const { user, logout } = useAuth();

    const router = useRouter();

    const handleLogout = () => {
        logout();

        router.push("/login");
    };

    return (
        <div className="absolute right-0 top-16 w-72 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 z-50">

            <div className="text-center">

                <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                    {user?.name?.charAt(0)}
                </div>

                <h2 className="text-xl font-bold text-slate-900 mt-4">
                    {user?.name}
                </h2>

                <p className="text-slate-500 mt-1">
                    {user?.email}
                </p>
            </div>

            <button
                onClick={handleLogout}
                className="w-full mt-6 bg-red-500 text-white rounded-2xl py-3 font-semibold"
            >
                Logout
            </button>
        </div>
    );
}