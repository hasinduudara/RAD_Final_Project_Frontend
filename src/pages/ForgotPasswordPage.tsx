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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Forgot Password?</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded"
                    type="submit"
                >
                    {loading ? "Sending..." : "Send Reset Link"}
                </button>
            </form>
        </div>
    );
}
