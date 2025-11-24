import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Tag, CheckCircle, Type, Link as LinkIcon, Image as ImageIcon, List, Box, Layers, Code, Hash } from "lucide-react";
// Ensure lucide-react is installed

export default function HtmlPart2({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 2);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Tag className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        Tags, Attributes & Lists <span className="text-slate-500 text-lg font-normal ml-1">(HTML Part 2)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 5: Common Tags Grid */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <span className="text-orange-400">#</span> Common Tags
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                                <Type className="w-5 h-5 text-blue-400" />
                                <div>
                                    <code className="text-orange-300 font-bold">&lt;h1&gt;...&lt;h6&gt;</code>
                                    <p className="text-xs text-slate-400">Headings (මාතෘකා)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                                <Type className="w-5 h-5 text-slate-400" />
                                <div>
                                    <code className="text-orange-300 font-bold">&lt;p&gt;</code>
                                    <p className="text-xs text-slate-400">Paragraph (ඡේද)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                                <LinkIcon className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <code className="text-orange-300 font-bold">&lt;a&gt;</code>
                                    <p className="text-xs text-slate-400">Links (සබැඳි)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                                <ImageIcon className="w-5 h-5 text-pink-400" />
                                <div>
                                    <code className="text-orange-300 font-bold">&lt;img&gt;</code>
                                    <p className="text-xs text-slate-400">Images (පින්තූර)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800 sm:col-span-2">
                                <List className="w-5 h-5 text-yellow-400" />
                                <div>
                                    <code className="text-orange-300 font-bold">&lt;ul&gt; / &lt;ol&gt;</code>
                                    <p className="text-xs text-slate-400">Unordered & Ordered Lists (ලැයිස්තු)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 6: Attributes */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <span className="text-orange-400">#</span> Attributes (ගුණාංග)
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['href', 'src', 'id', 'class'].map((attr) => (
                                <span key={attr} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    {attr}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Attributes මගින් elements වලට අමතර තොරතුරු (additional info) ලබා දේ. උදාහරණයක් ලෙස පින්තූරයක මූලාශ්‍රය (<code className="text-orange-300">src</code>) හෝ ලින්ක් එකක් යන තැන (<code className="text-orange-300">href</code>).
                        </p>
                    </div>

                    {/* Section 7: Inline vs Block Visualizer */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-orange-400" /> Inline vs Block Elements
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Block Visual */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-2 mb-3 text-red-400 font-semibold">
                                    <Box className="w-5 h-5" /> Block Elements
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full bg-red-500/20 border border-red-500/50 p-2 text-center text-xs text-red-200 rounded">
                                        &lt;div&gt; Full Width
                                    </div>
                                    <div className="w-full bg-red-500/20 border border-red-500/50 p-2 text-center text-xs text-red-200 rounded">
                                        &lt;h1&gt; Full Width
                                    </div>
                                    <div className="w-full bg-red-500/20 border border-red-500/50 p-2 text-center text-xs text-red-200 rounded">
                                        &lt;p&gt; Full Width
                                    </div>
                                </div>
                                <p className="mt-3 text-xs text-slate-500">අලුත් පේළියකින් පටන් ගනී. සම්පූර්ණ පළල (width) ලබා ගනී.</p>
                            </div>

                            {/* Inline Visual */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-2 mb-3 text-green-400 font-semibold">
                                    <Hash className="w-5 h-5" /> Inline Elements
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="bg-green-500/20 border border-green-500/50 px-3 py-2 text-xs text-green-200 rounded">
                                        &lt;span&gt;
                                    </div>
                                    <div className="bg-green-500/20 border border-green-500/50 px-3 py-2 text-xs text-green-200 rounded">
                                        &lt;a&gt; Link
                                    </div>
                                    <div className="bg-green-500/20 border border-green-500/50 px-3 py-2 text-xs text-green-200 rounded">
                                        &lt;img&gt;
                                    </div>
                                </div>
                                <p className="mt-9 text-xs text-slate-500">අවශ්‍ය ඉඩ ප්‍රමාණය පමණක් ගනී. එකම පේළියේ පවතී.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 8: Nesting Code */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-orange-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">Nesting Example</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`<p>
   මෙතන <strong>වාඩි</strong> අකුරු.
</p>`}
                            </pre>
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
                        <span>{completed ? "Completed" : "Mark Part 2 Completed"}</span>
                        {completed ? <CheckCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}