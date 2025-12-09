import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Grid3X3, Type, Image, Smartphone, CheckCircle, Code, LayoutTemplate } from "lucide-react";

export default function CssPart3({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("css", 3);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            {/* Main Card Container */}
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <LayoutTemplate className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            Advanced CSS <span className="text-slate-500 text-lg font-normal ml-1">(Grid, Typography & Responsive)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Complex Layouts, Styling සහ Mobile-Responsive සැකසුම්</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 9: CSS Grid */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Grid3X3 className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">9. CSS Grid Layout</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-slate-300 text-sm mb-4">
                                Grid යනු සංකීර්ණ website layouts සෑදීමට භාවිතා කරන ප්‍රබල පද්ධතියකි. (Rows සහ Columns).
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Code Example */}
                                <div className="space-y-2">
                                    <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-xs text-blue-300">
                                        .container {"{"}<br/>
                                        &nbsp;&nbsp;<span className="text-purple-400">display</span>: grid;<br/>
                                        &nbsp;&nbsp;<span className="text-purple-400">grid-template-columns</span>: 1fr 1fr 1fr;<br/>
                                        &nbsp;&nbsp;<span className="text-purple-400">gap</span>: 10px;<br/>
                                        {"}"}
                                    </div>
                                    <p className="text-xs text-slate-500">
                                        <code className="text-orange-400">1fr</code> (fraction) මගින් ඉඩ සමානව බෙදා ගනී.
                                    </p>
                                </div>

                                {/* Visual Demo */}
                                <div>
                                    <div className="text-xs text-slate-500 mb-2 text-center">Output Preview</div>
                                    <div className="grid grid-cols-3 gap-2 p-2 bg-slate-800/50 rounded border border-slate-700">
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">1fr</div>
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">1fr</div>
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">1fr</div>
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">Cell</div>
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">Cell</div>
                                        <div className="bg-orange-500/20 border border-orange-500/50 h-10 rounded flex items-center justify-center text-orange-200 text-xs">Cell</div>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Areas */}
                            <div className="mt-4 pt-4 border-t border-slate-800">
                                <h4 className="text-sm font-semibold text-slate-300 mb-2">Grid Template Areas</h4>
                                <p className="text-xs text-slate-400 mb-2">Layout එක සිතියමක් (Map) ලෙස ලිවීමේ ක්‍රමයයි.</p>
                                <code className="block bg-slate-900 p-2 rounded text-xs text-emerald-300 whitespace-pre-wrap">
                                    grid-template-areas:<br/>
                                    &nbsp;&nbsp;"header header header"<br/>
                                    &nbsp;&nbsp;"sidebar content content"<br/>
                                    &nbsp;&nbsp;"footer footer footer";
                                </code>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 10: Typography */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Type className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">10. Typography (අකුරු සැකසුම්)</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold text-xs block mb-1">font-size: 18px;</code>
                                <p className="text-xs text-slate-400">අකුරු වල ප්‍රමාණය.</p>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold text-xs block mb-1">font-family: 'Poppins', sans-serif;</code>
                                <p className="text-xs text-slate-400">අකුරු විලාසය (Font style).</p>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold text-xs block mb-1">line-height: 1.6;</code>
                                <p className="text-xs text-slate-400">පේළි අතර පරතරය (Readability සඳහා වැදගත්).</p>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold text-xs block mb-1">text-align: center;</code>
                                <p className="text-xs text-slate-400">වචන පිහිටන ස්ථානය (Left / Center / Right).</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 11: Backgrounds & Borders */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">11. Backgrounds & Borders</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                {/* Explanation */}
                                <div className="flex-1 space-y-3 w-full">
                                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                        <code className="text-xs text-blue-300">background-image: url('img.jpg');</code>
                                    </div>
                                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                        <code className="text-xs text-blue-300">background-size: cover;</code>
                                        <span className="text-[10px] text-slate-500 ml-2">(Box එක සම්පූර්ණයෙන් ආවරණය කරයි)</span>
                                    </div>
                                    <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                        <code className="text-xs text-blue-300">border-radius: 10px;</code>
                                        <span className="text-[10px] text-slate-500 ml-2">(මුලු රවුම් කරයි)</span>
                                    </div>
                                </div>

                                {/* Visual Demo */}
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-[10px] text-white font-bold shadow-lg">
                                        Radius: 10px
                                    </div>
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-lg">
                                        Radius: 50%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 12: Responsive Design */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">12. Responsive Design</h3>
                        </div>

                        <p className="text-slate-400 text-sm">
                            වෙබ් අඩවිය Phone, Tablet සහ Desktop යන සියල්ලටම ගැලපෙන ලෙස සකස් කිරීම.
                        </p>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-2 mb-3">
                                <Code className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-semibold text-slate-200">Media Queries (වැදගත්ම කොටස)</span>
                            </div>

                            <div className="bg-slate-900 p-4 rounded border border-slate-800 font-mono text-sm overflow-x-auto">
                                <span className="text-purple-400">@media</span> (max-width: 600px) {"{"}<br/>
                                &nbsp;&nbsp;.box {"{"}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px;<br/>
                                &nbsp;&nbsp;{"}"}<br/>
                                {"}"}
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                                👉 Screen width එක 600px ට වඩා අඩු වූ විට (Mobile Phones) මෙම styles ක්‍රියාත්මක වේ.
                            </p>
                        </div>

                        {/* Units Table */}
                        <div className="overflow-hidden rounded-xl border border-slate-800">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-900">
                                <tr>
                                    <th className="px-4 py-2">Unit</th>
                                    <th className="px-4 py-2">Description</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                                <tr>
                                    <td className="px-4 py-3 font-mono text-orange-400">%</td>
                                    <td className="px-4 py-3 text-xs">Percentage (මව් කොටසට සාපේක්ෂව).</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-orange-400">rem</td>
                                    <td className="px-4 py-3 text-xs">Root element font-size එකට සාපේක්ෂව.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-orange-400">vw / vh</td>
                                    <td className="px-4 py-3 text-xs">Viewport Width/Height (Screen එකේ ප්‍රමාණයට).</td>
                                </tr>
                                </tbody>
                            </table>
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
                        <span>{completed ? "CSS Course Completed" : "Finish CSS Course ✔️"}</span>
                        {completed ? <CheckCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}