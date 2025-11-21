import { useState } from "react";
import HtmlPart1 from "./HtmlPart1";
import HtmlPart2 from "./HtmlPart2";
import HtmlPart3 from "./HtmlPart3";

export default function HtmlCourse() {
    const [step, setStep] = useState(1);

    return (
        <div className="course-container">
            {step === 1 && <HtmlPart1 onDone={() => setStep(2)} />}
            {step === 2 && <HtmlPart2 onDone={() => setStep(3)} />}
            {step === 3 && <HtmlPart3 onDone={() => alert("Course Completed! 🎉")} />}
        </div>
    );
}
