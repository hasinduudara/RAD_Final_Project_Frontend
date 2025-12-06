import React, { useState } from 'react';
// Import all three certificate templates
import htmlCert from '../assets/HTML.png';
import cssCert from '../assets/CSS.png';
import jsCert from '../assets/JavaScript.png';

interface CertificateDownloaderProps {
    userName: string;
    course: 'html' | 'css' | 'js'; // New prop to decide which image to use
}

const CertificateDownloader: React.FC<CertificateDownloaderProps> = ({ userName, course }) => {
    const [isGenerating, setIsGenerating] = useState(false);

    // 1. Logic to select the correct image and filename based on the prop
    const getCertConfig = () => {
        switch (course) {
            case 'css':
                return { src: cssCert, name: 'CSS' };
            case 'js':
                return { src: jsCert, name: 'JavaScript' };
            case 'html':
            default:
                return { src: htmlCert, name: 'HTML' };
        }
    };

    const handleDownload = () => {
        setIsGenerating(true);
        const config = getCertConfig();

        const image = new Image();
        image.src = config.src;
        image.crossOrigin = "anonymous";

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (!ctx) return;

            canvas.width = image.width;
            canvas.height = image.height;

            // Draw the background
            ctx.drawImage(image, 0, 0);

            // Configure Text
            ctx.font = 'bold 80px Arial';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';

            // Position
            const x = canvas.width / 2;
            const y = canvas.height / 2 - 50;

            // Draw Name
            ctx.fillText(userName, x, y);

            // Trigger Download with dynamic filename
            const link = document.createElement('a');
            link.download = `${config.name}_Certificate_${userName.replace(/\s/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            setIsGenerating(false);
        };
    };

    const config = getCertConfig();

    return (
        <div className="flex flex-col items-center mt-6 p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-2">🎉 {config.name} Course Completed!</h3>
            <p className="text-gray-300 mb-4">Congratulations, {userName}! You have earned your certificate.</p>

            <button
                onClick={handleDownload}
                disabled={isGenerating}
                className={`px-6 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-105
                    ${isGenerating
                    ? 'bg-gray-500 cursor-wait'
                    : 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/50'
                }`}
            >
                {isGenerating ? 'Generating...' : `Download ${config.name} Certificate`}
            </button>
        </div>
    );
};

export default CertificateDownloader;