import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/user.ts"; // ⬅ import service

export default function LoginPage() {
    const navigate = useNavigate();

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Login</h1>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded mt-4"
                >
                    Login
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:text-blue-300">
                        Register
                    </Link>
                </p>

                <p className="mt-2">
                    <Link to="/forgot-password" className="text-yellow-400 hover:text-yellow-300">
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div>
    );
}
