import { useState } from "react";
import CssPart1 from "./CssPart1";
import CssPart2 from "./CssPart2";
import CssPart3 from "./CssPart3";

export default function CssCourse() {
    const [step, setStep] = useState(1);

    return (
        <div className="course-container">
            {step === 1 && <CssPart1 onDone={() => setStep(2)} />}
            {step === 2 && <CssPart2 onDone={() => setStep(3)} />}
            {step === 3 && <CssPart3 onDone={() => alert("CSS Course Completed! 🎉")} />}
        </div>
    );
}
