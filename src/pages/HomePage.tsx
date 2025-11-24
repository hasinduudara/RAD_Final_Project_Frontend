import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const courses = [
        {
            title: "HTML",
            desc: "HTML කියන්නේ website එකක මාළු骨ය වගේ. Web page එකක content ගොඩනගන markup එක මෙහෙමයි.",
            route: "/htmlcourse",
        },
        {
            title: "CSS",
            desc: "CSS එකෙන් website එකට හැඩ ගන්වන්න පුළුවන්. Colors, layouts, styles හදන්න CSS අත්‍යවශ්‍යයි.",
            route: "/csscourses",
        },
        {
            title: "JavaScript",
            desc: "JavaScript යනු website එකට සිරිත, ක්‍රියාකාරිත්වය හා හැසිරීම ලබා දෙන programming භාෂාව.",
            route: "/courses/javascript",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            <Header />

            <div className="flex-1 px-6 py-10">
                <h2 className="text-3xl font-bold text-center mb-8">ආයුබෝවන්!</h2>

                <p className="max-w-2xl mx-auto text-lg text-center mb-12 text-gray-300 leading-relaxed">
                    Language Hub මගින් ඔබට HTML, CSS සහ JavaScript
                    යන Web Development මූලික දැනුම් සරලව, පහසුවෙන්
                    ඉගෙන ගත හැක. පහළින් ඉන්න courses තුනෙන් යාමක්
                    තෝරන්න.
                </p>

                {/* Course Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-green-400">{course.title}</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">{course.desc}</p>

                            <button
                                onClick={() => navigate(course.route)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg"
                            >
                                Start Course
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
