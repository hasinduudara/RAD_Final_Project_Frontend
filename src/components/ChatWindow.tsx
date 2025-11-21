import { useEffect, useState } from "react";
import { loadChat, sendMessage } from "../services/chat";

interface Message {
    role: string;
    content: string;
}

interface Chat {
    messages: Message[];
}

export default function ChatWindow({ chatId }: { chatId: string }) {
    const [chat, setChat] = useState<Chat | null>(null);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (chatId) {
            const token = localStorage.getItem("accessToken")!;
            loadChat(token, chatId).then(setChat);
        }
    }, [chatId]);

    const handleSend = async () => {
        if (!input.trim()) return;

        setLoading(true);
        const token = localStorage.getItem("accessToken")!;
        const response = await sendMessage(token, chatId, input);

        // Clean AI response from markdown or special chars
        response.chat.messages = response.chat.messages.map((m: Message) => ({
            ...m,
            content: m.content.replace(/[*_`~]/g, "").trim()
        }));

        setChat(response.chat);
        setInput("");
        setLoading(false);
    };

    if (!chat) return <div className="flex-1 p-4">Loading...</div>;

    return (
        <div className="flex-1 flex flex-col bg-gray-900 text-white">
            <div>
                {chat.messages.map((msg: Message, i: number) => (
                    <div key={i} className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        <div className={`inline-block p-3 rounded-lg ${msg.role === "user" ? "bg-green-700" : "bg-gray-700"}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="text-center text-gray-400 mt-2 italic">
                        AI Thinking...
                    </div>
                )}
            </div>

            <div className="p-4 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-3 rounded bg-gray-700 text-white outline-none"
                    placeholder="Type your message..."
                />

                <button
                    onClick={handleSend}
                    className={`px-4 rounded ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"}`}
                    disabled={loading}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
