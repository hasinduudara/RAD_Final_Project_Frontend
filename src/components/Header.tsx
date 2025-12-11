import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User, LogOut, Code2, Sparkles } from "lucide-react";
import { logout as logoutAction } from "../context/userContext";
import type { RootState, AppDispatch } from "../context/userContext";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

                {/* Logo Section */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => navigate("/home")}
                >
                    <div className="bg-green-500/10 p-1.5 rounded-lg group-hover:bg-green-500/20 transition-colors">
                        <Code2 className="text-green-500" size={24} />
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight group-hover:text-green-400 transition-colors">
                        Language Hub
                    </h1>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">

                    {/* AI Feature Button (Premium Look) */}
                    <button
                        onClick={() => navigate("/ai")}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
                    >
                        <Sparkles size={16} className="text-blue-100" />
                        <span>AI Tutor</span>
                    </button>

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-800 hidden sm:block"></div>

                    {/* Logout Button (Refined) */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white text-sm font-semibold transition-all duration-200"
                    >
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>

                    {/* Profile Avatar */}
                    <div
                        className="cursor-pointer ml-2 relative group"
                        onClick={() => navigate("/profile")}
                        title="View Profile"
                    >
                        <div className="absolute -inset-0.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 blur transition duration-200"></div>
                        <div className="relative">
                            {user?.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt="Profile"
                                    className="w-9 h-9 rounded-full border-2 border-gray-800 object-cover"
                                />
                            ) : (
                                <div className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full border border-gray-700 group-hover:border-gray-500 transition-colors">
                                    <User size={18} className="text-gray-400 group-hover:text-white" />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}