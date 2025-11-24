import { useState } from "react";
import JsPart1 from "./JsPart1";
import JsPart2 from "./JsPart2";
import JsPart3 from "./JsPart3";

export default function JsCourse() {
    const [step, setStep] = useState(1);

    return (
        <div className="w-full">
            {step === 1 && <JsPart1 onDone={() => setStep(2)} />}
            {step === 2 && <JsPart2 onDone={() => setStep(3)} />}
            {step === 3 && <JsPart3 onDone={() => alert("JavaScript Course Completed! 🎉")} />}
        </div>
    );
}