// Redux store configuration and slices
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../services/user';
import { getChats as getChatsAPI, loadChat, createChat as createChatAPI, deleteChat as deleteChatAPI } from '../services/chat';

// User types
export interface User {
    id: string;
    fullName: string;
    email: string;
    profileImage?: string;
}

// Chat types
export interface Message {
    role: string;
    content: string;
}

export interface Chat {
    _id: string;
    title: string;
    messages?: Message[];
}

// User slice
interface UserState {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
}

const initialUserState: UserState = {
    user: null,
    loading: true,
    isAuthenticated: false,
};

// Async thunk to load user
export const loadUserData = createAsyncThunk('user/loadUserData', async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('No access token');
    }

    const response = await getUser();
    const userData = response.user || response;

    const userObj: User = {
        id: userData.id || userData._id,
        fullName: userData.fullName || '',
        email: userData.email || '',
        profileImage: userData.profileImage || localStorage.getItem('profileImage') || undefined,
    };

    // Sync with localStorage
    if (userObj.profileImage) {
        localStorage.setItem('profileImage', userObj.profileImage);
    }

    return userObj;
});

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        updateProfileImage: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.profileImage = action.payload;
                localStorage.setItem('profileImage', action.payload);
                window.dispatchEvent(new Event('profileImageUpdated'));
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('profileImage');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(loadUserData.rejected, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
            });
    },
});

// Chat slice
interface ChatState {
    chats: Chat[];
    currentChatId: string | null;
    currentChatMessages: Message[];
    loading: boolean;
    loadingMessages: boolean;
    sendingMessage: boolean;
}

const initialChatState: ChatState = {
    chats: [],
    currentChatId: null,
    currentChatMessages: [],
    loading: false,
    loadingMessages: false,
    sendingMessage: false,
};

// Async thunks for chat operations
export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
    const token = localStorage.getItem('accessToken')!;
    return await getChatsAPI(token);
});

export const fetchChatMessages = createAsyncThunk('chat/fetchChatMessages', async (chatId: string) => {
    const token = localStorage.getItem('accessToken')!;
    const chat = await loadChat(token, chatId);
    return { chatId, messages: chat.messages || [] };
});

export const createNewChat = createAsyncThunk('chat/createNewChat', async () => {
    const token = localStorage.getItem('accessToken')!;
    return await createChatAPI(token);
});

export const deleteChat = createAsyncThunk('chat/deleteChat', async (chatId: string) => {
    const token = localStorage.getItem('accessToken')!;
    await deleteChatAPI(token, chatId);
    return chatId;
});

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        setCurrentChat: (state, action: PayloadAction<string>) => {
            state.currentChatId = action.payload;
        },
        updateChatMessages: (state, action: PayloadAction<Message[]>) => {
            state.currentChatMessages = action.payload.map(m => ({
                ...m,
                content: m.content.replace(/[*_`~]/g, "").trim()
            }));
        },
        setSendingMessage: (state, action: PayloadAction<boolean>) => {
            state.sendingMessage = action.payload;
        },
        clearCurrentChat: (state) => {
            state.currentChatId = null;
            state.currentChatMessages = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch chats
            .addCase(fetchChats.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.chats = action.payload;
                state.loading = false;
            })
            .addCase(fetchChats.rejected, (state) => {
                state.loading = false;
            })
            // Fetch chat messages
            .addCase(fetchChatMessages.pending, (state) => {
                state.loadingMessages = true;
            })
            .addCase(fetchChatMessages.fulfilled, (state, action) => {
                state.currentChatMessages = action.payload.messages.map((m: Message) => ({
                    ...m,
                    content: m.content.replace(/[*_`~]/g, "").trim()
                }));
                state.loadingMessages = false;
            })
            .addCase(fetchChatMessages.rejected, (state) => {
                state.loadingMessages = false;
            })
            // Create new chat
            .addCase(createNewChat.fulfilled, (state, action) => {
                state.chats = [action.payload, ...state.chats];
                state.currentChatId = action.payload._id;
                state.currentChatMessages = [];
            })
            // Delete chat
            .addCase(deleteChat.fulfilled, (state, action) => {
                state.chats = state.chats.filter(c => c._id !== action.payload);
                if (state.currentChatId === action.payload) {
                    state.currentChatId = null;
                    state.currentChatMessages = [];
                }
            });
    },
});

// Export actions
export const { setUser, updateProfileImage, logout } = userSlice.actions;
export const { setCurrentChat, updateChatMessages, setSendingMessage, clearCurrentChat } = chatSlice.actions;

// Configure store
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        chat: chatSlice.reducer,
    },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


