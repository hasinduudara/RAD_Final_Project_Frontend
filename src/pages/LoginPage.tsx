import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/user.ts";
import { setUser } from "../context/userContext.tsx";
import type { AppDispatch, User } from "../context/userContext.tsx";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Use your new service method
            const data = await login(email, password);

            // Save tokens & role
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("role", data.user.role);

            // Save profile image if available
            if (data.user.profileImage) {
                localStorage.setItem("profileImage", data.user.profileImage);
            }

            // Update Redux store
            const userObj: User = {
                id: data.user.id || data.user._id,
                fullName: data.user.fullName,
                email: data.user.email,
                role: data.user.role,
                profileImage: data.user.profileImage,
            };
            dispatch(setUser(userObj));

            alert("Login successful!");

            // ROLE-BASED REDIRECT
            if (data.user.role === "ADMIN") {
                navigate("/adminpanel");
            } else {
                navigate("/home");
            }

        } catch (error: unknown) {
            let errorMessage = "Login failed";

            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response?: { data?: { message?: string } } };
                errorMessage = axiosError.response?.data?.message || "Login failed";
            }

            alert(errorMessage);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden selection:bg-blue-500 selection:text-white">

            {/* --- 3D Background Animation (Same as WelcomePage) --- */}
            <style>{`
                .perspective-container {
                    perspective: 1000px;
                }
                .grid-3d-plane {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    left: -50%;
                    top: -25%;
                    background-image: 
                        linear-gradient(to right, rgba(37, 99, 235, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(37, 99, 235, 0.15) 1px, transparent 1px);
                    background-size: 80px 80px;
                    transform: rotateX(60deg);
                    transform-origin: 50% 50%;
                    animation: grid-movement 10s linear infinite;
                }
                @keyframes grid-movement {
                    0% { transform: rotateX(60deg) translateY(0); }
                    100% { transform: rotateX(60deg) translateY(80px); }
                }
                .fog-overlay {
                    background: linear-gradient(to bottom, #111827 10%, transparent 40%, transparent 80%, #111827 100%);
                }
            `}</style>

            <div className="absolute inset-0 perspective-container pointer-events-none">
                <div className="grid-3d-plane"></div>
                <div className="absolute inset-0 fog-overlay z-0"></div>
            </div>
            {/* --------------------------------------------------- */}

            {/* Login Card Container (Added z-10 and glass effect) */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl">

                <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-md">Login</h1>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <input
                            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-500 text-white"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <input
                            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-500 text-white"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center space-y-2">
                    <p className="text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Register
                        </Link>
                    </p>

                    <p>
                        <Link to="/forgot-password" className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors">
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}