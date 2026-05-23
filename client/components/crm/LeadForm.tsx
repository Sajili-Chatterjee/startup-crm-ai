"use client";

import { useState } from "react";

import { API } from "@/lib/api";

import toast from "react-hot-toast";

export default function LeadForm({
    refreshLeads,
}: {
    refreshLeads: () => void;
}) {
    const [formData, setFormData] = useState({
        companyName: "",
        founderName: "",
        email: "",
        startupStage: "",
        servicesInterested: "",
    });

    const [loading, setLoading] = useState(false);

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

            await API.post("/leads", formData);

            toast.success("Lead added successfully");

            setFormData({
                companyName: "",
                founderName: "",
                email: "",
                startupStage: "",
                servicesInterested: "",
            });

            refreshLeads();
        } catch (error) {
            toast.error("Failed to add lead");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md">

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Add New Lead
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="founderName"
                    placeholder="Founder Name"
                    value={formData.founderName}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="startupStage"
                    placeholder="Startup Stage"
                    value={formData.startupStage}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="servicesInterested"
                    placeholder="Services Interested"
                    value={formData.servicesInterested}
                    onChange={handleChange}
                    required
                    className="border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-4 font-semibold hover:scale-[1.02] transition"
                >
                    {loading ? "Adding..." : "Add Lead"}
                </button>
            </form>
        </div>
    );
}