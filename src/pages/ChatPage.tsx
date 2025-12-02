import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            {/* 1. Global Header */}
            <div className="flex-none">
                <Header />
            </div>

            {/* 2. Main Layout (Sidebar + Chat Area) */}
            <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <div className="flex-none w-64 border-r border-gray-700 bg-gray-800">
                    <ChatList
                        chats={chats}
                        onSelect={handleSelectChat}
                        onNewChat={handleNewChat}
                        activeChatId={currentChatId || ""}
                    />
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-gray-900 relative">
                    {currentChatId ? (
                        <ChatWindow chatId={currentChatId} />
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                            <h2 className="text-2xl font-semibold mb-2">Welcome to LanguageHub AI</h2>
                            <p>Select a chat from the sidebar or start a new one.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}