import { Facebook, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you use react-router

export default function Footer() {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 font-sans">
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Code2 className="text-green-500" size={24} />
                            <span className="text-xl font-bold tracking-tight">Language Hub</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500 max-w-xs mb-6">
                            ශ්‍රී ලාංකිකයන් සඳහාම නිර්මාණය වූ Web Development පාසල.
                            සරල සිංහලෙන් Coding ඉගෙන ගෙන ඔබගේ අනාගතය ගොඩනගා ගන්න.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                                <Github size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Courses</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/html-course" className="hover:text-green-400 transition-colors">HTML Fundamentals</Link>
                            </li>
                            <li>
                                <Link to="/css-courses" className="hover:text-green-400 transition-colors">CSS Styling</Link>
                            </li>
                            <li>
                                <Link to="/javascript-courses" className="hover:text-green-400 transition-colors">JavaScript Basics</Link>
                            </li>
                            <li>
                                <span className="text-gray-600 cursor-not-allowed">React (Coming Soon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:text-green-400 transition-colors">My Profile</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <a href="mailto:support@languagehub.lk" className="hover:text-green-400 transition-colors flex items-center gap-2">
                                    <Mail size={14} /> Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-800 w-full mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 md:mb-0">
                        © 2025 Language Hub. සියලුම හිමිකම් ඇවිරිණි.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}