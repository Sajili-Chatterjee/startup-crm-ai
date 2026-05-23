"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import LeadForm from "@/components/crm/LeadForm";
import LeadTable from "@/components/crm/LeadTable";

import { API } from "@/lib/api";

import toast, { Toaster } from "react-hot-toast";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
type Lead = {
    _id: string;
    companyName: string;
    founderName: string;
    email: string;
    startupStage: string;
    servicesInterested: string;
    status: string;
};

export default function CRMPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [search, setSearch] = useState("");

    const fetchLeads = async () => {
        try {
            const res = await API.get("/leads");

            setLeads(res.data);
        } catch (error) {
            toast.error("Failed to fetch leads");
        }
    };
    const filteredLeads = leads.filter((lead) =>
        lead.companyName
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchLeads();
    }, []);

    return (
        <ProtectedRoute>
            <DashboardLayout>
                <Toaster position="top-right" />

                <div className="space-y-8">

                    <div>
                        <h1 className="text-5xl font-bold text-slate-900">
                            CRM Management
                        </h1>

                        <p className="text-slate-500 mt-3 text-lg">
                            Manage startup lead acquisition and onboarding workflow.
                        </p>
                    </div>

                    <LeadForm refreshLeads={fetchLeads} />

                    <LeadTable
                        leads={filteredLeads}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>
            </DashboardLayout>
        </ProtectedRoute>
    );
}