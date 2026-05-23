import { API } from "@/lib/api";
type Lead = {
    _id: string;
    companyName: string;
    founderName: string;
    email: string;
    startupStage: string;
    servicesInterested: string;
    status: string;
};

export default function LeadTable({
    leads,
    search,
    setSearch,
}: {
    leads: Lead[];

    search: string;

    setSearch: React.Dispatch<
        React.SetStateAction<string>
    >;
}) {
    const updateStatus = async (
        id: string,
        status: string
    ) => {
        try {
            await API.put(`/leads/${id}`, {
                status,
            });

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md overflow-x-auto">

            <div className="flex items-center justify-between mb-6">

                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Startup Leads
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Manage startup onboarding pipeline
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Search company..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="border border-slate-300 rounded-2xl px-4 py-3 outline-none"
                />
            </div>

            <table className="w-full">

                <thead>
                    <tr className="border-b border-slate-200 text-left">
                        <th className="pb-4">Company</th>
                        <th className="pb-4">Founder</th>
                        <th className="pb-4">Email</th>
                        <th className="pb-4">Stage</th>
                        <th className="pb-4">Service</th>
                        <th className="pb-4">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead) => (
                        <tr
                            key={lead._id}
                            className="border-b border-slate-100 hover:bg-slate-50 transition"
                        >
                            <td className="py-5 font-medium">
                                {lead.companyName}
                            </td>

                            <td>{lead.founderName}</td>

                            <td>{lead.email}</td>

                            <td>{lead.startupStage}</td>

                            <td>{lead.servicesInterested}</td>

                            <td>
                                <select
                                    value={lead.status}

                                    onChange={(e) =>
                                        updateStatus(
                                            lead._id,
                                            e.target.value
                                        )
                                    }

                                    className="border border-slate-300 rounded-xl px-3 py-2"
                                >
                                    <option>New Lead</option>
                                    <option>Discovery Call</option>
                                    <option>Proposal Sent</option>
                                    <option>Investor Ready</option>
                                    <option>Client</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}