import { useState } from "react";
import { saveProgress } from "../../services/course"; // Adjust path if needed
import { FileJson, CheckCircle, Code, Box, Type, Hash, ToggleLeft } from "lucide-react";

export default function JsPart1({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        // Assume you have a "js" entry in your DB, or change to "javascript"
        await saveProgress("js", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <FileJson className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        JavaScript මූලික දැනුම <span className="text-slate-500 text-lg font-normal ml-1">(Part 1)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-8">

                    {/* Intro */}
                    <div className="space-y-3">
                        <p className="text-slate-300 leading-loose text-lg">
                            <span className="font-bold text-yellow-400">JavaScript</span> යනු වෙබ් පිටු වලට "පණ දෙන" භාෂාවයි.
                            HTML වලින් සැකිල්ලත් (Skeleton), CSS වලින් පෙනුමත් (Skin), JavaScript වලින් ක්‍රියාකාරීත්වයත් (Brain) ලබා දෙයි.
                        </p>
                    </div>

                    {/* Variables Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Box className="w-5 h-5 text-yellow-400" /> Variables (විචල්‍යයන්)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <code className="text-blue-400 font-bold">let</code>
                                <p className="text-xs text-slate-400 mt-2">අගය පසුව වෙනස් කළ හැකි දත්ත තැන්පත් කිරීමට.</p>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <code className="text-purple-400 font-bold">const</code>
                                <p className="text-xs text-slate-400 mt-2">අගය කිසිවිටකත් වෙනස් නොවන දත්ත සඳහා.</p>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 opacity-60">
                                <code className="text-slate-500 font-bold">var</code>
                                <p className="text-xs text-slate-500 mt-2">පරණ ක්‍රමයකි. දැන් භාවිතා කිරීම අඩුයි.</p>
                            </div>
                        </div>
                    </div>

                    {/* Data Types Grid */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Hash className="w-5 h-5 text-yellow-400" /> Data Types
                        </h3>
                        <div className="bg-slate-950/50 rounded-xl border border-slate-800 p-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <Type className="w-4 h-4 text-green-400" />
                                <span className="text-slate-300 w-20 font-semibold">String</span>
                                <code className="text-yellow-200 bg-slate-900 px-2 py-1 rounded">"Hello"</code>
                                <span className="text-xs text-slate-500 ml-auto hidden sm:block">අකුරු සඳහා</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Hash className="w-4 h-4 text-blue-400" />
                                <span className="text-slate-300 w-20 font-semibold">Number</span>
                                <code className="text-yellow-200 bg-slate-900 px-2 py-1 rounded">25, 3.14</code>
                                <span className="text-xs text-slate-500 ml-auto hidden sm:block">ඉලක්කම් සඳහා</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ToggleLeft className="w-4 h-4 text-orange-400" />
                                <span className="text-slate-300 w-20 font-semibold">Boolean</span>
                                <code className="text-yellow-200 bg-slate-900 px-2 py-1 rounded">true, false</code>
                                <span className="text-xs text-slate-500 ml-auto hidden sm:block">ඇත්ත/නැත්ත සඳහා</span>
                            </div>
                        </div>
                    </div>

                    {/* Code Block */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">Example Code</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`let name = "Kasun";
const age = 24;
let isStudent = true;

console.log(name); // Output: Kasun`}
                            </pre>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 bg-slate-900 border-t border-slate-800">
                    <button
                        onClick={() => {
                            setChecked(true);
                            handleDone();
                        }}
                        disabled={checked}
                        className={`group w-full py-3.5 rounded-xl font-bold shadow-lg transition-all duration-200 flex items-center justify-center gap-2
                            ${checked
                            ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white hover:shadow-emerald-500/20"
                        }`}
                    >
                        <span>{checked ? "Completed" : "Mark Part 1 Completed"}</span>
                        <CheckCircle className={`w-5 h-5 ${!checked && "group-hover:scale-110 transition-transform"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}