import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Terminal, CheckCircle, GitBranch, PlayCircle, Code } from "lucide-react";

export default function JsPart2({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("js", 2);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Terminal className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        Functions & Logic <span className="text-slate-500 text-lg font-normal ml-1">(Part 2)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-8">

                    {/* Intro */}
                    <p className="text-slate-300 leading-loose">
                        JavaScript වල බලවත්ම කොටස වන්නේ යම් කොන්දේසියක් මත තීරණ ගැනීම (Logic) සහ නැවත නැවත භාවිතා කළ හැකි කේත ලිවීම (Functions) යි.
                    </p>

                    {/* Section 1: Functions */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <PlayCircle className="w-5 h-5 text-yellow-400" /> Functions (ශ්‍රිත)
                        </h3>
                        <p className="text-slate-400 text-sm mb-2">
                            යම් කාර්යයක් කිරීමට ලියන Code කොටසකි. එයට නමක් දී අවශ්‍ය ඕනෑම වෙලාවක "call" කළ හැක.
                        </p>

                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <Code className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs font-medium text-slate-500 uppercase">Function Example</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`function sayHello(name) {
    return "Hello " + name;
}

// Function call කිරීම
let msg = sayHello("Amal"); 
console.log(msg); // Output: Hello Amal`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: If / Else Logic */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <GitBranch className="w-5 h-5 text-yellow-400" /> Logic (If / Else)
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Visual Logic Block */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex flex-col justify-center">
                                <div className="text-center space-y-2">
                                    <div className="inline-block px-3 py-1 bg-slate-800 rounded text-yellow-400 font-mono text-sm">if (condition)</div>
                                    <div className="h-4 w-0.5 bg-slate-700 mx-auto"></div>
                                    <div className="flex justify-center gap-4">
                                        <div className="text-green-400 text-xs text-center border border-green-900/50 bg-green-900/10 p-2 rounded">True ✅<br/>Do This</div>
                                        <div className="text-red-400 text-xs text-center border border-red-900/50 bg-red-900/10 p-2 rounded">False ❌<br/>Do Else</div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Logic Block */}
                            <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                                <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}`}
                                </pre>
                                </div>
                            </div>
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