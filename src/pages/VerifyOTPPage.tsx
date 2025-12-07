import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/password/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp }),
        });

        const data = await res.json();

        if (!res.ok) return alert(data.message);

        localStorage.setItem("otp", otp);

        navigate("/reset-password");
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

            {/* OTP Verification Card (Glass Effect) */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl">

                <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-md">Enter OTP</h1>

                <p className="text-gray-400 text-center mb-6 text-sm">
                    Please enter the 6-digit code sent to <br/>
                    <span className="text-blue-400 font-mono">{email || "your email"}</span>
                </p>

                <form onSubmit={handleVerify} className="space-y-6">
                    <div>
                        <input
                            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder-gray-500 text-white tracking-widest text-center text-lg"
                            placeholder="• • • • • •"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg"
                        type="submit"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
}