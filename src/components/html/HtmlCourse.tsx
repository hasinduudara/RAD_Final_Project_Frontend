import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import HtmlPart1 from "./HtmlPart1";
import HtmlPart2 from "./HtmlPart2";
import HtmlPart3 from "./HtmlPart3";
import CertificateDownloader from "../CertificateDownloader";
import type { RootState } from "../../context/userContext";
import { saveProgress } from "../../services/course";

export default function HtmlCourse() {
    const [step, setStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isMountedRef = useRef(true);

    const user = useSelector((state: RootState) => state.user.user);
    const userName = user?.fullName || "Student";

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    // Helper: Saves progress but forces a move after 3 seconds if stuck
    const handleSaveWithTimeout = async (courseName: string, partNumber: number, nextAction: () => void) => {
        setIsSaving(true);
        setError(null);

        // Create a timeout promise that rejects after 5 seconds
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 5000)
        );

        try {
            // Race the saveProgress against the timeout
            await Promise.race([saveProgress(courseName, partNumber), timeoutPromise]);

            // If successful:
            if (isMountedRef.current) {
                nextAction();
            }
        } catch (err) {
            console.error("Save failed or timed out:", err);
            // Even if it fails, we allow the user to proceed so they don't get stuck
            if (isMountedRef.current) {
                nextAction();
            }
        } finally {
            if (isMountedRef.current) {
                setIsSaving(false);
            }
        }
    };

    const handlePart1Done = () => {
        handleSaveWithTimeout("html", 1, () => setStep(2));
    };

    const handlePart2Done = () => {
        handleSaveWithTimeout("html", 2, () => setStep(3));
    };

    const handlePart3Done = () => {
        handleSaveWithTimeout("html", 3, () => setIsCompleted(true));
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
                    <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500 rounded-lg text-blue-400 flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
                        Saving your progress...
                    </div>
                )}

                {!isCompleted && (
                    <>
                        {step === 1 && <HtmlPart1 onDone={handlePart1Done} />}
                        {step === 2 && <HtmlPart2 onDone={handlePart2Done} />}
                        {step === 3 && <HtmlPart3 onDone={handlePart3Done} />}
                    </>
                )}

                {isCompleted && (
                    <div className="animate-fade-in flex flex-col items-center justify-center pt-10">
                        <CertificateDownloader userName={userName} course="html" />
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