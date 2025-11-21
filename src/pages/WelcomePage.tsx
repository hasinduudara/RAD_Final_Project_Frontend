import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function WelcomePage() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-8">

                {/* Logo/Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Language Hub
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    වෙත සාදරයෙන් පිළිගනිමු!
                </p>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mb-6">
                    HTML, CSS, සහ JavaScript මුල සිට සරල සිංහලෙන් ඉගෙන ගන්න. අපගේ අරමුණ ඔබට පහසුවෙන් වෙබ් සංවර්ධනය ප්‍රගුණ කිරීමට උපකාර කිරීමයි.
                </p>

                {/* Certificate Info */}
                <p className="text-md md:text-lg text-yellow-400 max-w-2xl mb-10">
                    ඔබ කුමන පාඨමාලාවක් හැදෑරුවද, එය සාර්ථකව අවසන් කිරීමෙන් පසු ඔබට වටිනා සහතිකයක් පිරිනැමේ.
                </p>

                {/* Call to Action Button */}
                <button
                    onClick={handleStartClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    දැන්ම ආරම්භ කරන්න
                </button>

            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}