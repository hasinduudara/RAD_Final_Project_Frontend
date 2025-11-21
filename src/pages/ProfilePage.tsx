import { useState } from "react";

export default function ProfilePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            setSelectedImage(result);
            localStorage.setItem("profileImage", result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

            <label className="block mb-4">Upload a profile picture</label>
            <input type="file" accept="image/*" onChange={handleUpload} />

            {selectedImage && (
                <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mt-6 border border-gray-600"
                />
            )}
        </div>
    );
}
