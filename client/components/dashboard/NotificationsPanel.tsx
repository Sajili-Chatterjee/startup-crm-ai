"use client";

export default function NotificationsPanel() {
    const notifications = [
        "New startup lead added",
        "Investor readiness updated",
        "AI insights generated",
        "Proposal status changed",
    ];

    return (
        <div className="absolute right-0 top-16 w-80 bg-white border border-slate-200 rounded-3xl shadow-xl p-5 z-50">

            <h2 className="text-xl font-bold text-slate-900 mb-5">
                Notifications
            </h2>

            <div className="space-y-4">

                {notifications.map(
                    (item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl p-4 border border-slate-200"
                        >
                            <p className="text-slate-700 text-sm">
                                {item}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}