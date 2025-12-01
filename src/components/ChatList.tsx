import { deleteChat as apiDeleteChat } from "../services/chat";

interface ChatItem {
    _id: string;
    title: string;
}

interface ChatListProps {
    chats: ChatItem[];
    setChats: React.Dispatch<React.SetStateAction<ChatItem[]>>;
    onSelect: (id: string) => void;
    onNewChat: () => void;
    activeChatId: string;
}

export default function ChatList({ chats, setChats, onSelect, onNewChat, activeChatId }: ChatListProps) {

    const handleDelete = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation(); // Prevent triggering onSelect when clicking delete
        if(!confirm("Are you sure you want to delete this chat?")) return;

        const token = localStorage.getItem("accessToken")!;
        await apiDeleteChat(token, id);
        setChats(chats.filter((c) => c._id !== id));
    };

    return (
        <div className="flex flex-col h-full p-4">

            {/* New Chat Button (Top of Sidebar) */}
            <button
                onClick={onNewChat}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mb-6 flex items-center justify-center transition-colors"
            >
                New Chat +
            </button>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto space-y-2">
                {chats.map((chat) => (
                    <div
                        key={chat._id}
                        onClick={() => onSelect(chat._id)}
                        className={`
                            group flex justify-between items-center p-3 rounded cursor-pointer transition-colors
                            ${activeChatId === chat._id ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'}
                        `}
                    >
                        <span className="truncate text-sm font-medium pr-2">
                            {chat.title || "Untitled Chat"}
                        </span>

                        {/* Delete Icon */}
                        <button
                            onClick={(e) => handleDelete(e, chat._id)}
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                            title="Delete Chat"
                        >
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