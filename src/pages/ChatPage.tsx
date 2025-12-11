import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bot, Sparkles, MessageSquarePlus, Code2 } from "lucide-react"; // Icons
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header";
import { fetchChats, createNewChat, setCurrentChat } from "../context/userContext";
import type { AppDispatch, RootState } from "../context/userContext";

export default function ChatPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { chats, currentChatId } = useSelector((state: RootState) => state.chat);

    // Load chat list on mount
    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch]);

    const handleNewChat = () => {
        dispatch(createNewChat());
    };

    const handleSelectChat = (id: string) => {
        dispatch(setCurrentChat(id));
    };

    return (
        <div className="flex flex-col h-screen bg-gray-950 text-white overflow-hidden font-sans">
            {/* 1. Global Header */}
            <div className="flex-none z-20">
                <Header />
            </div>

            {/* 2. Main Layout */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Sidebar - (Hidden on mobile, visible on medium screens+) */}
                {/* Note: The ChatList component itself handles some width, but we wrap it to ensure layout stability */}
                <div className="hidden md:flex flex-col h-full border-r border-gray-800 bg-gray-950 z-10">
                    <ChatList
                        chats={chats}
                        onSelect={handleSelectChat}
                        onNewChat={handleNewChat}
                        activeChatId={currentChatId || ""}
                    />
                </div>

                {/* Chat Area - Gradient Background */}
                <div className="flex-1 flex flex-col relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950">

                    {currentChatId ? (
                        <ChatWindow chatId={currentChatId} />
                    ) : (
                        // --- ENHANCED EMPTY STATE ---
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">

                            {/* Icon Blob */}
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
                                <div className="relative w-24 h-24 bg-gray-900 border border-gray-800 rounded-3xl flex items-center justify-center shadow-2xl">
                                    <Bot size={48} className="text-blue-500" />
                                </div>
                                {/* Floating sparkle */}
                                <div className="absolute -top-2 -right-2 bg-gray-800 p-2 rounded-full border border-gray-700">
                                    <Sparkles size={20} className="text-yellow-400 fill-yellow-400" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">LanguageHub AI</span>
                            </h2>
                            <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8">
                                I am your personal coding tutor. Ask me anything about HTML, CSS, or JavaScript and I'll help you debug, write, and understand code.
                            </p>

                            {/* Action Button */}
                            <button
                                onClick={handleNewChat}
                                className="group flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"
                            >
                                <MessageSquarePlus size={20} />
                                <span>Start a New Conversation</span>
                            </button>

                            {/* Suggestions (Optional visual fluff) */}
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60">
                                <div className="px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 text-sm text-gray-500 flex items-center gap-2 cursor-default hover:border-gray-700 hover:text-gray-400 transition-colors">
                                    <Code2 size={14} /> "Explain Flexbox in CSS"
                                </div>
                                <div className="px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 text-sm text-gray-500 flex items-center gap-2 cursor-default hover:border-gray-700 hover:text-gray-400 transition-colors">
                                    <Code2 size={14} /> "How do React hooks work?"
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}