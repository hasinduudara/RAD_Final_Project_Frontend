import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function WelcomePage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login');
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden selection:bg-blue-500 selection:text-white">

            {/* --- 3D Background Animation Start --- */}
            <style>{`
                .perspective-container {
                    perspective: 1000px;
                }
                .grid-3d-plane {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    left: -50%;
                    top: -25%;
                    background-image: 
                        linear-gradient(to right, rgba(37, 99, 235, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(37, 99, 235, 0.15) 1px, transparent 1px);
                    background-size: 80px 80px;
                    transform: rotateX(60deg);
                    transform-origin: 50% 50%;
                    animation: grid-movement 10s linear infinite;
                }
                @keyframes grid-movement {
                    0% { transform: rotateX(60deg) translateY(0); }
                    100% { transform: rotateX(60deg) translateY(80px); }
                }
                /* Fog effect to blend grid into the dark background */
                .fog-overlay {
                    background: linear-gradient(to bottom, #111827 10%, transparent 40%, transparent 80%, #111827 100%);
                }
            `}</style>

            <div className="absolute inset-0 perspective-container pointer-events-none">
                {/* Moving 3D Grid */}
                <div className="grid-3d-plane"></div>
                {/* Gradient Fog to fade edges */}
                <div className="absolute inset-0 fog-overlay z-0"></div>

                {/* Optional: Distant Glowing Orb for depth */}
                <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/30 blur-[100px] rounded-full"></div>
            </div>
            {/* --- 3D Background Animation End --- */}


            {/* Main Content Area (Added z-10 to sit above animation) */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center p-8">

                {/* Logo/Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    Language Hub
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 drop-shadow-md">
                    වෙත සාදරයෙන් පිළිගනිමු!
                </p>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
                    HTML, CSS, සහ JavaScript මුල සිට සරල සිංහලෙන් ඉගෙන ගන්න. අපගේ අරමුණ ඔබට පහසුවෙන් වෙබ් සංවර්ධනය ප්‍රගුණ කිරීමට උපකාර කිරීමයි.
                </p>

                {/* Certificate Info */}
                <p className="text-md md:text-lg text-yellow-400 max-w-2xl mb-10 drop-shadow-md">
                    ඔබ කුමන පාඨමාලාවක් හැදෑරුවද, එය සාර්ථකව අවසන් කිරීමෙන් පසු ඔබට වටිනා සහතිකයක් පිරිනැමේ.
                </p>

                {/* Call-to-Action Button */}
                <button
                    onClick={handleStartClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]"
                >
                    දැන්ම ආරම්භ කරන්න
                </button>

            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}