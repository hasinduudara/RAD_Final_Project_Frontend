import { deleteChat as apiDeleteChat } from "../services/chat";

interface ChatItem {
    _id: string;
    title: string;
}

interface ChatListProps {
    chats: ChatItem[];
    setChats: React.Dispatch<React.SetStateAction<ChatItem[]>>;
    onSelect: (id: string) => void;
}

export default function ChatList({ chats, setChats, onSelect }: ChatListProps) {
    const handleDelete = async (id: string) => {
        const token = localStorage.getItem("accessToken")!;
        await apiDeleteChat(token, id);
        setChats(chats.filter((c) => c._id !== id));
    };

    return (
        <div className="p-4 bg-gray-800 w-64 text-white h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-3">Chats</h2>

            {chats.map((chat) => (
                <div key={chat._id} className="flex justify-between items-center mb-2 bg-gray-700 p-2 rounded">
                    <div onClick={() => onSelect(chat._id)} className="cursor-pointer">
                        {chat.title}
                    </div>
                    <button
                        onClick={() => handleDelete(chat._id)}
                        className="bg-red-600 px-2 py-1 text-sm rounded hover:bg-red-500"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
