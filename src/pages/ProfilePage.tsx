import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getUser, updateUser, uploadProfileImage } from "../services/user";
import { getCourseProgress } from "../services/course";

interface CourseProgress {
    id: string;
    courseName: string;
    percentage: number;
}

export default function ProfilePage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState<CourseProgress[]>([]);

    useEffect(() => {
        (async () => {
            try {
                // First check localStorage immediately
                const cachedImage = localStorage.getItem("profileImage");
                console.log("Cached profile image from localStorage:", cachedImage);
                if (cachedImage) {
                    setSelectedImage(cachedImage);
                }

                // Then fetch from backend
                const response = await getUser();
                console.log("Full API response:", JSON.stringify(response, null, 2));

                // Handle nested user object
                const user = response.user || response;
                console.log("User object:", JSON.stringify(user, null, 2));

                setFullName(user.fullName || "");
                setEmail(user.email || "");

                if (user.profileImage) {
                    console.log("Profile image URL from backend:", user.profileImage);
                    setSelectedImage(user.profileImage);
                    localStorage.setItem("profileImage", user.profileImage);
                } else {
                    console.log("No profile image in backend response");
                    console.log("All user keys:", Object.keys(user));
                    // Keep the cached image if backend doesn't have it
                    // Don't clear localStorage or selectedImage
                }

                const courseData = await getCourseProgress();
                setProgress(courseData);
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        })();
    }, []);

    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const url = await uploadProfileImage(file);
            console.log("Uploaded image URL:", url);
            setSelectedImage(url);

            // Automatically save the profile image to the backend
            const response = await updateUser({ fullName, email, profileImage: url });
            console.log("Update response:", response);

            // Verify the update was successful
            if (response.success) {
                const updatedUser = response.user;
                if (updatedUser.profileImage) {
                    setSelectedImage(updatedUser.profileImage);
                    // Save to localStorage so it persists across navigation
                    localStorage.setItem("profileImage", updatedUser.profileImage);
                    // Dispatch event to notify Header component
                    window.dispatchEvent(new Event("profileImageUpdated"));
                    console.log("Profile image saved to backend and localStorage:", updatedUser.profileImage);
                }
            }

            alert("Profile picture updated successfully!");
        } catch (error) {
            console.error("Failed to upload image:", error);
            alert("Failed to upload profile picture. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        try {
            const response = await updateUser({ fullName, email, profileImage: selectedImage });
            console.log("Save response:", response);
            if (response.success) {
                // Update localStorage with the saved profile image
                if (selectedImage) {
                    localStorage.setItem("profileImage", selectedImage);
                } else {
                    localStorage.removeItem("profileImage");
                }
                // Dispatch event to notify Header component
                window.dispatchEvent(new Event("profileImageUpdated"));
                alert("Profile updated successfully");
            }
        } catch (error) {
            console.error("Failed to save profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />

            <div className="max-w-3xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Profile Picture</label>
                    <input type="file" accept="image/*" onChange={handleImage} />

                    {uploading && <p className="mt-2 text-sm text-yellow-400">Uploading...</p>}

                    {selectedImage && (
                        <div>
                            <img
                                src={selectedImage}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mt-4 border border-gray-700 object-cover"
                                onError={(e) => {
                                    console.error("Failed to load image:", selectedImage);
                                    console.error("Image load error event:", e);
                                    // Don't hide - show a placeholder or keep trying
                                }}
                                onLoad={() => {
                                    console.log("Image loaded successfully:", selectedImage);
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Form */}
                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block mb-1 font-semibold">Name</label>
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSave}
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                    >
                        Save Changes
                    </button>

                    <a
                        href="/forgot-password"
                        className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold"
                    >
                        Reset Password
                    </a>
                </div>

                {/* Course Progress */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Course Progress</h2>

                    {progress.length === 0 && (
                        <p className="text-gray-400">No ongoing courses.</p>
                    )}

                    <div className="space-y-4">
                        {progress.map((c) => (
                            <div key={c.id} className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="flex justify-between mb-1">
                                    <span className="font-semibold">{c.courseName}</span>
                                    <span>{c.percentage}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-700 rounded">
                                    <div
                                        className="h-2 bg-green-500 rounded"
                                        style={{ width: `${c.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
