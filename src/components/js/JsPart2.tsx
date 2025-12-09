import { useState } from "react";
import { saveProgress } from "../../services/course";
import { GitBranch, CheckCircle, Repeat, FunctionSquare, List, Cpu } from "lucide-react";

export default function JsPart2({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("js", 2);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Cpu className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            Logic & Structures <span className="text-slate-500 text-lg font-normal ml-1">(Conditions, Loops, Arrays)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Logic (If/Else), Loops, Functions සහ Array Methods</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 5: Conditions */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <GitBranch className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">5. Conditions (Logic)</h3>
                        </div>



                        [Image of flowchart logic if else switch]


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* IF / ELSE */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-200 font-bold text-sm mb-2 flex justify-between">
                                    <span>If / Else If / Else</span>
                                    <span className="text-[10px] bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded">Ranges</span>
                                </h4>
                                <pre className="font-mono text-xs text-blue-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
{`if (marks >= 75) {
  console.log("A");
} else if (marks >= 65) {
  console.log("B");
} else {
  console.log("C");
}`}
                                </pre>
                            </div>

                            {/* SWITCH */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-200 font-bold text-sm mb-2 flex justify-between">
                                    <span>Switch</span>
                                    <span className="text-[10px] bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded">Exact Values</span>
                                </h4>
                                <pre className="font-mono text-xs text-blue-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
{`switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  default:
    console.log("Unknown");
}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 6: Loops */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Repeat className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">6. Loops (පුනරාවර්තන)</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-yellow-500/30 transition-colors">
                                <code className="text-purple-400 font-bold block mb-1">for (let i=0; i&lt;5; i++)</code>
                                <p className="text-xs text-slate-400">නිශ්චිත වාර ගණනක් සඳහා (Counting).</p>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-yellow-500/30 transition-colors">
                                <code className="text-purple-400 font-bold block mb-1">while (x &lt;= 3)</code>
                                <p className="text-xs text-slate-400">Condition එක true වී තිබෙන තාක්.</p>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-yellow-500/30 transition-colors">
                                <code className="text-green-400 font-bold block mb-1">for (let f of fruits)</code>
                                <p className="text-xs text-slate-400">Arrays ලූප් කිරීමට (Best for Lists).</p>
                            </div>
                            <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-yellow-500/30 transition-colors">
                                <code className="text-green-400 font-bold block mb-1">for (let k in user)</code>
                                <p className="text-xs text-slate-400">Objects ලූප් කිරීමට (Keys).</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 7: Functions */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <FunctionSquare className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">7. Functions</h3>
                        </div>



                        [Image of function machine input output]


                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 space-y-4">
                            {/* Normal vs Arrow */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Normal Function</h4>
                                    <pre className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-xs text-blue-300">
{`function add(a, b) {
  return a + b;
}`}
                                    </pre>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2 flex items-center gap-2">
                                        Arrow Function <span className="bg-yellow-500/20 text-yellow-400 px-1.5 rounded text-[10px]">Modern</span>
                                    </h4>
                                    <pre className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-xs text-blue-300">
{`const add = (a, b) => a + b;`}
                                    </pre>
                                </div>
                            </div>

                            {/* Default Params */}
                            <div className="pt-2">
                                <p className="text-xs text-slate-400 mb-1"><span className="text-yellow-400">Default Parameters:</span> අගයක් නොදුන් විට ගන්නා අගය.</p>
                                <code className="bg-slate-900 px-2 py-1 rounded text-xs text-green-300 font-mono">function greet(name = "User") {"{...}"}</code>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 8: Arrays */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <List className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">8. Array Methods (වැදගත්ම කොටස)</h3>
                        </div>



                        <div className="bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-900">
                                <tr>
                                    <th className="px-4 py-3">Method</th>
                                    <th className="px-4 py-3">Description</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                                <tr>
                                    <td className="px-4 py-3 font-mono text-yellow-400">push() / pop()</td>
                                    <td className="px-4 py-3 text-xs">අගට එකතු කිරීම / අගින් ඉවත් කිරීම.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-emerald-400">map()</td>
                                    <td className="px-4 py-3 text-xs">
                                        සියලු values වෙනස් කර <strong>නව Array එකක්</strong> ලබා දෙයි.
                                        <div className="mt-1 text-slate-500 font-mono text-[10px]">nums.map(n =&gt; n * 2)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-emerald-400">filter()</td>
                                    <td className="px-4 py-3 text-xs">
                                        Condition එකට ගැලපෙන දේවල් පමණක් තෝරා ගනී.
                                        <div className="mt-1 text-slate-500 font-mono text-[10px]">nums.filter(n =&gt; n % 2 === 0)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-mono text-blue-400">find()</td>
                                    <td className="px-4 py-3 text-xs">ගැලපෙන <strong>පළමු</strong> අගය සොයා දෙයි.</td>
                                </tr>
                                </tbody>
                            </table>
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
                        <span>{checked ? "Completed" : "Mark Part 2 Completed"}</span>
                        <CheckCircle className={`w-5 h-5 ${!checked && "group-hover:scale-110 transition-transform"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}