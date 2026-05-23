"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { API } from "@/lib/api";

import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
    const router = useRouter();

    const { login } = useAuth();

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: "",
        });

    const [loading, setLoading] =
        useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await API.post(
                "/auth/signup",
                formData
            );

            login(
                res.data.token,
                res.data.user
            );

            router.push("/dashboard");

        } catch (error) {
            console.log(error);

            alert("Signup failed");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">

            <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-slate-200">

                <h1 className="text-4xl font-bold text-slate-900">
                    Create Account
                </h1>

                <p className="text-slate-500 mt-3">
                    Start managing your startup CRM.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 mt-8"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-4 font-semibold hover:scale-[1.02] transition"
                    >
                        {loading
                            ? "Creating..."
                            : "Create Account"}
                    </button>
                </form>

                <p className="text-sm text-slate-500 mt-6 text-center">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-500 font-medium"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}