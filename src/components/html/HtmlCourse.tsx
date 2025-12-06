import { useState } from "react";
import { useSelector } from "react-redux";
import HtmlPart1 from "./HtmlPart1";
import HtmlPart2 from "./HtmlPart2";
import HtmlPart3 from "./HtmlPart3";
import CertificateDownloader from "../CertificateDownloader";
import type { RootState } from "../../context/userContext";

export default function HtmlCourse() {
    const [step, setStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);

    const user = useSelector((state: RootState) => state.user.user);
    const userName = user?.fullName || "Student";

    const handleCompletion = () => {
        setIsCompleted(true);
    };

    return (
        // CHANGED:
        // 1. 'min-h-screen' ensures it takes full height.
        // 2. 'w-full' ensures it takes full width.
        // 3. 'bg-gray-900' applies the dark color to the entire screen, covering the white.
        <div className="min-h-screen w-full bg-gray-900 text-white">

            {/* INNER CONTAINER: Keeps the content readable and centered
                without shrinking the background */}
            <div className="max-w-4xl mx-auto p-6">

                {!isCompleted && (
                    <>
                        {step === 1 && <HtmlPart1 onDone={() => setStep(2)} />}
                        {step === 2 && <HtmlPart2 onDone={() => setStep(3)} />}
                        {step === 3 && <HtmlPart3 onDone={handleCompletion} />}
                    </>
                )}

                {isCompleted && (
                    <div className="animate-fade-in flex flex-col items-center justify-center pt-10">
                        <CertificateDownloader userName={userName} />

                        <div className="text-center mt-6">
                            <button
                                onClick={() => { setStep(1); setIsCompleted(false); }}
                                className="text-gray-400 hover:text-white underline text-sm transition-colors"
                            >
                                Review Course Again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}