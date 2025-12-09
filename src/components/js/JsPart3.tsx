import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Braces, MousePointerClick, Database, Globe, CheckCircle, Rocket, Server } from "lucide-react";

export default function JsPart3({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("js", 3);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <Braces className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            Advanced JS <span className="text-slate-500 text-lg font-normal ml-1">(DOM, Storage & Async)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Objects, Event Listeners, Local Storage සහ API Calls</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 9: Objects & Methods */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Braces className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">9. Objects & Methods</h3>
                        </div>

                        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                            <p className="text-xs text-slate-400 mb-3">
                                Object එකක් තුළ Function එකක් ලිවූ විට එය <strong>Method</strong> එකක් ලෙස හැඳින්වේ.
                            </p>
                            <pre className="font-mono text-xs md:text-sm text-blue-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
{`let user = {
  name: "Kamal",
  age: 22,
  sayHi() {
    console.log("Hi!");
  }
};

user.sayHi(); // Output: Hi!`}
                            </pre>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 10: DOM Manipulation */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MousePointerClick className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">10. DOM & Events</h3>
                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-300 text-sm font-bold mb-2">Changing Content</h4>
                                <pre className="font-mono text-xs text-blue-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
{`document.getElementById("title")
  .innerText = "Hello!";`}
                                </pre>
                            </div>

                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-300 text-sm font-bold mb-2">Event Listener (Click)</h4>
                                <pre className="font-mono text-xs text-blue-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto">
{`btn.addEventListener("click", () => {
  alert("Clicked!");
});`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 11: JSON & Storage */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Database className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">11. JSON & Local Storage</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 flex flex-col gap-4">
                            <p className="text-sm text-slate-400">
                                Browser එක තුළ දත්ත save කර තබා ගැනීමට <code className="text-yellow-400">localStorage</code> භාවිතා කරයි. දත්ත හුවමාරුවේදී Object එක Text බවට පත් කිරීමට <code className="text-yellow-400">JSON</code> භාවිතා වේ.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                                <div className="bg-slate-900 p-2 rounded border border-slate-800 text-green-300">
                                    JSON.stringify(obj) <span className="text-slate-500">// Object ➝ Text</span>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800 text-green-300">
                                    JSON.parse(jsonText) <span className="text-slate-500">// Text ➝ Object</span>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800 text-orange-300">
                                    localStorage.setItem("key", "value")
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800 text-orange-300">
                                    localStorage.getItem("key")
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 12: Async JS */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-slate-200">12. Async JavaScript (Fetch API)</h3>
                        </div>



                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-sm text-slate-400 mb-4">
                                Server එකකින් දත්ත ලබා ගැනීමට (API Calls) <code className="text-purple-400">async / await</code> භාවිතා කරයි.
                            </p>

                            <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden relative">
                                <div className="absolute top-3 right-3">
                                    <Server className="w-4 h-4 text-slate-600" />
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <pre className="font-mono text-xs md:text-sm text-blue-300 leading-relaxed">
{`async function loadData() {
  // 1. Fetch data from Server
  const res = await fetch("https://api.example.com");
  
  // 2. Convert response to JSON
  const data = await res.json();
  
  console.log(data);
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
                        <span>{checked ? "JS Course Completed" : "Finish JavaScript Course ✔️"}</span>
                        {checked ? <CheckCircle className="w-5 h-5" /> : <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                </div>
            </div>
        </div>
    );
}