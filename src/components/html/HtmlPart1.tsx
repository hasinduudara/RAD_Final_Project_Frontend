import { useState } from "react";
import { saveProgress } from "../../services/course";

export default function HtmlPart1({ onDone }: { onDone: () => void }) {
    const [checked, setChecked] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 1);
        onDone();
    };

    return (
        <div className="bg-slate-800 p-6 shadow-md text-slate-200 space-y-5">
            <h2 className="text-2xl font-bold text-white">HTML මූලික දේවල් (Part 1)</h2>

            <div>
                <h3 className="text-xl font-semibold text-green-400">1) HTML කියන්නේ මොකද්ද?</h3>
                <p className="text-slate-300">
                    HTML = HyperText Markup Language. වෙබ් පිටුවේ headings, images,
                    links, paragraphs වැනි වස්තූන් browser එකට දක්වන්න markup භාෂාවකි.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">2) HTML ගොනුවක් කොහෙද අරඹන්නේ?</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>.html ගොනුවක් සාදන්න (index.html)</li>
                    <li>Chrome/Firefox හි විවෘත කරන්න</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">3) HTML Template</h3>
                <pre className="bg-slate-900 p-4 rounded-md text-sm overflow-x-auto">
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

            <div>
                <h3 className="text-xl font-semibold text-green-400">4) Tag / Element / Attribute</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>Tag — &lt;p&gt;</li>
                    <li>Element — &lt;p&gt;text&lt;/p&gt;</li>
                    <li>Attribute — href="", src=""</li>
                </ul>
            </div>

            <div className="pt-4">
                <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold disabled:bg-gray-600"
                    disabled={checked}
                    onClick={() => {
                        setChecked(true);
                        handleDone();
                    }}
                >
                    Mark Part 1 Completed
                </button>
            </div>
        </div>
    );
}
