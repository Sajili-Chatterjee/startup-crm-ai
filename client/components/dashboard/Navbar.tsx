import { Bell, Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import NotificationsPanel from "./NotificationsPanel";
import ProfileDropdown from "./ProfileDropdown";
export default function Navbar() {
    const { user } = useAuth();
    const [showProfile, setShowProfile] =
        useState(false);
    const [showNotifications, setShowNotifications] =
        useState(false);
    return (
        <header className="h-20 border-b border-slate-200 bg-white/70 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">

                    <button
                        onClick={() =>
                            setShowNotifications(
                                !showNotifications
                            )
                        }
                        className="relative"
                    >
                        🔔
                    </button>

                    {showNotifications && (
                        <NotificationsPanel />
                    )}
                </div>

                <div className="relative">

                    <button
                        onClick={() =>
                            setShowProfile(!showProfile)
                        }
                    >
                        👤
                    </button>

                    {showProfile && (
                        <ProfileDropdown />
                    )}
                </div>

            </div>
        </header>
    );
}