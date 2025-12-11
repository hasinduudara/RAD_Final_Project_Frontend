import { useDispatch } from "react-redux";
import { Plus, MessageSquare, Trash2, MessageCircle } from "lucide-react"; // Icons
import { deleteChat as deleteChatAction } from "../context/userContext";
import type { AppDispatch, Chat } from "../context/userContext";

interface ChatListProps {
    chats: Chat[];
    onSelect: (id: string) => void;
    onNewChat: () => void;
    activeChatId: string;
}

export default function ChatList({ chats, onSelect, onNewChat, activeChatId }: ChatListProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (!confirm("Delete this conversation?")) return;
        try {
            await dispatch(deleteChatAction(id)).unwrap();
        } catch {
            alert("Failed to delete chat");
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-950 border-r border-gray-800 w-full md:w-[260px] flex-shrink-0 transition-all duration-300">
            {/* Header / New Chat */}
            <div className="p-4 mb-2">
                <button
                    onClick={onNewChat}
                    className="group w-full flex items-center gap-3 px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-200 shadow-sm"
                >
                    <div className="bg-emerald-600/20 p-1 rounded-md group-hover:bg-emerald-600/30 transition-colors">
                        <Plus size={18} className="text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white">New Chat</span>
                </button>
            </div>

            {/* List Header */}
            <div className="px-6 pb-2">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Your Conversations
                </h2>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar space-y-1">
                {chats.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-10 text-gray-600 gap-2">
                        <MessageCircle size={32} className="opacity-20" />
                        <span className="text-xs">No history yet</span>
                    </div>
                )}

                {chats.map((chat) => (
                    <div
                        key={chat._id}
                        onClick={() => onSelect(chat._id)}
                        className={`
                            group relative flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 border border-transparent
                            ${activeChatId === chat._id
                            ? 'bg-gray-800 text-white border-gray-700 shadow-sm'
                            : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
                        }
                        `}
                    >
                        <MessageSquare size={16} className={`mr-3 flex-shrink-0 ${activeChatId === chat._id ? 'text-emerald-400' : 'text-gray-600 group-hover:text-gray-500'}`} />

                        <div className="flex-1 truncate text-sm font-medium pr-8">
                            {chat.title || "Untitled Conversation"}
                        </div>

                        {/* Delete Button (Fade in) */}
                        <button
                            onClick={(e) => handleDelete(e, chat._id)}
                            className={`
                                absolute right-2 p-1.5 rounded-md text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200
                                ${activeChatId === chat._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                            `}
                            title="Delete"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
            </div>

            {/* User Profile / Footer (Optional placeholder for UI completeness) */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500"></div>
                    <div className="flex-1">
                        <div className="h-2 w-20 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}