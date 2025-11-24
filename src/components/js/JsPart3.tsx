import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Braces, List, Rocket, CheckCircle, Code, LayoutTemplate } from "lucide-react";

export default function JsPart3({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("js", 3);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Braces className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        Arrays, Objects & DOM <span className="text-slate-500 text-lg font-normal ml-1">(Part 3)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-8">

                    {/* Section 1: Arrays & Objects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Arrays */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                                <List className="w-5 h-5 text-yellow-400" /> Arrays (ලැයිස්තු)
                            </h3>
                            <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
                                <p className="text-xs text-slate-400 mb-2">එකම විචල්‍යයක දත්ත කිහිපයක් ගබඩා කිරීමට.</p>
                                <pre className="font-mono text-sm text-blue-300">
{`let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); 
// Output: Apple`}
                                </pre>
                            </div>
                        </div>

                        {/* Objects */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                                <Braces className="w-5 h-5 text-yellow-400" /> Objects (වස්තූන්)
                            </h3>
                            <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
                                <p className="text-xs text-slate-400 mb-2">Key-Value ආකාරයෙන් දත්ත ගබඩා කිරීමට.</p>
                                <pre className="font-mono text-sm text-blue-300">
{`let car = {
    brand: "Toyota",
    color: "Red"
};
console.log(car.brand);`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: DOM Interaction */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <LayoutTemplate className="w-5 h-5 text-yellow-400" /> The DOM (Document Object Model)
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            DOM එක භාවිතා කර JavaScript මගින් HTML වෙනස් කළ හැක.
                        </p>

                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <Code className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs font-medium text-slate-500 uppercase">DOM Example</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`// HTML: <h1 id="title">Old Text</h1>

let element = document.getElementById("title");
element.innerText = "New Text!";
element.style.color = "red";`}
                                </pre>
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
                        <span>{checked ? "Module Completed" : "Finish JS Module"}</span>
                        {checked ? <CheckCircle className="w-5 h-5" /> : <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                </div>
            </div>
        </div>
    );
}