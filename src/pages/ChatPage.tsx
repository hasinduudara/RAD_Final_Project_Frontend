import { useState, useEffect } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
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
        <div className="flex h-screen">
            {/* Fixed sidebar */}
            <div className="flex-none w-64">
                <ChatList chats={chats} setChats={setChats} onSelect={setCurrentChat} />
            </div>

            {/* Chat area */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 bg-gray-800 text-white flex justify-between flex-none">
                    <h1 className="text-xl font-bold">AI Chat</h1>
                    <button className="bg-green-600 px-3 py-1 rounded" onClick={handleNewChat}>
                        + New Chat
                    </button>
                </div>

                {/* Chat window scrolls independently */}
                <div className="flex-1 bg-gray-700 overflow-y-auto">
                    {currentChat ? (
                        <ChatWindow chatId={currentChat} />
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            Select a chat or start a new one.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
