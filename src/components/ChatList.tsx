import { deleteChat as apiDeleteChat } from "../services/chat";

interface ChatItem {
    _id: string;
    title: string;
}

interface ChatListProps {
    chats: ChatItem[];
    setChats: React.Dispatch<React.SetStateAction<ChatItem[]>>;
    onSelect: (id: string) => void;
    onNewChat: () => void; // Make sure this is passed from ChatPage
    activeChatId: string;
}

export default function ChatList({ chats, setChats, onSelect, onNewChat, activeChatId }: ChatListProps) {

    const handleDelete = async (e: React.MouseEvent, id: string) => {
        // 1. Stop the click from bubbling up to the parent div (which opens the chat)
        e.stopPropagation();

        // 2. Confirm before deleting
        if (!confirm("Are you sure you want to delete this chat?")) return;

        try {
            const token = localStorage.getItem("accessToken")!;

            // 3. Call your existing API service
            await apiDeleteChat(token, id);

            // 4. Update UI immediately
            setChats((prevChats) => prevChats.filter((c) => c._id !== id));

            // Optional: If the deleted chat was the active one, you might want to clear the view
            if (activeChatId === id) {
            }
        } catch {
            alert("Failed to delete chat");
        }
    };

    return (
        <div className="flex flex-col h-full p-4 bg-gray-800 border-r border-gray-700">
            {/* New Chat Button */}
            <button
                onClick={onNewChat}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mb-6 flex items-center justify-center transition-colors shadow-lg"
            >
                New Chat +
            </button>

            <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                History
            </h2>

            {/* Scrollable Chat List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {chats.length === 0 && (
                    <div className="text-gray-500 text-sm text-center mt-4">No chats yet</div>
                )}

                {chats.map((chat) => (
                    <div
                        key={chat._id}
                        onClick={() => onSelect(chat._id)}
                        className={`
                            group flex justify-between items-center p-3 rounded-md cursor-pointer transition-all duration-200
                            ${activeChatId === chat._id
                            ? 'bg-gray-700 text-white border-l-4 border-green-500 shadow-md'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }
                        `}
                    >
                        {/* Chat Title */}
                        <div className="flex-1 truncate text-sm font-medium mr-3">
                            {chat.title || "Untitled Chat"}
                        </div>

                        {/* Delete Icon (Visible on Hover or Active) */}
                        <button
                            onClick={(e) => handleDelete(e, chat._id)}
                            className={`
                                p-1.5 rounded-md text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors
                                ${activeChatId === chat._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                            `}
                            title="Delete Chat"
                        >
                            {/* Trash Icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}