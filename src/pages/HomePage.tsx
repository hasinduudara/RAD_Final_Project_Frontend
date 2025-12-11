import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Code2, Palette, Cpu, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
    const navigate = useNavigate();

    const courses = [
        {
            title: "HTML",
            desc: "HTML කියන්නේ website එකක සැකිල්ල වගේ. Web page එකක content ගොඩනගන markup එක මෙහෙමයි.",
            route: "/html-course",
            icon: <Code2 size={32} />,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "group-hover:border-orange-500/50",
            btnColor: "group-hover:bg-orange-600"
        },
        {
            title: "CSS",
            desc: "CSS එකෙන් website එකට හැඩ ගන්වන්න පුළුවන්. Colors, layouts, styles හදන්න CSS අත්‍යවශ්‍යයි.",
            route: "/css-courses",
            icon: <Palette size={32} />,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/50",
            btnColor: "group-hover:bg-blue-600"
        },
        {
            title: "JavaScript",
            desc: "JavaScript යනු website එකට ක්‍රියාකාරිත්වය හා හැසිරීම ලබා දෙන programming භාෂාව.",
            route: "/javascript-courses",
            icon: <Cpu size={32} />,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "group-hover:border-yellow-400/50",
            btnColor: "group-hover:bg-yellow-500"
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-950 text-white font-sans selection:bg-green-500/30">
            <Header />

            {/* Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-20">

                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-xs font-medium text-gray-400 mb-6">
                        <Sparkles size={12} className="text-green-400" />
                        <span>Start your journey today</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-transparent bg-clip-text">
                            ආයුබෝවන්!
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        <span className="text-gray-200 font-semibold">Language Hub</span> මගින් ඔබට HTML, CSS සහ JavaScript
                        යන Web Development මූලික දැනුම <br className="hidden md:block"/> සරලව සහ පහසුවෙන් සිංහලෙන් ඉගෙන ගත හැක.
                    </p>
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto relative z-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(course.route)}
                            className={`
                                group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 
                                border border-gray-800 transition-all duration-300 
                                hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 cursor-pointer
                                ${course.border}
                            `}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl ${course.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                <div className={course.color}>
                                    {course.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">
                                {course.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-7 mb-8 min-h-[80px]">
                                {course.desc}
                            </p>

                            {/* Button */}
                            <div className="flex items-center text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                                <span className={`absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${course.btnColor}`}>
                                    <ArrowRight size={18} />
                                </span>
                                <span className="group-hover:underline decoration-gray-500 underline-offset-4">
                                    Start Learning
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}