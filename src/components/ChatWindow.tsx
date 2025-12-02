import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../services/chat";
import { fetchChatMessages, updateChatMessages, setSendingMessage } from "../context/userContext";
import type { AppDispatch, RootState } from "../context/userContext";

export default function ChatWindow({ chatId }: { chatId: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const { currentChatMessages, sendingMessage } = useSelector((state: RootState) => state.chat);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatId) {
            dispatch(fetchChatMessages(chatId));
        }
    }, [chatId, dispatch]);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [currentChatMessages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        dispatch(setSendingMessage(true));
        const token = localStorage.getItem("accessToken")!;

        try {
            const response = await sendMessage(token, chatId, input);

            // Update Redux store with new messages
            if (response.chat && response.chat.messages) {
                dispatch(updateChatMessages(response.chat.messages));
            }

            setInput("");
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Failed to send message");
        } finally {
            dispatch(setSendingMessage(false));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (currentChatMessages.length === 0 && !sendingMessage) {
        return <div className="flex-1 flex items-center justify-center text-gray-500">Loading chat...</div>;
    }

    return (
        <div className="flex flex-col h-full relative">

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
                {currentChatMessages.map((msg, i: number) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                                msg.role === "user"
                                    ? "bg-green-700 text-white rounded-br-none"
                                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                            }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}

                {sendingMessage && (
                    <div className="flex justify-start animate-pulse">
                        <div className="bg-gray-700 p-3 rounded-lg text-gray-400 italic text-sm">
                            AI is typing...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Fixed at bottom */}
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 p-4">
                <div className="max-w-4xl mx-auto relative flex items-center gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 p-3 pr-12 rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Type your message..."
                        disabled={sendingMessage}
                    />
                    <button
                        onClick={handleSend}
                        disabled={sendingMessage}
                        className={`px-4 py-3 rounded-md font-semibold transition-colors ${
                            sendingMessage
                                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}