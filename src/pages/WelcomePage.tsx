import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Code2, Globe, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function WelcomePage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login');
    };

    return (
        // FIX: Changed 'overflow-hidden' to 'overflow-x-hidden' to allow vertical scrolling
        <div className="relative flex flex-col min-h-screen bg-gray-950 text-white overflow-x-hidden selection:bg-green-500/30">

            {/* --- CSS Animations --- */}
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
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                }
            `}</style>

            {/* --- Background Layers --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. Moving 3D Grid */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-[100%] top-[-50%] bg-grid animate-grid opacity-30 origin-top"></div>
                </div>

                {/* 2. Radial Gradient Overlay (Spotlight effect) */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/80 to-gray-950"></div>

                {/* 3. Glowing Orbs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-50"></div>
            </div>


            {/* --- Main Content --- */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-20">

                {/* Hero Container */}
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 backdrop-blur-md mb-4 animate-fade-in-up">
                        <Sparkles size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium text-gray-300">The #1 Web Dev Platform in Sri Lanka</span>
                    </div>

                    {/* Title */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-emerald-500">
                                Language Hub
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-xl">
                            වෙත සාදරයෙන් පිළිගනිමු!
                        </p>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        HTML, CSS, සහ JavaScript මුල සිට <span className="text-green-400 font-semibold">සරල සිංහලෙන්</span> ඉගෙන ගන්න.
                        ඔබේ Web Development ගමන අදම අරඹන්න.
                    </p>

                    {/* Feature Grid (Icons) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
                        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm flex flex-col items-center gap-3 hover:border-blue-500/50 transition-colors">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Code2 size={24} />
                            </div>
                            <h3 className="font-semibold">Practical Coding</h3>
                            <p className="text-xs text-gray-500">Real-world projects</p>
                        </div>

                        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm flex flex-col items-center gap-3 hover:border-green-500/50 transition-colors">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                <Globe size={24} />
                            </div>
                            <h3 className="font-semibold">In Sinhala</h3>
                            <p className="text-xs text-gray-500">Learn in your language</p>
                        </div>

                        <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm flex flex-col items-center gap-3 hover:border-yellow-500/50 transition-colors">
                            <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400">
                                <Award size={24} />
                            </div>
                            <h3 className="font-semibold">Get Certified</h3>
                            <p className="text-xs text-gray-500">Earn certificates</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-10">
                        <button
                            onClick={handleStartClick}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] hover:scale-105"
                        >
                            <span>දැන්ම ආරම්භ කරන්න</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />

                            {/* Inner Ring Glow */}
                            <div className="absolute inset-0 rounded-full border border-white/20"></div>
                        </button>
                    </div>
                </div>
            </main>

            {/* Added relative and z-index to ensure footer sits on top of background */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}