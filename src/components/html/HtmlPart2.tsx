import { useState } from "react";
import { saveProgress } from "../../services/course";
import {
    List,
    Table,
    FormInput,
    Video,
    CheckCircle,
    Code,
    Music,
    PlayCircle,
    FileCode
} from "lucide-react";

export default function HtmlPart2({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 2);
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
                            Lists, Tables & Forms <span className="text-slate-500 text-lg font-normal ml-1">(HTML Part 2)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">ලැයිස්තු, වගු, ෆෝරම් සහ මල්ටිමීඩියා</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 1: Lists */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <List className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">1. Lists (ලැයිස්තු)</h3>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-full max-w-md">
                                <img
                                    src="/src/assets/HTML/lists.png"
                                    alt="HTML Lists"
                                    className="w-full rounded-lg border border-slate-800"
                                />
                            </div>
                            {/*<p className="text-slate-500 text-xs">Diagram: &lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</p>*/}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Unordered List */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-slate-800 p-1 rounded text-xs">&lt;ul&gt;</span> Unordered List
                                </h4>
                                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 ml-2">
                                    <li>Bullet points භාවිතා වේ.</li>
                                    <li>අනුපිළිවෙලක් නැත.</li>
                                </ul>
                                <div className="mt-3 bg-slate-900 p-2 rounded border border-slate-800 font-mono text-xs text-blue-300">
                                    &lt;ul&gt;<br/>
                                    &nbsp;&nbsp;&lt;li&gt;Apple&lt;/li&gt;<br/>
                                    &nbsp;&nbsp;&lt;li&gt;Mango&lt;/li&gt;<br/>
                                    &lt;/ul&gt;
                                </div>
                            </div>

                            {/* Ordered List */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-slate-800 p-1 rounded text-xs">&lt;ol&gt;</span> Ordered List
                                </h4>
                                <ol className="list-decimal list-inside text-slate-300 text-sm space-y-1 ml-2">
                                    <li>ඉලක්කම් (1, 2, 3...) භාවිතා වේ.</li>
                                    <li>අනුපිළිවෙලක් ඇත.</li>
                                </ol>
                                <div className="mt-3 bg-slate-900 p-2 rounded border border-slate-800 font-mono text-xs text-blue-300">
                                    &lt;ol&gt;<br/>
                                    &nbsp;&nbsp;&lt;li&gt;Wake up&lt;/li&gt;<br/>
                                    &nbsp;&nbsp;&lt;li&gt;Eat&lt;/li&gt;<br/>
                                    &lt;/ol&gt;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 2: Tables */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Table className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">2. Tables (වගු)</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Table Explanation */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <code className="text-orange-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">&lt;table&gt;</code>
                                        <span>වගුවේ ප්‍රධාන කොටස (Wrapper)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <code className="text-orange-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">&lt;tr&gt;</code>
                                        <span>Table Row (පේළිය)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <code className="text-orange-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">&lt;th&gt;</code>
                                        <span>Table Header (තද අකුරු - මැදට)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <code className="text-orange-400 font-bold bg-slate-900 px-1.5 py-0.5 rounded">&lt;td&gt;</code>
                                        <span>Table Data (සාමාන්‍ය දත්ත)</span>
                                    </div>
                                </div>

                                {/* Table Preview */}
                                <div className="border border-slate-700 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm text-left text-slate-400">
                                        <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                                        <tr>
                                            <th className="px-4 py-2 border-r border-slate-700">Name</th>
                                            <th className="px-4 py-2">Age</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-slate-900">
                                        <tr className="border-b border-slate-800">
                                            <td className="px-4 py-2 border-r border-slate-800">Kasun</td>
                                            <td className="px-4 py-2">22</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-r border-slate-800">Nimal</td>
                                            <td className="px-4 py-2">25</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 3: Forms */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <FormInput className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">3. Forms & Inputs</h3>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
                            <p className="text-slate-400 text-sm mb-4">
                                User ගෙන් දත්ත ලබා ගැනීමට <code className="text-orange-400">&lt;form&gt;</code> සහ <code className="text-orange-400">&lt;input&gt;</code> භාවිතා කරයි.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Text Input</span>
                                    <code className="text-blue-300 text-sm">&lt;input type="text"&gt;</code>
                                </div>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Password Input</span>
                                    <code className="text-blue-300 text-sm">&lt;input type="password"&gt;</code>
                                </div>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Radio Button</span>
                                    <code className="text-blue-300 text-sm">&lt;input type="radio"&gt;</code>
                                </div>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Submit Button</span>
                                    <code className="text-blue-300 text-sm">&lt;input type="submit"&gt;</code>
                                </div>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Dropdown List</span>
                                    <code className="text-blue-300 text-sm">&lt;select&gt;...&lt;option&gt;</code>
                                </div>
                                <div className="bg-slate-900 p-3 rounded border border-slate-800 flex flex-col gap-1">
                                    <span className="text-xs text-slate-500">Large Text Area</span>
                                    <code className="text-blue-300 text-sm">&lt;textarea&gt;</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 4: Multimedia */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Video className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">4. Multimedia (Audio & Video)</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Audio */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-2 mb-2 text-slate-300">
                                    <Music className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-semibold">Audio</span>
                                </div>
                                <pre className="bg-slate-900 p-3 rounded border border-slate-800 text-xs font-mono text-blue-300 overflow-x-auto">
{`<audio controls>
  <source src="song.mp3">
</audio>`}
                                </pre>
                            </div>

                            {/* Video */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <div className="flex items-center gap-2 mb-2 text-slate-300">
                                    <PlayCircle className="w-4 h-4 text-pink-400" />
                                    <span className="text-sm font-semibold">Video</span>
                                </div>
                                <pre className="bg-slate-900 p-3 rounded border border-slate-800 text-xs font-mono text-blue-300 overflow-x-auto">
{`<video width="300" controls>
  <source src="movie.mp4">
</video>`}
                                </pre>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 ml-2">* <code className="text-orange-400">controls</code> attribute එක මගින් Play/Pause buttons පෙන්වයි.</p>
                    </div>

                    {/* Final Example Code */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mt-8">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">සම්පූර්ණ උදාහරණය (Full Demo Page)</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-sm text-blue-300 leading-relaxed">
{`<!DOCTYPE html>
<html>
<head>
  <title>HTML Basics Demo</title>
</head>
<body>

  <h1>HTML Basics Demo</h1>

  <h2>My Favourite Foods (List)</h2>
  <ul>
    <li>Rice</li>
    <li>Kottu</li>
  </ul>

  <h2>Student Table</h2>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Kasun</td>
      <td>21</td>
    </tr>
  </table>

  <h2>Contact Form</h2>
  <form>
    <label>Name:</label>
    <input type="text">
    <br>
    <label>Message:</label>
    <textarea></textarea>
    <br>
    <button type="submit">Send</button>
  </form>

  <h2>Video Example</h2>
  <video width="300" controls>
    <source src="movie.mp4" type="video/mp4">
  </video>

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