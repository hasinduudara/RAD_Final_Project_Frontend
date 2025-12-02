import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getUser } from '../services/user';

interface User {
    id: string;
    fullName: string;
    email: string;
    role: string;
    profileImage?: string;
}

interface UserContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    updateProfileImage: (imageUrl: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Load user data on mount
    useEffect(() => {
        const loadUser = async () => {
            const accessToken = localStorage.getItem('accessToken');

            if (!accessToken) {
                setLoading(false);
                return;
            }

            try {
                const response = await getUser();
                const userData = response.user || response;

                const userObj: User = {
                    id: userData.id || userData._id,
                    fullName: userData.fullName || '',
                    email: userData.email || '',
                    role: userData.role || localStorage.getItem('role') || '',
                    profileImage: userData.profileImage || localStorage.getItem('profileImage') || undefined,
                };

                setUser(userObj);

                // Sync with localStorage
                if (userObj.role) {
                    localStorage.setItem('role', userObj.role);
                }
                if (userObj.profileImage) {
                    localStorage.setItem('profileImage', userObj.profileImage);
                }
            } catch (error) {
                console.error('Failed to load user:', error);
                // Token might be invalid, keep user as null
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const updateProfileImage = (imageUrl: string) => {
        if (user) {
            const updatedUser = { ...user, profileImage: imageUrl };
            setUser(updatedUser);
            localStorage.setItem('profileImage', imageUrl);
            window.dispatchEvent(new Event('profileImageUpdated'));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.removeItem('profileImage');
    };

    const value: UserContextType = {
        user,
        loading,
        setUser,
        updateProfileImage,
        logout,
        isAuthenticated: !!user,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

