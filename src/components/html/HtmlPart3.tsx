import { useState } from "react";
import { saveProgress } from "../../services/course";

export default function HtmlPart3({ onDone }: { onDone: () => void }) {
    const [completed, setCompleted] = useState(false);

    const handleDone = async () => {
        await saveProgress("html", 3);
        onDone();
    };

    return (
        <div className="bg-slate-800 p-6 shadow-md text-slate-200 space-y-5">
            <h2 className="text-2xl font-bold text-white">HTML Part 3 – Example Page / Tips</h2>

            <div>
                <h3 className="text-xl font-semibold text-green-400">10) Example Page</h3>
                <pre className="bg-slate-900 p-4 rounded-md text-sm overflow-x-auto">
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

            <div>
                <h3 className="text-xl font-semibold text-green-400">11) කොහෙන් ඉගෙන ගන්නද?</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>index.html එකක් create කර test කරන්න</li>
                    <li>VSCode භාවිතා කරන්න</li>
                    <li>Browser DevTools (F12) භාවිතා කරන්න</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">12) කෙටි ඉඟි</h3>
                <ul className="list-disc ml-6 text-slate-300">
                    <li>Tag close කරන්න</li>
                    <li>alt add කරන්න</li>
                    <li>id unique කරන්න</li>
                </ul>
            </div>

            <button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold disabled:bg-gray-600"
                disabled={completed}
                onClick={() => {
                    setCompleted(true);
                    handleDone();
                }}
            >
                Finish Course ✔️
            </button>
        </div>
    );
}
