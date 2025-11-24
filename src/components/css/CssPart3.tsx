import { saveProgress } from "../../services/course";
import { LayoutDashboard, CheckCircle, Code, Columns, Grid3X3 } from "lucide-react";
// Make sure to install icons: npm install lucide-react

export default function CssPart3({ onDone }: { onDone: () => void }) {

    const done = async () => {
        await saveProgress("css", 3);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <LayoutDashboard className="w-6 h-6 text-orange-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        CSS Layouts - Flexbox & Grid
                    </h2>
                </div>

                <div className="p-6 space-y-8">

                    <p className="text-slate-300 leading-loose text-lg">
                        CSS මගින් Layouts සැකසීමට ප්‍රධාන ක්‍රම දෙකක් භාවිතා කරයි:
                    </p>

                    {/* Flexbox Section */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Columns className="w-5 h-5 text-orange-400" />
                            <h3 className="text-xl font-semibold text-slate-200">Flexbox</h3>
                        </div>

                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <Code className="w-4 h-4 text-orange-400" />
                                <span className="text-xs font-medium text-slate-500 uppercase">CSS Code</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`.container {
    display: flex;
    gap: 10px;
}`}
                                </pre>
                            </div>
                            <div className="bg-slate-900/30 px-4 py-2 border-t border-slate-800">
                                <p className="text-xs text-slate-400">
                                    💡 Best for: 1-dimensional layouts (Rows <span className="italic">OR</span> Columns).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid Section */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Grid3X3 className="w-5 h-5 text-orange-400" />
                            <h3 className="text-xl font-semibold text-slate-200">Grid Layout</h3>
                        </div>

                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <Code className="w-4 h-4 text-orange-400" />
                                <span className="text-xs font-medium text-slate-500 uppercase">CSS Code</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`}
                                </pre>
                            </div>
                            <div className="bg-slate-900/30 px-4 py-2 border-t border-slate-800">
                                <p className="text-xs text-slate-400">
                                    💡 Best for: 2-dimensional layouts (Rows <span className="italic">AND</span> Columns).
                                </p>
                            </div>
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