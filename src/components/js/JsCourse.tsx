import { useState } from "react";
import { useSelector } from "react-redux";
import JsPart1 from "./JsPart1";
import JsPart2 from "./JsPart2";
import JsPart3 from "./JsPart3";
import CertificateDownloader from "../CertificateDownloader";
import type { RootState } from "../../context/userContext";

export default function JsCourse() {
    const [step, setStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);

    // Get User Name
    const user = useSelector((state: RootState) => state.user.user);
    const userName = user?.fullName || "Student";

    const handleCompletion = () => {
        setIsCompleted(true);
    };

    return (
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto p-6">
                {!isCompleted && (
                    <>
                        {step === 1 && <JsPart1 onDone={() => setStep(2)} />}
                        {step === 2 && <JsPart2 onDone={() => setStep(3)} />}
                        {step === 3 && <JsPart3 onDone={handleCompletion} />}
                    </>
                )}

                {isCompleted && (
                    <div className="animate-fade-in flex flex-col items-center justify-center pt-10">
                        {/* Pass 'js' to the course prop */}
                        <CertificateDownloader userName={userName} course="js" />

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