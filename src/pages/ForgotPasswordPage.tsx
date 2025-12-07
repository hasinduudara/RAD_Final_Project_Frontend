import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/password/forgot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) return alert(data.message);

        localStorage.setItem("resetEmail", email);

        navigate("/verify-otp");
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden selection:bg-purple-500 selection:text-white">

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

            {/* Forgot Password Card (Glass Effect) */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl">

                <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Forgot Password?</h1>

                <p className="text-gray-400 text-center mb-6 text-sm">
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-500 text-white"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
            </div>
        </div>
    );
}