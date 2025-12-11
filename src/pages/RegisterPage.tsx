import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight, Code2, Loader2 } from "lucide-react"; // Icons
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
            // Optional: You could show a success modal here instead of alert
            alert("Registration successful! Please login.");
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
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-green-500/30">

            {/* --- 3D Background Animation --- */}
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
                        linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
                }
            `}</style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-[100%] top-[-50%] bg-grid animate-grid opacity-30 origin-top"></div>
                </div>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/60 to-gray-950"></div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-10 w-full max-w-md px-6">

                {/* Brand Logo */}
                <div className="flex justify-center mb-8 animate-fade-in-up">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-md rounded-full border border-gray-800">
                        <Code2 className="text-green-500" size={20} />
                        <span className="font-bold tracking-tight">Language Hub</span>
                    </div>
                </div>

                {/* Registration Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

                    {/* Header */}
                    <div className="p-8 pb-0 text-center">
                        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                        <p className="text-gray-400 text-sm">Join the #1 Web Dev community in Sri Lanka</p>
                    </div>

                    {/* Form */}
                    <div className="p-8 pt-6">
                        <form onSubmit={handleRegister} className="space-y-4">

                            {/* Full Name Input */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 ml-1">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-500 group-focus-within:text-green-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                                        type="text"
                                        placeholder="John Doe"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-green-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
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
                                <label className="text-xs font-medium text-gray-400 ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-green-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
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
                                disabled={loading}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Sign Up</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
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
                        </div>

                        {/* Footer Links */}
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-green-400 hover:text-green-300 font-semibold hover:underline transition-colors">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Helper */}
                <p className="text-center text-gray-600 text-xs mt-8">
                    © 2025 Language Hub. Join the future of coding.
                </p>
            </div>
        </div>
    );
}