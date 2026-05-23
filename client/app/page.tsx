"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <h1 className="text-3xl font-bold text-slate-700">
                Redirecting...
            </h1>
        </div>
    );
}