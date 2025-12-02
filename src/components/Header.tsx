import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useUser } from "../context/userContext";

export default function Header() {
    const navigate = useNavigate();
    const { user, logout } = useUser();

    const handleLogout = () => {
        logout();
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
                    {user?.profileImage ? (
                        <img
                            src={user.profileImage}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-gray-600 object-cover"
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
