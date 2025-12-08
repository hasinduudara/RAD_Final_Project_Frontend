import { useState } from "react";
import { saveProgress } from "../../services/course";
import {
    FileCode,
    Layout,
    Type,
    Link as LinkIcon,
    Image as ImageIcon,
    CheckCircle,
    Code
} from "lucide-react";

export default function HtmlPart1({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 1);
        onDone();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 rounded-2xl">
            {/* Main Card Container */}
            <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Section */}
                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                        <FileCode className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
                            HTML මූලික කොටස් <span className="text-slate-500 text-lg font-normal ml-1">(Basic Structure & Tags)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Document Structure, Text, Links, සහ Images</p>
                    </div>
                </div>

                <div className="p-6 space-y-8">

                    {/* 1. Document Structure */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Layout className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">1. Document Structure</h3>
                        </div>

                        <p className="text-slate-400 text-sm mb-4 ml-7">
                            HTML පිටුවක අනිවාර්යයෙන්ම තිබිය යුතු කොටස් 4 ක් ඇත.
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-full max-w-md">
                                <img
                                    src="/src/assets/HTML/basic-structure.png"
                                    alt="HTML document structure diagram"
                                    className="w-full rounded-lg border border-slate-800"
                                />
                            </div>
                            <p className="text-slate-500 text-xs">Diagram: &lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* DOCTYPE */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold block mb-2">&lt;!DOCTYPE html&gt;</code>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Browser එකට මෙය <strong>HTML5</strong> ගොනුවක් බව දන්වයි. මෙය සැමවිටම ඉහළම පේළියේ තිබිය යුතුය.
                                </p>
                            </div>

                            {/* HTML */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold block mb-2">&lt;html&gt;...&lt;/html&gt;</code>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    මුළු පිටුවේම content එක ඇත්තේ මෙහි ඇතුළේය. Language එක දැක්වීමට <code className="text-blue-300">lang="si"</code> භාවිතා කරයි.
                                </p>
                            </div>

                            {/* HEAD */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold block mb-2">&lt;head&gt;...&lt;/head&gt;</code>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    User ට කෙලින්ම නොපෙනෙන, එහෙත් browser එකට වැදගත් settings (Title, Meta data, SEO) මෙහි ඇත.
                                </p>
                            </div>

                            {/* BODY */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-colors">
                                <code className="text-orange-400 font-bold block mb-2">&lt;body&gt;...&lt;/body&gt;</code>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    User ට screen එකේ පෙනෙන සියලුම දේවල් (Headings, Paragraphs, Images) ලියන්නේ මෙතකය.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 2. Headings & Text Formatting */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Type className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">2. Headings & Formatting</h3>
                        </div>

                        <div className="bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden">
                            <table className="w-full text-sm text-left text-slate-300">
                                <thead className="text-xs text-slate-400 uppercase bg-slate-900 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-3">Tag</th>
                                    <th className="px-6 py-3">විස්තරය</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                <tr className="hover:bg-slate-900/50">
                                    <td className="px-6 py-4 font-mono text-orange-300">&lt;h1&gt; - &lt;h6&gt;</td>
                                    <td className="px-6 py-4">
                                        මාතෘකා (Headings). <br/>
                                        <span className="text-xs text-slate-500">H1 ලොකුම අකුරු, H6 කුඩාම අකුරු.</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-900/50">
                                    <td className="px-6 py-4 font-mono text-orange-300">&lt;p&gt;</td>
                                    <td className="px-6 py-4">සාමාන්‍ය ඡේද (Paragraphs).</td>
                                </tr>
                                <tr className="hover:bg-slate-900/50">
                                    <td className="px-6 py-4 font-mono text-orange-300">&lt;strong&gt;</td>
                                    <td className="px-6 py-4 font-bold text-slate-200">Bold (තද) අකුරු සඳහා.</td>
                                </tr>
                                <tr className="hover:bg-slate-900/50">
                                    <td className="px-6 py-4 font-mono text-orange-300">&lt;em&gt;</td>
                                    <td className="px-6 py-4 italic text-slate-400">Italic (ඇල) අකුරු සඳහා.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 3. Links & Anchors */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <LinkIcon className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">3. Links (Anchors)</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 space-y-4">
                            <div>
                                <p className="text-slate-300 mb-2 text-sm">වෙනත් පිටුවකට යාමට <code className="text-orange-400">&lt;a&gt;</code> tag එක භාවිතා කරයි.</p>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-sm text-blue-300">
                                    &lt;a <span className="text-orange-400">href</span>="https://google.com"&gt; Google වෙත යන්න &lt;/a&gt;
                                </div>
                            </div>

                            <div className="flex gap-3 text-sm text-slate-400 bg-slate-900/50 p-3 rounded-lg">
                                <span className="text-orange-400 font-bold whitespace-nowrap">target="_blank"</span>
                                <span>භාවිතා කළ විට Link එක <span className="text-slate-200">New Tab</span> එකක open වේ.</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* 4. Images */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <ImageIcon className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">4. Images</h3>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-full max-w-md">
                                <img
                                    src="/src/assets/HTML/image-link.png"
                                    alt="HTML add Image"
                                    className="w-full rounded-lg border border-slate-800"
                                />
                            </div>
                            {/*<p className="text-slate-500 text-xs">Diagram: &lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</p>*/}
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-slate-300 mb-3 text-sm">
                                පින්තූරයක් එක් කිරීමට <code className="text-orange-400">&lt;img&gt;</code> භාවිතා කරයි. මෙය <strong>Self-closing</strong> tag එකකි.
                            </p>

                            <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-sm mb-3">
                                <span className="text-blue-300">&lt;img </span>
                                <span className="text-orange-400">src</span>
                                <span className="text-blue-300">="cat.jpg" </span>
                                <span className="text-orange-400">alt</span>
                                <span className="text-blue-300">="බළලෙක්ගේ පින්තූරයක්" /&gt;</span>
                            </div>

                            <ul className="text-sm space-y-2 text-slate-400 ml-4 list-disc">
                                <li><strong className="text-orange-400">src:</strong> පින්තූරය තිබෙන තැන (Location).</li>
                                <li><strong className="text-orange-400">alt:</strong> පින්තූරය load නොවුණොත් පෙන්වන නම (SEO වලට වැදගත්).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Final Code Example */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mt-8">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">සම්පූර්ණ උදාහරණය</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300 leading-relaxed">
{`<!DOCTYPE html>
<html lang="si">
  <head>
    <meta charset="UTF-8">
    <title>My First HTML Page</title>
  </head>
  <body>

    <h1>ආයුබෝවන්!</h1>
    <p>මම <strong>HTML</strong> ඉගෙන ගන්නවා.</p>

    <h2>Link Example</h2>
    <a href="https://google.com" target="_blank">Google වෙත යන්න</a>

    <h2>Image Example</h2>
    <img src="cat.jpg" alt="බළලුwa photo" width="200">

  </body>
</html>`}
                            </pre>
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