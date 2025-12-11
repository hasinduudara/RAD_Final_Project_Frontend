import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Mail, Lock, ArrowRight, Code2 } from "lucide-react"; // Added icons
import { login } from "../services/user.ts";
import { setUser } from "../context/userContext.tsx";
import type { AppDispatch, User } from "../context/userContext.tsx";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Added for UI feedback state

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Use your new service method
            const data = await login(email, password);

            // Save tokens & role
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);

            // Save profile image if available
            if (data.user.profileImage) {
                localStorage.setItem("profileImage", data.user.profileImage);
            }

            // Update Redux store
            const userObj: User = {
                id: data.user.id || data.user._id,
                fullName: data.user.fullName,
                email: data.user.email,
                profileImage: data.user.profileImage,
            };
            dispatch(setUser(userObj));

            alert("Login successful!");

            // Navigate to home
            navigate("/home");

        } catch (error: unknown) {
            let errorMessage = "Login failed";

            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response?: { data?: { message?: string } } };
                errorMessage = axiosError.response?.data?.message || "Login failed";
            }

            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-blue-500/30">

            {/* --- 3D Background Animation (Consistent with Welcome Page) --- */}
            <style>{`
                @keyframes grid-move {
                    0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
                    100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
                }
                .animate-grid {
                    animation: grid-move 3s linear infinite;
                }
                .bg-grid {
                    background-size: 50px 50px;
                    background-image: 
                        linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px);
                }
            `}</style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-[100%] top-[-50%] bg-grid animate-grid opacity-40 origin-top"></div>
                </div>
                {/* Radial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/60 to-gray-950"></div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 w-full max-w-md px-6">

                {/* Brand Logo (Above Card) */}
                <div className="flex justify-center mb-8 animate-fade-in-up">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-md rounded-full border border-gray-800">
                        <Code2 className="text-blue-500" size={20} />
                        <span className="font-bold tracking-tight">Language Hub</span>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

                    {/* Card Header */}
                    <div className="p-8 pb-0 text-center">
                        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Please sign in to your account</p>
                    </div>

                    {/* Form */}
                    <div className="p-8 pt-6">
                        <form onSubmit={handleLogin} className="space-y-5">

                            {/* Email Input */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-medium text-gray-400">Password</label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {isLoading ? "Signing in..." : "Sign In"}
                                    {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </div>
                                {/* Shine effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-gray-900 px-2 text-gray-500">Or</span>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-colors">
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Helper */}
                <p className="text-center text-gray-600 text-xs mt-8">
                    © 2025 Language Hub. Secure Login.
                </p>
            </div>
        </div>
    );
}