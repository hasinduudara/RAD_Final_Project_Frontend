import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, ArrowLeft, KeyRound, Loader2, Code2 } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/password/forgot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Failed to send reset link");

            localStorage.setItem("resetEmail", email);
            alert("OTP sent successfully! Please check your email.");
            navigate("/verify-otp");
        } catch (error) {
            alert(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-purple-500/30">

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
                        linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
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
                        <Code2 className="text-purple-500" size={20} />
                        <span className="font-bold tracking-tight">Language Hub</span>
                    </div>
                </div>

                {/* Glass Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

                    <div className="p-8 pb-0 text-center">
                        {/* Icon Badge */}
                        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/20 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
                            <KeyRound className="text-purple-500" size={32} />
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            No worries! Enter your email and we will send you an OTP to reset your password.
                        </p>
                    </div>

                    <div className="p-8 pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Email Input */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-950/50 border border-gray-700 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Sending OTP...</span>
                                        </>
                                    ) : (
                                        <span>Send Reset Code</span>
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

                        {/* Back to Login */}
                        <div className="text-center">
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Helper */}
                <p className="text-center text-gray-600 text-xs mt-8">
                    © 2025 Language Hub. Account Recovery.
                </p>
            </div>
        </div>
    );
}