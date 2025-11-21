const API = import.meta.env.VITE_BACKEND_URL;

export const createChat = async (token: string) => {
    const res = await fetch(`${API}/chat/new`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
};

export const sendMessage = async (token: string, chatId: string, content: string) => {
    const res = await fetch(`${API}/chat/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ chatId, content })
    });
    return res.json();
};

export const getChats = async (token: string) => {
    const res = await fetch(`${API}/chat/list`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
};

export const loadChat = async (token: string, id: string) => {
    const res = await fetch(`${API}/chat/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
};

export const deleteChat = async (token: string, id: string) => {
    const res = await fetch(`${API}/chat/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
};
