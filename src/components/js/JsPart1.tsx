import { useState } from "react";
import { saveProgress } from "../../services/course";
import { FileJson, CheckCircle, Box, Globe, Server,
    Calculator, Scale, AlertTriangle, List, Braces } from "lucide-react";

export default function JsPart1({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("js", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <FileJson className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        JavaScript Basics <span className="text-slate-500 text-lg font-normal ml-1">(Intro, Vars, Types & Operators)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 1: Intro & Runtime */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200">1. JavaScript ක්‍රියා කරන ආකාරය</h3>

                        <p className="text-slate-300 text-sm">
                            JavaScript යනු වෙබ් පිටු වලට "පණ දෙන" (Dynamic Interactions) භාෂාවයි. එය ප්‍රධාන වශයෙන් ස්ථාන දෙකක ධාවනය වේ:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex gap-3 items-start">
                                <Globe className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="text-slate-200 font-bold text-sm">Browser (Client-side)</h4>
                                    <p className="text-xs text-slate-400 mt-1">Chrome, Firefox වැනි browser එක තුල ධාවනය වේ. (UI, Animations, Validations)</p>
                                </div>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex gap-3 items-start">
                                <Server className="w-5 h-5 text-green-400 mt-1" />
                                <div>
                                    <h4 className="text-slate-200 font-bold text-sm">Node.js (Server-side)</h4>
                                    <p className="text-xs text-slate-400 mt-1">Browser එකෙන් පිටත, Server එකක් ලෙස backend සෑදීමට භාවිතා කරයි.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 2: Variables */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Box className="w-5 h-5 text-yellow-400" /> 2. Variables (විචල්‍යයන්)
                        </h3>


                        <div className="overflow-hidden rounded-xl border border-slate-800">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-950">
                                <tr>
                                    <th className="px-4 py-3">Keyword</th>
                                    <th className="px-4 py-3">Change Value?</th>
                                    <th className="px-4 py-3">Scope</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                                <tr>
                                    <td className="px-4 py-3 font-mono text-purple-400">const</td>
                                    <td className="px-4 py-3 text-red-400">No (බැහැ)</td>
                                    <td className="px-4 py-3">Block</td>
                                    <td className="px-4 py-3 text-emerald-400 font-bold">Best ✔️</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-blue-400">let</td>
                                    <td className="px-4 py-3 text-emerald-400">Yes (පුළුවන්)</td>
                                    <td className="px-4 py-3">Block</td>
                                    <td className="px-4 py-3 text-emerald-400">Good ✔️</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-slate-500">var</td>
                                    <td className="px-4 py-3 text-emerald-400">Yes (පුළුවන්)</td>
                                    <td className="px-4 py-3">Function</td>
                                    <td className="px-4 py-3 text-red-500">Avoid ❌</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 3: Data Types */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200">3. Data Types</h3>


                        [Image of JavaScript data types chart]

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <span className="text-xs text-slate-500">String (Text)</span>
                                <code className="text-yellow-200">let name = "John";</code>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <span className="text-xs text-slate-500">Number</span>
                                <code className="text-blue-300">let age = 25;</code>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <span className="text-xs text-slate-500">Boolean</span>
                                <code className="text-purple-300">let isOnline = true;</code>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><List className="w-3 h-3"/> Array</div>
                                <code className="text-green-300">let list = [1, 2, 3];</code>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Braces className="w-3 h-3"/> Object</div>
                                <code className="text-orange-300">let user = {"{ name: 'A' }"};</code>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex flex-col gap-1">
                                <span className="text-xs text-slate-500">Undefined / Null</span>
                                <code className="text-slate-400">let x; // undefined</code>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 4: Operators */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-yellow-400" /> 4. Operators
                        </h3>

                        {/* Arithmetic */}
                        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                            <h4 className="text-sm font-bold text-slate-300 mb-2">Arithmetic (ගණිතමය)</h4>
                            <div className="flex flex-wrap gap-4 text-sm font-mono text-blue-300">
                                <span>+ Add</span>
                                <span>- Sub</span>
                                <span>* Mul</span>
                                <span>/ Div</span>
                                <span>% Remainder</span>
                            </div>
                        </div>

                        {/* Comparison - Highlighted */}
                        <div className="bg-slate-900 border border-yellow-500/20 p-4 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                            <div className="flex items-start gap-3">
                                <Scale className="w-5 h-5 text-yellow-500 mt-1" />
                                <div className="space-y-2 w-full">
                                    <h4 className="text-sm font-bold text-slate-200">Comparison (සංසන්දනය)</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-slate-950 p-2 rounded border border-slate-800">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-red-400 font-bold">==</span>
                                                <span className="text-slate-500">Value check only</span>
                                            </div>
                                            <code className="text-xs text-slate-300">5 == "5" // true</code>
                                        </div>

                                        <div className="bg-slate-950 p-2 rounded border border-slate-800">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-green-400 font-bold">===</span>
                                                <span className="text-slate-500">Value + Type check</span>
                                            </div>
                                            <code className="text-xs text-slate-300">5 === "5" // false</code>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-yellow-500/80 mt-1">
                                        <AlertTriangle className="w-3 h-3" />
                                        <span>Always use <strong>===</strong> to avoid bugs!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logical */}
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">&& (AND)</span>
                            <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">|| (OR)</span>
                            <span className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">! (NOT)</span>
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