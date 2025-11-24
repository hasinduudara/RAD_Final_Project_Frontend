import { useState } from "react";
import { saveProgress } from "../../services/course";
import { FileCode, Globe, Code, Tag, Layers, Settings, CheckCircle } from "lucide-react";
// Ensure lucide-react is installed

export default function HtmlPart1({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            {/* Main Card Container */}
            <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <FileCode className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                        HTML මූලික දේවල් <span className="text-slate-500 text-lg font-normal ml-1">(Part 1)</span>
                    </h2>
                </div>

                <div className="p-6 space-y-8">

                    {/* Section 1: Definition */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">HTML කියන්නේ මොකද්ද?</h3>
                        </div>
                        <p className="text-slate-300 leading-loose ml-7">
                            <span className="font-bold text-orange-400">HTML</span> (HyperText Markup Language).
                            වෙබ් පිටුවේ headings, images, links, paragraphs වැනි වස්තූන් browser එකට පෙන්වීමට භාවිතා කරන
                            මූලික භාෂාවයි.
                        </p>
                    </div>

                    {/* Section 2: Getting Started */}
                    <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-200 mb-4">HTML ගොනුවක් සාදන පියවර:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-orange-400 text-sm font-bold border border-slate-700">1</span>
                                <span>.html extension එක සහිත ගොනුවක් සාදන්න (උදා: <code className="bg-slate-800 px-1 py-0.5 rounded text-orange-300 text-sm">index.html</code>)</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-orange-400 text-sm font-bold border border-slate-700">2</span>
                                <span>එම ගොනුව Chrome හෝ Firefox වැනි Web Browser එකකින් විවෘත කරන්න.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Template Code */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-orange-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">Basic HTML Template</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300">
{`<!doctype html>
<html lang="si">
  <head>
    <meta charset="utf-8">
    <title>Mata HTML iganna - Udara</title>
  </head>
  <body>
    <h1>ආයුබෝවන්!</h1>
    <p>මේක HTML මුලික උදාහරණයක්.</p>
  </body>
</html>`}
                            </pre>
                        </div>
                    </div>

                    {/* Section 4: Terminology Grid */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-orange-400" />
                            වැදගත් වචන (Terminology)
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Card 1 */}
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-orange-400">
                                    <Tag className="w-4 h-4" />
                                    <span className="font-bold">Tag</span>
                                </div>
                                <code className="bg-slate-900 px-2 py-1 rounded text-sm text-slate-300 block w-fit mb-1">&lt;p&gt;</code>
                                <p className="text-xs text-slate-400 leading-relaxed">විධානයක් (Command). මෙය තනි කොටසකි.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-orange-400">
                                    <Layers className="w-4 h-4" />
                                    <span className="font-bold">Element</span>
                                </div>
                                <code className="bg-slate-900 px-2 py-1 rounded text-sm text-slate-300 block w-fit mb-1">&lt;p&gt;Hello&lt;/p&gt;</code>
                                <p className="text-xs text-slate-400 leading-relaxed">Start tag, Content සහ End tag සියල්ලේ එකතුව.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-orange-400">
                                    <Settings className="w-4 h-4" />
                                    <span className="font-bold">Attribute</span>
                                </div>
                                <code className="bg-slate-900 px-2 py-1 rounded text-sm text-slate-300 block w-fit mb-1">href="..."</code>
                                <p className="text-xs text-slate-400 leading-relaxed">Tag එකට අමතර තොරතුරු ලබා දෙන කොටස.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer / Action Button */}
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
                        {checked ? <CheckCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}