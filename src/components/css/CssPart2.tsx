import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Box, Layout, Move, CheckCircle, Code, Grid } from "lucide-react";

export default function CssPart2({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("css", 2);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            {/* Main Card Container */}
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Box className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            Box Model & Layouts <span className="text-slate-500 text-lg font-normal ml-1">(CSS Part 2)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Box Model, Display Types, Positioning සහ Flexbox</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 1: Box Model Visualizer */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Box className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-slate-200">5. CSS Box Model</h3>
                        </div>

                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
                            <p className="text-slate-300 text-sm mb-6 text-center max-w-lg">
                                සෑම HTML element එකක්ම පෙට්ටියක් (Box) ලෙස සැලකේ. එහි කොටස් 4කි.
                            </p>

                            {/* Visual Box Model */}
                            <div className="relative bg-orange-500/10 border-2 border-dashed border-orange-500/50 p-8 rounded-lg text-center w-full max-w-md">
                                <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-orange-400">Margin (Spacing Outside)</span>

                                <div className="relative bg-yellow-500/10 border-4 border-yellow-500 p-8 rounded-lg">
                                    <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-yellow-500">Border</span>

                                    <div className="relative bg-green-500/10 border border-green-500/30 p-8 rounded-lg">
                                        <span className="absolute top-2 left-2 text-[10px] uppercase font-bold text-green-400">Padding (Spacing Inside)</span>

                                        <div className="bg-blue-500 h-16 flex items-center justify-center rounded text-white font-bold shadow-lg">
                                            Content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 2: Display Types */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Layout className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-slate-200">6. Display Types</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                                <code className="text-purple-400 font-bold mb-2 block">display: block;</code>
                                <div className="space-y-2 mb-3">
                                    <div className="bg-slate-800 h-2 w-full rounded"></div>
                                    <div className="bg-slate-800 h-2 w-full rounded"></div>
                                </div>
                                <p className="text-xs text-slate-400">අලුත් පේළියක පටන් ගනී. Full width ගනී. (Ex: &lt;div&gt;, &lt;h1&gt;)</p>
                            </div>

                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                                <code className="text-purple-400 font-bold mb-2 block">display: inline;</code>
                                <div className="flex gap-2 mb-3">
                                    <div className="bg-slate-800 h-4 w-12 rounded"></div>
                                    <div className="bg-slate-800 h-4 w-8 rounded"></div>
                                    <div className="bg-slate-800 h-4 w-16 rounded"></div>
                                </div>
                                <p className="text-xs text-slate-400">එකම පේළියේ පවතී. Width/Height වෙනස් කළ නොහැක. (Ex: &lt;span&gt;, &lt;a&gt;)</p>
                            </div>

                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                                <code className="text-purple-400 font-bold mb-2 block">display: inline-block;</code>
                                <p className="text-xs text-slate-400">Inline වගේ එකම පේළියේ, නමුත් Block වගේ Size වෙනස් කළ හැක.</p>
                            </div>

                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                                <code className="text-purple-400 font-bold mb-2 block">display: none;</code>
                                <p className="text-xs text-slate-400">සම්පූර්ණයෙන්ම සඟවයි (Remove from layout).</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 3: Positioning */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Move className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-slate-200">7. Positioning</h3>
                        </div>

                        <div className="bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-3">Value</th>
                                    <th className="px-6 py-3">Description</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                <tr>
                                    <td className="px-6 py-4 font-mono text-pink-400">static</td>
                                    <td className="px-6 py-4 text-xs">Default. වෙනස් කළ නොහැක.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-pink-400">relative</td>
                                    <td className="px-6 py-4 text-xs">Normal තැන සිට වෙනස් වේ.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-pink-400">absolute</td>
                                    <td className="px-6 py-4 text-xs">Parent ට සාපේක්ෂව නිදහසේ චලනය වේ.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-pink-400">fixed</td>
                                    <td className="px-6 py-4 text-xs">Screen එකට ඇලී පවතී (No scroll).</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-mono text-pink-400">sticky</td>
                                    <td className="px-6 py-4 text-xs">Scroll කරන විට යම් තැනක ඇලී පවතී.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 4: Flexbox */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Grid className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-semibold text-slate-200">8. Flexbox (Layout System)</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-slate-400 text-sm mb-4">
                                Responsive Layouts සෑදීමට පහසුම ක්‍රමයයි. Parent ට <code className="text-purple-400">display: flex</code> ලබා දෙන්න.
                            </p>

                            {/* Flexbox Simulation */}
                            <div className="mb-4">
                                <div className="text-xs text-slate-500 mb-1 flex justify-between">
                                    <span>Parent Container (display: flex; gap: 10px;)</span>
                                    <span className="text-purple-400">Main Axis ➝</span>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-lg flex gap-3 border border-slate-700">
                                    <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white font-bold shadow">1</div>
                                    <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white font-bold shadow">2</div>
                                    <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white font-bold shadow">3</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <span className="text-pink-400 block font-mono text-xs">justify-content</span>
                                    <span className="text-slate-500 text-xs">Main axis (හරහට) align කිරීමට.</span>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <span className="text-pink-400 block font-mono text-xs">align-items</span>
                                    <span className="text-slate-500 text-xs">Cross axis (උස අතට) align කිරීමට.</span>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <span className="text-pink-400 block font-mono text-xs">flex-direction</span>
                                    <span className="text-slate-500 text-xs">Row (පේළියට) ද Column (කෙලින්) ද යන්න.</span>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <span className="text-pink-400 block font-mono text-xs">gap</span>
                                    <span className="text-slate-500 text-xs">Items අතර පරතරය.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Code Block */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">Flexbox Code Example</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}`}
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