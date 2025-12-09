import { useState } from "react";
import { saveProgress } from "../../services/course";
import { BookOpen, CheckCircle, Hash, Palette, Layers, Braces } from "lucide-react";

export default function CssPart1({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("css", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            {/* Main Card Container */}
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            CSS මූලික දැනුම <span className="text-slate-500 text-lg font-normal ml-1">(Syntax & Selectors)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">CSS හඳුන්වාදීම, Selectors සහ Colors</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 1: Definition & Syntax */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Braces className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-semibold text-slate-200">1. CSS යනු කුමක්ද? (Syntax)</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                <span className="font-bold text-blue-400">CSS</span> (Cascading Style Sheets) මගින් HTML elements වලට Colors, Fonts, Margins සහ Layouts එක් කරයි.
                            </p>

                            {/* Syntax Visualizer */}
                            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm">
                                <span className="text-orange-400">selector</span> <span className="text-slate-400">{"{"}</span>
                                <div className="pl-6">
                                    <span className="text-blue-300">property</span>: <span className="text-emerald-400">value</span>;
                                </div>
                                <span className="text-slate-400">{"}"}</span>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs text-slate-400">
                                <li className="bg-slate-900 px-3 py-2 rounded border border-slate-800">
                                    <strong className="text-orange-400 block mb-1">Selector</strong>
                                    Style කරන්නේ කාටද? (h1, p)
                                </li>
                                <li className="bg-slate-900 px-3 py-2 rounded border border-slate-800">
                                    <strong className="text-blue-300 block mb-1">Property</strong>
                                    Style එකේ ගුණය (color, size)
                                </li>
                                <li className="bg-slate-900 px-3 py-2 rounded border border-slate-800">
                                    <strong className="text-emerald-400 block mb-1">Value</strong>
                                    ඒ ගුණයේ අගය (red, 20px)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 2: Basic Selectors */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Hash className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-semibold text-slate-200">2. Basic Selectors</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Element */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <h4 className="text-slate-200 font-bold text-sm mb-2">Element Selector</h4>
                                <code className="block bg-slate-900 p-2 rounded text-xs text-emerald-300 mb-2">p {"{ color: red; }"}</code>
                                <p className="text-xs text-slate-500">HTML tag එක කෙලින්ම තෝරා ගනී. සියලුම &lt;p&gt; රතු වේ.</p>
                            </div>

                            {/* Class */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <h4 className="text-slate-200 font-bold text-sm mb-2">Class Selector (.)</h4>
                                <code className="block bg-slate-900 p-2 rounded text-xs text-emerald-300 mb-2">.title {"{ font-weight: bold; }"}</code>
                                <p className="text-xs text-slate-500"><code className="text-orange-300">class="title"</code> ඇති තැන් වලට පමණක් අදාළ වේ.</p>
                            </div>

                            {/* ID */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <h4 className="text-slate-200 font-bold text-sm mb-2">ID Selector (#)</h4>
                                <code className="block bg-slate-900 p-2 rounded text-xs text-emerald-300 mb-2">#header {"{ background: black; }"}</code>
                                <p className="text-xs text-slate-500"><code className="text-orange-300">id="header"</code> ඇති තනි ස්ථානයකට පමණක් අදාළ වේ.</p>
                            </div>

                            {/* Universal & Group */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <h4 className="text-slate-200 font-bold text-sm mb-2">Universal & Group</h4>
                                <div className="space-y-1">
                                    <code className="block bg-slate-900 p-1.5 rounded text-xs text-emerald-300">* {"{ margin: 0; }"} (All)</code>
                                    <code className="block bg-slate-900 p-1.5 rounded text-xs text-emerald-300">h1, p {"{ color: green; }"} (Group)</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 3: Advanced Selectors */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-semibold text-slate-200">3. Advanced Selectors</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-semibold">Descendant (Space)</span>
                                    <code className="text-orange-400 bg-slate-950 px-1 rounded">div p</code>
                                </div>
                                <p className="text-xs text-slate-500">div එක ඇතුළේ ඇති සියලුම p tags.</p>
                            </div>

                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-semibold">Child (&gt;)</span>
                                    <code className="text-orange-400 bg-slate-950 px-1 rounded">div &gt; p</code>
                                </div>
                                <p className="text-xs text-slate-500">div එකේ කෙලින්ම ළමයි (Direct children) වන p tags පමණි.</p>
                            </div>

                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-semibold">Sibling (+)</span>
                                    <code className="text-orange-400 bg-slate-950 px-1 rounded">h1 + p</code>
                                </div>
                                <p className="text-xs text-slate-500">h1 එකට පසුව කෙලින්ම එන p tag එක.</p>
                            </div>

                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-300 font-semibold">Attribute ([])</span>
                                    <code className="text-orange-400 bg-slate-950 px-1 rounded">input[type="text"]</code>
                                </div>
                                <p className="text-xs text-slate-500">type එක text වන input පමණි.</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 4: Colors */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Palette className="w-5 h-5 text-blue-400" />
                            <h3 className="text-lg font-semibold text-slate-200">4. Colors (වර්ණ)</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* HEX */}
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-red-600 border border-slate-700 shadow-sm"></div>
                                <div>
                                    <code className="text-blue-300 text-sm font-bold">#ff0000</code>
                                    <p className="text-xs text-slate-500">HEX Code (Red)</p>
                                </div>
                            </div>

                            {/* RGB */}
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-blue-600 border border-slate-700 shadow-sm"></div>
                                <div>
                                    <code className="text-blue-300 text-sm font-bold">rgb(0, 0, 255)</code>
                                    <p className="text-xs text-slate-500">Red, Green, Blue</p>
                                </div>
                            </div>

                            {/* RGBA */}
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-green-500/50 border border-slate-700 shadow-sm relative">
                                    {/* Checkerboard for transparency illustration */}
                                    <div className="absolute inset-0 -z-10 bg-[url('https://placehold.co/4x4/222/333')] opacity-50"></div>
                                </div>
                                <div>
                                    <code className="text-blue-300 text-sm font-bold">rgba(0, 255, 0, 0.5)</code>
                                    <p className="text-xs text-slate-500">0.5 = 50% Transparency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer / Action Button */}
                <div className="p-6 bg-slate-900 border-t border-slate-800">
                    <button
                        onClick={() => {
                            setCompleted(true);
                            handleDone();
                        }}
                        disabled={completed}
                        className={`group w-full py-3.5 rounded-xl font-bold shadow-lg transition-all duration-200 flex items-center justify-center gap-2
                            ${completed
                            ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white hover:shadow-emerald-500/20"
                        }`}
                    >
                        <span>{completed ? "Completed" : "Mark Part 1 Completed"}</span>
                        {completed ? <CheckCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}