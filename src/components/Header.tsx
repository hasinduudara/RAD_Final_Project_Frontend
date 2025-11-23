import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
        // Load profile image from localStorage
        const loadProfileImage = () => {
            const savedImage = localStorage.getItem("profileImage");
            setProfileImage(savedImage);
        };

        // Load on mount and when location changes
        loadProfileImage();

        // Listen for storage changes (when localStorage is updated)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "profileImage") {
                setProfileImage(e.newValue);
            }
        };

        // Listen for custom event (for same-tab updates)
        const handleProfileUpdate = () => {
            loadProfileImage();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("profileImageUpdated", handleProfileUpdate);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("profileImageUpdated", handleProfileUpdate);
        };
    }, [location]);

    const handleLogout = () => {
        // Remove tokens
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("role");
        localStorage.removeItem("profileImage");

        // Redirect to login
        navigate("/login");
    };

    return (
        <header className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md">
            {/* Logo */}
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/home")}>
                Language Hub
            </h1>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4">

                {/* Logout Button */}
                <button
                    onClick={() => navigate("/ai")}
                    className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-semibold"
                >
                    Language Hub AI
                </button>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold"
                >
                    Logout
                </button>

                {/* Profile Icon */}
                <div
                    className="cursor-pointer"
                    onClick={() => navigate("/profile")}
                >
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-gray-600"
                        />
                    ) : (
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                            <User size={22} />
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
}
