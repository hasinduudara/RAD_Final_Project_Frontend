import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/user";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await register(fullName, email, password);
            alert("Registration successful!");
            navigate("/login");
        } catch (error) {
            const errorMessage = error instanceof Error
                ? error.message
                : (error as { response?: { data?: { message?: string } } })?.response?.data?.message || "Registration failed";
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden selection:bg-green-500 selection:text-white">

            {/* --- 3D Background Animation --- */}
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
            {/* ------------------------------- */}

            {/* Registration Card (Glass Effect) */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl">

                <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-md">Create Account</h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder-gray-500 text-white"
                        type="text"
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                    <input
                        className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder-gray-500 text-white"
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder-gray-500 text-white"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg mt-4 disabled:opacity-50 transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}