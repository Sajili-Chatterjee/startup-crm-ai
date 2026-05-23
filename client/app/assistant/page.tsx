"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import { API } from "@/lib/api";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function AssistantPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hello! I’m your AI startup advisor. Ask me about funding, compliance, investor readiness, or startup scaling.",
        },
    ]);

    const [input, setInput] = useState("");

    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            role: "user" as const,
            content: input,
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
        ]);

        setInput("");

        try {
            setLoading(true);

            const res = await API.post("/ai", {
                message: input,
            });

            const aiMessage = {
                role: "assistant" as const,
                content: res.data.reply,
            };

            setMessages((prev) => [
                ...prev,
                aiMessage,
            ]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProtectedRoute>
            <DashboardLayout>
                <div className="max-w-5xl mx-auto">

                    <div className="mb-8">
                        <h1 className="text-5xl font-bold text-slate-900">
                            AI Startup Assistant
                        </h1>

                        <p className="text-slate-500 mt-3 text-lg">
                            Get startup guidance powered by AI.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl shadow-md h-[700px] flex flex-col">

                        <div className="flex-1 overflow-y-auto p-8 space-y-6">

                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`max-w-[80%] p-5 rounded-3xl ${msg.role === "user"
                                        ? "ml-auto bg-blue-500 text-white"
                                        : "bg-slate-100 text-slate-900"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            ))}

                            {loading && (
                                <div className="bg-slate-100 text-slate-900 max-w-[80%] p-5 rounded-3xl">
                                    Thinking...
                                </div>
                            )}
                        </div>

                        <div className="border-t border-slate-200 p-6 flex gap-4">

                            <input
                                type="text"
                                placeholder="Ask about startup funding, compliance, etc..."
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                                className="flex-1 border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 rounded-2xl font-semibold hover:scale-105 transition"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </ProtectedRoute>
    );
}