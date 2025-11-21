import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/user"; // import your service

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Create Account</h1>

            <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />

                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded mt-4 disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>

            <p className="mt-6 text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 hover:text-blue-300">
                    Login
                </Link>
            </p>
        </div>
    );
}
