import { useState } from "react";
import { saveProgress } from "../../services/course";

export default function HtmlPart2({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 2);
        onDone();
    };

    return (
        <div className="bg-slate-800 p-6 shadow-md text-slate-200 space-y-5">
            <h2 className="text-2xl font-bold text-white">HTML Part 2 – Tags / Attributes / Lists</h2>

            <div>
                <h3 className="text-xl font-semibold text-green-400">5) Common Tags</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>&lt;h1&gt; - Heading</li>
                    <li>&lt;p&gt; - Paragraph</li>
                    <li>&lt;a&gt; - Link</li>
                    <li>&lt;img&gt; - Image</li>
                    <li>&lt;ul&gt; / &lt;ol&gt; - Lists</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">6) Attributes</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>href</li>
                    <li>src</li>
                    <li>id</li>
                    <li>class</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">7) Inline vs Block</h3>
                <p><strong>Block:</strong> div, h1, p</p>
                <p><strong>Inline:</strong> span, a, img</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">8) Nesting</h3>
                <pre className="bg-slate-900 p-4 rounded-md text-sm overflow-x-auto">
{`<p>මෙතන <strong>වාඩි</strong> අකුරු.</p>`}
                </pre>
            </div>

            <button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold disabled:bg-gray-600"
                disabled={completed}
                onClick={() => {
                    setCompleted(true);
                    handleDone();
                }}
            >
                Mark Part 2 Completed
            </button>
        </div>
    );
}
