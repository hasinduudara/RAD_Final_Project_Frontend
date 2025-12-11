import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import JsPart1 from "./JsPart1";
import JsPart2 from "./JsPart2";
import JsPart3 from "./JsPart3";
import CertificateDownloader from "../CertificateDownloader";
import type { RootState } from "../../context/userContext";
import { saveProgress } from "../../services/course";

export default function JsCourse() {
    const [step, setStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isMountedRef = useRef(true);

    const user = useSelector((state: RootState) => state.user.user);
    const userName = user?.fullName || "Student";

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const handlePart1Done = async () => {
        setIsSaving(true);
        setError(null);
        try {
            await saveProgress("js", 1);
            if (isMountedRef.current) {
                setStep(2);
            }
        } catch (error) {
            console.error("Failed to save progress", error);
            if (isMountedRef.current) {
                setError("Failed to save progress. Please try again.");
                setStep(2);
            }
        } finally {
            if (isMountedRef.current) {
                setIsSaving(false);
            }
        }
    };

    const handlePart2Done = async () => {
        setIsSaving(true);
        setError(null);
        try {
            await saveProgress("js", 2);
            if (isMountedRef.current) {
                setStep(3);
            }
        } catch (error) {
            console.error("Failed to save progress", error);
            if (isMountedRef.current) {
                setError("Failed to save progress. Please try again.");
                setStep(3);
            }
        } finally {
            if (isMountedRef.current) {
                setIsSaving(false);
            }
        }
    };

    const handlePart3Done = async () => {
        setIsSaving(true);
        setError(null);
        try {
            await saveProgress("js", 3);
            if (isMountedRef.current) {
                setIsCompleted(true);
            }
        } catch (error) {
            console.error("Failed to save progress", error);
            if (isMountedRef.current) {
                setError("Failed to save progress. Please try again.");
                setIsCompleted(true);
            }
        } finally {
            if (isMountedRef.current) {
                setIsSaving(false);
            }
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto p-6">
                {error && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400">
                        {error}
                    </div>
                )}

                {isSaving && (
                    <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500 rounded-lg text-blue-400">
                        Saving your progress...
                    </div>
                )}

                {!isCompleted && (
                    <>
                        {step === 1 && <JsPart1 onDone={handlePart1Done} />}
                        {step === 2 && <JsPart2 onDone={handlePart2Done} />}
                        {step === 3 && <JsPart3 onDone={handlePart3Done} />}
                    </>
                )}

                {isCompleted && (
                    <div className="animate-fade-in flex flex-col items-center justify-center pt-10">
                        <CertificateDownloader userName={userName} course="js" />
                        <div className="text-center mt-6">
                            <button
                                onClick={() => { setStep(1); setIsCompleted(false); setError(null); }}
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