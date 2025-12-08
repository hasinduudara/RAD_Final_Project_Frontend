import { useState } from "react";
import { saveProgress } from "../../services/course";
import {
    LayoutTemplate,
    Tag,
    BoxSelect,
    Search,
    CheckCircle,
    Code,
    Globe,
    Smartphone,
    Eye,
    Layers
} from "lucide-react";

export default function HtmlPart3({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 3);
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
                            Semantic HTML & Best Practices <span className="text-slate-500 text-lg font-normal ml-1">(Part 3)</span>
                        </h2>
                        <p className="text-slate-400 text-sm">Structure, SEO, Accessibility සහ Layouts</p>
                    </div>
                </div>

                <div className="p-6 space-y-10">

                    {/* Section 1: Semantic HTML Visualizer */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">1. Semantic HTML Structure</h3>
                        </div>

                        <p className="text-sm text-slate-400">
                            Semantic HTML කියන්නේ Browser සහ Search Engines වලට මේ කොටසේ තේරුම (meaning) මොකක්ද කියලා කියන tags යි.
                        </p>

                        {/* Visual Representation of a Page */}
                        <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-950/50 p-4 flex flex-col gap-2 font-mono text-sm">

                            {/* Header */}
                            <div className="w-full bg-orange-500/10 border border-orange-500/30 text-orange-300 p-2 text-center rounded">
                                &lt;header&gt; Logo, Title, Banner
                            </div>

                            {/* Nav */}
                            <div className="w-full bg-blue-500/10 border border-blue-500/30 text-blue-300 p-2 text-center rounded">
                                &lt;nav&gt; Home | About | Services
                            </div>

                            <div className="flex flex-col md:flex-row gap-2">
                                {/* Main */}
                                <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-4 rounded flex flex-col gap-2">
                                    <div className="text-center font-bold mb-2">&lt;main&gt; Main Content</div>

                                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 text-xs rounded">
                                        &lt;section&gt; Services
                                    </div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 text-xs rounded">
                                        &lt;article&gt; Blog Post / News
                                    </div>
                                </div>

                                {/* Aside (Optional, implied context) */}
                                <div className="md:w-1/4 bg-slate-800/50 border border-slate-700 text-slate-400 p-2 text-center rounded flex items-center justify-center text-xs">
                                    Sidebar
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="w-full bg-purple-500/10 border border-purple-500/30 text-purple-300 p-2 text-center rounded">
                                &lt;footer&gt; Copyright © 2025
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 2: Class vs ID */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">2. Class vs ID</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-blue-400 font-bold mb-2">Class (.)</h4>
                                <p className="text-slate-400 text-sm mb-2">Styles apply කිරීමට සහ Group කිරීමට.</p>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>එකම පිටුවේ කිහිප වරක් භාවිතා කළ හැක.</li>
                                    <li>JS/CSS වලදී <code className="text-orange-300">.classname</code> ලෙස තෝරා ගනී.</li>
                                </ul>
                                <code className="block mt-2 bg-slate-900 p-1.5 rounded text-xs text-blue-300">class="red-text big"</code>
                            </div>

                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-orange-400 font-bold mb-2">ID (#)</h4>
                                <p className="text-slate-400 text-sm mb-2">Unique Identifier එකක් ලෙස.</p>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>එක පිටුවක එක ID එකක් පමණක් තිබිය හැක.</li>
                                    <li>JS/CSS වලදී <code className="text-orange-300">#idname</code> ලෙස තෝරා ගනී.</li>
                                </ul>
                                <code className="block mt-2 bg-slate-900 p-1.5 rounded text-xs text-orange-300">id="main-title"</code>
                            </div>
                        </div>

                        {/* Data Attributes */}
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-sm flex items-center gap-3">
                            <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs font-mono">data-*</span>
                            <span className="text-slate-400 text-xs">JS සඳහා custom data store කිරීමට. (Ex: <code className="text-slate-300">data-product-id="15"</code>)</span>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 3: Block vs Inline & Containers */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <BoxSelect className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">3. Layouts & Containers</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Block Elements & Div */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                    Block Elements <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">&lt;div&gt;</span>
                                </h4>
                                <div className="space-y-2 mb-3">
                                    <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-xs p-1 text-center w-full">Starts New Line</div>
                                    <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-xs p-1 text-center w-full">Full Width</div>
                                </div>
                                <p className="text-xs text-slate-500">
                                    Examples: <code className="text-orange-300">&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;section&gt;</code>
                                </p>
                            </div>

                            {/* Inline Elements & Span */}
                            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                                <h4 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                    Inline Elements <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">&lt;span&gt;</span>
                                </h4>
                                <div className="mb-3">
                                    <div className="bg-green-500/20 border border-green-500/40 text-green-200 text-xs p-1 inline-block mr-1">Same Line</div>
                                    <div className="bg-green-500/20 border border-green-500/40 text-green-200 text-xs p-1 inline-block">Content Width</div>
                                </div>
                                <p className="text-xs text-slate-500 mt-4">
                                    Examples: <code className="text-orange-300">&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;</code>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {/* Section 4: Meta & Accessibility */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Search className="w-5 h-5 text-orange-400" />
                            <h3 className="text-lg font-semibold text-slate-200">4. Meta Tags & Accessibility</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex gap-3">
                                <Globe className="w-5 h-5 text-blue-400 mt-1" />
                                <div>
                                    <h5 className="text-slate-200 text-sm font-semibold">SEO & Social</h5>
                                    <p className="text-xs text-slate-500 mt-1">Search engines සඳහා description සහ keywords.</p>
                                    <code className="block mt-1 text-[10px] text-slate-400 bg-slate-950 p-1 rounded">
                                        &lt;meta name="description" content="..."&gt;
                                    </code>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex gap-3">
                                <Smartphone className="w-5 h-5 text-emerald-400 mt-1" />
                                <div>
                                    <h5 className="text-slate-200 text-sm font-semibold">Responsive (Mobile)</h5>
                                    <p className="text-xs text-slate-500 mt-1">ජංගම දුරකථන වල නිවැරදිව පෙන්වීමට.</p>
                                    <code className="block mt-1 text-[10px] text-slate-400 bg-slate-950 p-1 rounded">
                                        &lt;meta name="viewport" ...&gt;
                                    </code>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex gap-3 sm:col-span-2">
                                <Eye className="w-5 h-5 text-pink-400 mt-1" />
                                <div>
                                    <h5 className="text-slate-200 text-sm font-semibold">Accessibility (පහසුකම්)</h5>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle className="w-3 h-3 text-pink-500" />
                                            <span>Images වලට <strong>alt</strong> text</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle className="w-3 h-3 text-pink-500" />
                                            <span>Inputs වලට <strong>label</strong></span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle className="w-3 h-3 text-pink-500" />
                                            <span><strong>Semantic</strong> tags භාවිතය</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Code Example */}
                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mt-8">
                        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-medium text-slate-500 uppercase">සම්පූර්ණ උදාහරණය (Full Example)</span>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <pre className="font-mono text-xs md:text-sm text-blue-300 leading-relaxed">
{`<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Semantic HTML Example">
  <title>Semantic HTML Demo</title>
</head>
<body>

  <header>
    <h1 id="main-title">My Website</h1>
  </header>

  <nav>
    <a href="#services">Services</a>
    <a href="#about">About</a>
  </nav>

  <main>
    <section id="services" class="content-section">
      <h2>Services</h2>
      <article>
        <h3>Web Design</h3>
        <p>We create beautiful websites.</p>
      </article>
    </section>

    <section id="contact">
      <h2>Contact Form</h2>
      <form>
        <label for="name">Name</label>
        <input id="name" type="text" data-user="new">
        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>© 2025 My Website</p>
  </footer>

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
                        <span>{completed ? "HTML Course Completed" : "Finish HTML Course ✔️"}</span>
                        {completed ? <CheckCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                    </button>
                </div>

            </div>
        </div>
    );
}