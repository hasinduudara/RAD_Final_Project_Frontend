import { saveProgress } from "../../services/course";
import { Palette, CheckCircle, Code, Type, Layout, PaintBucket } from "lucide-react";
// If you haven't installed icons yet: npm install lucide-react

export default function CssPart2({ onDone }: { onDone: () => void }) {

    const done = async () => {
        await saveProgress("css", 2);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Palette className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        CSS Colors, Fonts & Styling
                    </h2>
                </div>

                <div className="p-6 space-y-8">
                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="text-slate-300 leading-loose text-lg">
                            මෙම පාඩම මගින් පහත කරුණු ආවරණය කරයි:
                        </p>

                        {/* Styled List Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="bg-pink-500/20 p-2 rounded-lg">
                                    <Palette className="w-5 h-5 text-pink-400" />
                                </div>
                                <span className="text-slate-200 font-medium">Colors (වර්ණ)</span>
                            </div>

                            <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <PaintBucket className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-slate-200 font-medium">Background Colors</span>
                            </div>

                            <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="bg-yellow-500/20 p-2 rounded-lg">
                                    <Type className="w-5 h-5 text-yellow-400" />
                                </div>
                                <span className="text-slate-200 font-medium">Fonts (අකුරු)</span>
                            </div>

                            <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="bg-emerald-500/20 p-2 rounded-lg">
                                    <Layout className="w-5 h-5 text-emerald-400" />
                                </div>
                                <span className="text-slate-200 font-medium">Borders</span>
                            </div>
                        </div>
                    </div>

                    {/* Code Section */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-purple-400" />
                            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                                Color Example
                            </h3>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`p {
    color: blue;
}`}
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