import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const email = localStorage.getItem("resetEmail");
    const otp = localStorage.getItem("otp");

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/password/reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp, newPassword: password }),
        });

        const data = await res.json();

        if (!res.ok) return alert(data.message);

        alert("Password reset successful.");
        localStorage.removeItem("resetEmail");
        localStorage.removeItem("otp");

        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Reset Password</h1>

            <form onSubmit={handleReset} className="w-full max-w-sm space-y-4">
                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
                    Reset Password
                </button>
            </form>
        </div>
    );
}
