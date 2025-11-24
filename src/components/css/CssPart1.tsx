import { saveProgress } from "../../services/course";
import { BookOpen, Code, CheckCircle } from "lucide-react"; // Optional: Install lucide-react for icons, or remove these tags if you don't have it.

export default function CssPart1({ onDone }: { onDone: () => void }) {

    const done = async () => {
        await saveProgress("css", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        {/* If you don't use lucide-react, just keep the book emoji 📘 */}
                        <BookOpen className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        CSS මූලික දැනුම <span className="text-slate-500 text-lg font-normal ml-1">(Part 1)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-8">
                    {/* Introduction Text */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 leading-loose text-lg">
                            <span className="font-bold text-blue-400">CSS</span> කියන්නේ HTML elements වලට style දීමට භාවිතා කරන භාෂාවයි.
                            මෙය web page එකට <span className="text-slate-200 font-medium">වර්ණ, ප්‍රමාණ, spacing, layouts</span> වගේ දේවල්
                            එක් කරලා page එක සරල හා ලස්සන කරගන්න භාවිතා කරනවා.
                        </p>
                    </div>

                    {/* Code Section */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-400" />
                            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                                CSS HTML එකට link කිරීම
                            </h3>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`<link rel="stylesheet" href="style.css">`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Footer / Action Button */}
                <div className="p-6 bg-slate-900 border-t border-slate-800">
                    <button
                        onClick={done}
                        className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <span>මේ කොටස අවසන්</span>
                        <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    );
}