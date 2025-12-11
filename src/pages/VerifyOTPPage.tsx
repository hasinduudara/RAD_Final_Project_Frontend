import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Loader2, Code2 } from "lucide-react";

export default function VerifyOTPPage() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("resetEmail");
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/password/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Invalid OTP");

            localStorage.setItem("otp", otp);
            navigate("/reset-password");
        } catch (error) {
            alert(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-purple-500/30">

            {/* --- 3D Background Animation (Purple Theme) --- */}
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
                            <ShieldCheck className="text-purple-500" size={32} />
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Security Check</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We've sent a 6-digit code to <br />
                            <span className="text-purple-400 font-medium font-mono bg-purple-500/10 px-2 py-0.5 rounded">
                                {email || "your email"}
                            </span>
                        </p>
                    </div>

                    <div className="p-8 pt-6">
                        <form onSubmit={handleVerify} className="space-y-6">

                            {/* OTP Input - Stylized as spaced digits */}
                            <div className="space-y-2">
                                <input
                                    className="w-full p-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white placeholder-gray-700 text-center text-3xl font-mono tracking-[0.5em] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                                    placeholder="••••••"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))} // Only allow numbers
                                    required
                                    autoFocus
                                />
                                <p className="text-center text-xs text-gray-500">Enter the 6-digit code above</p>
                            </div>

                            {/* Verify Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Verifying...</span>
                                        </>
                                    ) : (
                                        <span>Verify & Proceed</span>
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

                        {/* Footer Actions */}
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm text-gray-400">
                                Didn't receive the code?{" "}
                                <button className="text-purple-400 hover:text-white font-medium hover:underline transition-colors">
                                    Resend Code
                                </button>
                            </p>

                            <button
                                onClick={() => navigate("/login")}
                                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                <ArrowLeft size={14} />
                                Cancel verification
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Helper */}
                <p className="text-center text-gray-600 text-xs mt-8">
                    © 2025 Language Hub. Secure Verification.
                </p>
            </div>
        </div>
    );
}