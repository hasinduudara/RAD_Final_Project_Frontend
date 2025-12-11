import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Camera, User, Mail, Save, Lock, Loader2, Award } from "lucide-react"; // Import icons
import Header from "../components/Header";
import { updateUser, uploadProfileImage } from "../services/user";
import { getCourseProgress } from "../services/course";
import { updateProfileImage as updateProfileImageAction } from "../context/userContext";
import type { RootState, AppDispatch } from "../context/userContext";
import CertificateDownloader from "../components/CertificateDownloader";

interface CourseProgress {
    id: string;
    courseName: string;
    percentage?: number;
    completedParts?: number[];
}

export default function ProfilePage() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);

    // UI State for inputs
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    // Loading states
    const [uploading, setUploading] = useState(false);
    const [saving, setSaving] = useState(false); // Added separate saving state
    const [progress, setProgress] = useState<CourseProgress[]>([]);

    // Ref for hidden file input
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (user) {
            setFullName(user.fullName);
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        (async () => {
            try {
                const courseData = await getCourseProgress();

                // Normalization Logic
                const normalizedData = (courseData as CourseProgress[]).map((course) => {
                    let percentage = 0;

                    // Check if completedParts exists and is an array
                    if (course.completedParts && Array.isArray(course.completedParts)) {
                        // REMOVE DUPLICATES (Just in case DB has [1, 1, 2])
                        const uniqueParts = [...new Set(course.completedParts)];
                        const completedCount = uniqueParts.length;

                        // Total parts is 3. Calculate %
                        percentage = Math.round((completedCount / 3) * 100);

                        // Cap at 100%
                        if (percentage > 100) percentage = 100;
                    }

                    return {
                        ...course,
                        percentage: percentage
                    };
                });

                setProgress(normalizedData);
            } catch (error) {
                console.error("Error loading course progress:", error);
            }
        })();
    }, []);

    // Trigger hidden file input click
    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const url = await uploadProfileImage(file);
            const response = await updateUser({ fullName, email, profileImage: url });

            if (response.success) {
                const updatedUser = response.user;
                if (updatedUser.profileImage) {
                    dispatch(updateProfileImageAction(updatedUser.profileImage));
                }
            }
            alert("Profile picture updated successfully!");
        } catch (error) {
            console.error("Failed to upload image:", error);
            alert("Failed to upload profile picture.");
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const response = await updateUser({ fullName, email, profileImage: user?.profileImage });
            if (response.success) {
                alert("Profile updated successfully");
            }
        } catch (error) {
            console.error("Failed to save profile:", error);
            alert("Failed to update profile.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: User Details Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl sticky top-24">

                            {/* Avatar Section */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative group cursor-pointer" onClick={handleImageClick}>
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                                        {user?.profileImage ? (
                                            <img
                                                src={user.profileImage}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                                <User size={48} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Upload Overlay */}
                                    <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {uploading ? (
                                            <Loader2 className="w-8 h-8 text-white animate-spin" />
                                        ) : (
                                            <Camera className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImage}
                                    />
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-gray-100">{fullName || "User"}</h2>
                                <p className="text-gray-400 text-sm">{email}</p>
                            </div>

                            {/* Form Inputs */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 pl-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                        <input
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder-gray-600 text-white"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 pl-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder-gray-600 text-white"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 space-y-3">
                                <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin"/> : <Save className="w-4 h-4" />}
                                    Save Changes
                                </button>

                                <a
                                    href="/forgot-password"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl font-medium text-gray-300 transition-colors"
                                >
                                    <Lock className="w-4 h-4" />
                                    Reset Password
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Course Progress */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl min-h-[500px]">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Award className="text-yellow-500" />
                                My Learning Journey
                            </h2>

                            {progress.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                                    <p className="text-lg">No courses started yet.</p>
                                    <a href="/courses" className="mt-4 text-blue-400 hover:underline">Explore Courses &rarr;</a>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    {progress.map((c) => (
                                        <div key={c.id} className="group relative p-5 bg-gray-800/50 hover:bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-md hover:border-gray-600">

                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-100 group-hover:text-blue-400 transition-colors">
                                                        {c.courseName}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 mt-1">
                                                        {(c.percentage ?? 0) === 100 ? "Completed" : "In Progress"}
                                                    </p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                    (c.percentage ?? 0) === 100
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-blue-500/20 text-blue-400"
                                                }`}>
                                                    {c.percentage ?? 0}%
                                                </span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden mb-4">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                                        (c.percentage ?? 0) === 100 ? "bg-green-500" : "bg-gradient-to-r from-blue-600 to-blue-400"
                                                    }`}
                                                    style={{ width: `${c.percentage ?? 0}%` }}
                                                ></div>
                                            </div>

                                            {/* Footer / Actions */}
                                            <div className="flex justify-end pt-2 border-t border-gray-700/50">
                                                {(c.percentage ?? 0) === 100 ? (
                                                    <div className="transform transition-transform hover:scale-105">
                                                        <CertificateDownloader
                                                            userName={fullName}
                                                            course={
                                                                c.courseName.toLowerCase().includes('html') ? 'html' :
                                                                c.courseName.toLowerCase().includes('css') ? 'css' :
                                                                c.courseName.toLowerCase().includes('javascript') || c.courseName.toLowerCase().includes('js') ? 'js' :
                                                                'html' // default fallback
                                                            }
                                                        />
                                                    </div>
                                                ) : (
                                                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                                                        Continue Learning &rarr;
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}