import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bot, User, Loader2, ArrowUp } from "lucide-react"; // Icons
import { sendMessage } from "../services/chat";
import { fetchChatMessages, updateChatMessages, setSendingMessage } from "../context/userContext";
import type { AppDispatch, RootState } from "../context/userContext";

export default function ChatWindow({ chatId }: { chatId: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const { currentChatMessages, sendingMessage, loadingMessages } = useSelector((state: RootState) => state.chat);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (chatId) {
            dispatch(fetchChatMessages(chatId));
        }
    }, [chatId, dispatch]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [currentChatMessages, sendingMessage]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");
        // Reset textarea height
        if(textareaRef.current) textareaRef.current.style.height = 'auto';

        // Add user message immediately to UI
        const userMsg = { role: "user", content: userMessage };
        dispatch(updateChatMessages([...currentChatMessages, userMsg]));

        dispatch(setSendingMessage(true));
        const token = localStorage.getItem("accessToken")!;

        try {
            const response = await sendMessage(token, chatId, userMessage);
            if (response.chat && response.chat.messages) {
                // Get only the last message (AI's response) from the backend
                const messages = response.chat.messages;
                const lastMessage = messages[messages.length - 1];

                // Only add the AI response if it's not a user message
                if (lastMessage && lastMessage.role !== "user") {
                    dispatch(updateChatMessages([...currentChatMessages, userMsg, lastMessage]));
                }
            }
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

    // Auto-resize textarea
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
    };

    if (loadingMessages) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 text-gray-500 gap-3">
                <Loader2 className="animate-spin text-emerald-500" size={32} />
                <p className="text-sm font-medium animate-pulse">Loading history...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full relative bg-gray-900">

            {/* Messages Area - Centered Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
                <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 pb-32">
                    {currentChatMessages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500 space-y-4">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-2">
                                <Bot size={32} className="text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200">How can I help you today?</h3>
                        </div>
                    ) : (
                        currentChatMessages.map((msg, i: number) => (
                            <div
                                key={i}
                                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                            >
                                {/* Avatar */}
                                <div className={`
                                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                                    ${msg.role === "user" ? "bg-gray-700" : "bg-emerald-600/10"}
                                `}>
                                    {msg.role === "user"
                                        ? <User size={18} className="text-gray-300" />
                                        : <Bot size={18} className="text-emerald-500" />
                                    }
                                </div>

                                {/* Message Content */}
                                <div className={`flex-1 max-w-[85%] space-y-1`}>
                                    <div className={`text-xs font-semibold mb-1 ${msg.role === "user" ? "text-right text-gray-400" : "text-emerald-500"}`}>
                                        {msg.role === "user" ? "You" : "AI Assistant"}
                                    </div>
                                    <div className={`
                                        text-[15px] leading-7 p-3 md:p-4 rounded-2xl shadow-sm
                                        ${msg.role === "user"
                                        ? "bg-gray-800 text-gray-100 rounded-tr-sm"
                                        : "bg-transparent text-gray-100 px-0 md:px-0 shadow-none" // AI messages look cleaner without background bubbles
                                    }
                                    `}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    {/* Typing Indicator */}
                    {sendingMessage && (
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center">
                                <Bot size={18} className="text-emerald-500" />
                            </div>
                            <div className="flex items-center gap-1 h-8">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Floating Input Area */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-gray-900 to-transparent pt-10 pb-6 px-4">
                <div className="max-w-3xl mx-auto relative">
                    <div className="relative flex items-end gap-2 bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-2 focus-within:ring-2 focus-within:ring-emerald-500/50 focus-within:border-emerald-500 transition-all duration-200">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            rows={1}
                            className="flex-1 max-h-[200px] min-h-[44px] py-3 pl-4 bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 resize-none overflow-y-auto custom-scrollbar text-base"
                            placeholder="Send a message..."
                            disabled={sendingMessage}
                        />
                        <button
                            onClick={handleSend}
                            disabled={sendingMessage || !input.trim()}
                            className={`
                                mb-1 p-2 rounded-xl transition-all duration-200
                                ${sendingMessage || !input.trim()
                                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20"
                            }
                            `}
                        >
                            {sendingMessage ? <Loader2 size={20} className="animate-spin" /> : <ArrowUp size={20} strokeWidth={2.5} />}
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-gray-500">
                            AI can make mistakes. Check important info.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}