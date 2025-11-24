import { useState } from "react";
import { saveProgress } from "../../services/course";
import { Rocket, CheckCircle, Code, Monitor, Terminal, FileCode, AlertCircle, Fingerprint, Image } from "lucide-react";
// Ensure lucide-react is installed

export default function HtmlPart3({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 3);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Rocket className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        Example Page & Tips <span className="text-slate-500 text-lg font-normal ml-1">(HTML Part 3)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 10: Example Page Code */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">Full Example Page</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            මෙන්න සරල, නමුත් නිවැරදි structure එක සහිත HTML පිටුවක්:
                        </p>

                        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                                <Code className="w-4 h-4 text-orange-400" />
                                <span className="text-xs font-medium text-slate-500 uppercase">index.html</span>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300">
{`<!doctype html>
<html>
  <body>
    
    <header>
      <h1>මගේ පළමු වෙබ් පිටුව</h1>
    </header>

    <section>
      <p>මෙය HTML උදාහරණයකි.</p>
    </section>

  </body>
</html>`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Section 11: Learning Tools Grid */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <Monitor className="w-5 h-5 text-orange-400" />
                            කොහෙන්ද ඉගෙන ගන්නේ? (Tools)
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Tool 1 */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-3 hover:border-orange-500/30 transition-colors">
                                <div className="p-3 rounded-full bg-slate-900 border border-slate-800">
                                    <FileCode className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-sm">Create & Test</h4>
                                    <p className="text-xs text-slate-400 mt-1">index.html ගොනුවක් සාදා එහි code ලියන්න.</p>
                                </div>
                            </div>

                            {/* Tool 2 */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-3 hover:border-orange-500/30 transition-colors">
                                <div className="p-3 rounded-full bg-slate-900 border border-slate-800">
                                    <Terminal className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-sm">VS Code</h4>
                                    <p className="text-xs text-slate-400 mt-1">Professional coding සඳහා VS Code භාවිතා කරන්න.</p>
                                </div>
                            </div>

                            {/* Tool 3 */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex flex-col items-center text-center gap-3 hover:border-orange-500/30 transition-colors">
                                <div className="p-3 rounded-full bg-slate-900 border border-slate-800">
                                    <Monitor className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-sm">DevTools (F12)</h4>
                                    <p className="text-xs text-slate-400 mt-1">Browser එකේ වැරදි බලාගන්න F12 ඔබන්න.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 12: Pro Tips (Checklist) */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-400" />
                            Best Practices (කෙටි ඉඟි)
                        </h3>

                        <div className="bg-slate-950/30 rounded-xl p-1">
                            <div className="divide-y divide-slate-800/50">
                                <div className="p-4 flex gap-4 items-start">
                                    <AlertCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-slate-200 font-medium text-sm">Tags අනිවාර්යයෙන් Close කරන්න</h4>
                                        <p className="text-xs text-slate-500 mt-0.5">Start tag එකක් තිබේ නම්, End tag එකක් තිබිය යුතුයි. (Ex: <code className="text-orange-300">&lt;/p&gt;</code>)</p>
                                    </div>
                                </div>

                                <div className="p-4 flex gap-4 items-start">
                                    <Image className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-slate-200 font-medium text-sm">Images වලට 'alt' attribute එක යොදන්න</h4>
                                        <p className="text-xs text-slate-500 mt-0.5">රූපය load නොවුනහොත් පෙන්වීමට නමක් දීම වැදගත්ය.</p>
                                    </div>
                                </div>

                                <div className="p-4 flex gap-4 items-start">
                                    <Fingerprint className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-slate-200 font-medium text-sm">ID එක Unique විය යුතුයි</h4>
                                        <p className="text-xs text-slate-500 mt-0.5">එකම ID එකක් element දෙකකට භාවිතා නොකරන්න.</p>
                                    </div>
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
                        <span>{completed ? "Course Completed" : "Finish Course ✔️"}</span>
                        {completed ? <CheckCircle className="w-5 h-5" /> : <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}