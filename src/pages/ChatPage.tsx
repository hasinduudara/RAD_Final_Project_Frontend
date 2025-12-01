import { useState, useEffect } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header"; // Assuming this is where your Header is
import { createChat, getChats } from "../services/chat";

interface ChatItem {
    _id: string;
    title: string;
}

export default function ChatPage() {
    const [currentChat, setCurrentChat] = useState("");
    const [chats, setChats] = useState<ChatItem[]>([]);

    // Load chat list on mount
    useEffect(() => {
        const loadChatList = async () => {
            const token = localStorage.getItem("accessToken")!;
            const data = await getChats(token);
            setChats(data);
        };
        loadChatList();
    }, []);

    const handleNewChat = async () => {
        const token = localStorage.getItem("accessToken")!;
        const chat = await createChat(token);

        // Add new chat to the list immediately
        setChats([chat, ...chats]);
        setCurrentChat(chat._id);
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
                        setChats={setChats}
                        onSelect={setCurrentChat}
                        onNewChat={handleNewChat} // Passing the function down
                        activeChatId={currentChat}
                    />
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-gray-900 relative">
                    {currentChat ? (
                        <ChatWindow chatId={currentChat} />
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