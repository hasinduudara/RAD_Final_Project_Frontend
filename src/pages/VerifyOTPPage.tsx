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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Enter OTP</h1>

            <form onSubmit={handleVerify} className="w-full max-w-sm space-y-4">
                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    placeholder="6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded">
                    Verify OTP
                </button>
            </form>
        </div>
    );
}
