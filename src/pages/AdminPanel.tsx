import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    User, Mail, Camera, Trash2, Shield,
    Search, LogOut, Lock, Loader2, UserPlus, X
} from "lucide-react";
import {
    updateUser, uploadProfileImage,
    getAllUsers, deleteUser, createAdmin
} from "../services/user";
import toast from "react-hot-toast";
import { useUser } from "../context/userContext";

// Interfaces
interface UserProfile {
    _id: string;
    fullName: string;
    email: string;
    role: string;
    profileImage?: string;
}

export default function AdminPanel() {
    const navigate = useNavigate();
    const { user, loading: userLoading, logout, updateProfileImage } = useUser();

    // State for Admin Profile
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // State for User Management
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [activeTab, setActiveTab] = useState<"USER" | "ADMIN">("USER");
    const [searchTerm, setSearchTerm] = useState("");

    // State for Add Admin Modal
    const [showAddAdminModal, setShowAddAdminModal] = useState(false);
    const [newAdmin, setNewAdmin] = useState({ fullName: "", email: "", password: "" });
    const [creatingAdmin, setCreatingAdmin] = useState(false);

    // 1. Fetch Data on Mount
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const usersRes = await getAllUsers();
            if (usersRes.success) setUsers(usersRes.users);

        } catch (error) {
            console.error(error);
            toast.error("Failed to load admin data");
        } finally {
            setLoading(false);
        }
    };

    // 2. Handle Profile Picture Upload
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setUploading(true);
            const url = await uploadProfileImage(file);
            await updateUser({ profileImage: url });
            updateProfileImage(url);
            toast.success("Profile image updated!");
        } catch {
            toast.error("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    // 3. Handle Profile Info Update
    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        try {
            await updateUser({ fullName: user.fullName, email: user.email });
            toast.success("Profile details updated!");
        } catch {
            toast.error("Failed to update profile");
        }
    };

    // 4. Handle Delete User
    const handleDelete = async (id: string, role: string) => {
        if (id === user?.id) return toast.error("You cannot delete yourself!");

        const reason = prompt(`Deleting ${role}. Please enter a reason (this will be emailed to them):`);
        if (!reason) return;

        try {
            await deleteUser(id, reason);
            setUsers(prev => prev.filter(u => u._id !== id));
            toast.success("User removed and email sent.");
        } catch {
            toast.error("Failed to delete user");
        }
    };

    // 5. Handle Create Admin
    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newAdmin.fullName || !newAdmin.email || !newAdmin.password) {
            return toast.error("All fields are required");
        }

        try {
            setCreatingAdmin(true);
            const res = await createAdmin(newAdmin.fullName, newAdmin.email, newAdmin.password);

            if (res.success) {
                toast.success("New Admin created successfully!");
                // Add new admin to the list locally so we see it immediately
                setUsers(prev => [...prev, { ...res.user, _id: res.user._id || Math.random().toString() }]);
                setShowAddAdminModal(false);
                setNewAdmin({ fullName: "", email: "", password: "" });
            }
        } catch {
            toast.error("Failed to create admin");
        } finally {
            setCreatingAdmin(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (loading || userLoading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading Admin Panel...</div>;

    return (
        <div className="min-h-screen bg-slate-950 p-6 text-slate-200 relative">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex justify-between items-end border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Admin Dashboard</h1>
                        <p className="text-slate-400 mt-1">Manage your profile and platform users.</p>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                        <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: My Profile */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-6">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-400" /> My Profile
                            </h2>

                            <form onSubmit={handleUpdateProfile} className="space-y-4">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="relative group cursor-pointer w-24 h-24">
                                        <img
                                            src={user?.profileImage || "https://via.placeholder.com/150"}
                                            alt="Profile"
                                            className="w-full h-full rounded-full border-4 border-slate-800 object-cover group-hover:border-blue-500 transition-colors"
                                        />
                                        <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            {uploading ? <Loader2 className="w-8 h-8 text-white animate-spin" /> : <Camera className="w-8 h-8 text-white" />}
                                            <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                                        </label>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Click image to change</p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase">Display Name</label>
                                    <input
                                        type="text"
                                        value={user?.fullName || ""}
                                        readOnly
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                                        <input
                                            type="email"
                                            value={user?.email || ""}
                                            readOnly
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                                    Save Changes
                                </button>
                            </form>
                            <div className="mt-6 pt-6 border-t border-slate-800">
                                <button
                                    onClick={() => navigate("/forgot-password")}
                                    className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                                >
                                    <Lock className="w-4 h-4" /> Reset / Forgot Password
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: User/Admin Management */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl min-h-[500px]">

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-emerald-400" /> User Management
                                </h2>

                                {/* Search Bar */}
                                <div className="relative w-full sm:w-64">
                                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Tabs & Add Button */}
                            <div className="flex justify-between items-center border-b border-slate-800 mb-6">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setActiveTab("USER")}
                                        className={`pb-3 px-1 text-sm font-medium transition-colors relative ${activeTab === "USER" ? "text-emerald-400" : "text-slate-400 hover:text-slate-200"}`}
                                    >
                                        Students
                                        {activeTab === "USER" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 rounded-t-full"></div>}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("ADMIN")}
                                        className={`pb-3 px-1 text-sm font-medium transition-colors relative ${activeTab === "ADMIN" ? "text-blue-400" : "text-slate-400 hover:text-slate-200"}`}
                                    >
                                        Administrators
                                        {activeTab === "ADMIN" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-full"></div>}
                                    </button>
                                </div>

                                {/* Add Admin Button (Only visible on Admin tab) */}
                                {activeTab === "ADMIN" && (
                                    <button
                                        onClick={() => setShowAddAdminModal(true)}
                                        className="mb-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                                    >
                                        <UserPlus className="w-3 h-3" /> Add Admin
                                    </button>
                                )}
                            </div>

                            {/* List */}
                            <div className="space-y-3">
                                {users
                                    .filter(u => u.role === activeTab)
                                    .filter(u => u.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((user) => (
                                        <div key={user._id} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group">
                                            <div className="flex items-center gap-4">
                                                {user.profileImage ? (
                                                    <img src={user.profileImage} alt={user.fullName} className="w-10 h-10 rounded-full object-cover" />
                                                ) : (
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${activeTab === "USER" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"}`}>
                                                        {user.fullName.charAt(0)}
                                                    </div>
                                                )}

                                                <div>
                                                    <h4 className="text-white font-medium">{user.fullName}</h4>
                                                    <p className="text-slate-500 text-xs">{user.email}</p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleDelete(user._id, user.role)}
                                                className="p-2 text-slate-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                title="Remove User"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}

                                {users.filter(u => u.role === activeTab).length === 0 && (
                                    <div className="text-center py-10 text-slate-500">
                                        No {activeTab.toLowerCase()}s found.
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>

                {/* ADD ADMIN MODAL */}
                {showAddAdminModal && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
                            <button
                                onClick={() => setShowAddAdminModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-400" /> Create New Admin
                            </h2>

                            <form onSubmit={handleCreateAdmin} className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none mt-1 transition-colors"
                                        value={newAdmin.fullName}
                                        onChange={e => setNewAdmin({...newAdmin, fullName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none mt-1 transition-colors"
                                        value={newAdmin.email}
                                        onChange={e => setNewAdmin({...newAdmin, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase">Password</label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none mt-1 transition-colors"
                                        value={newAdmin.password}
                                        onChange={e => setNewAdmin({...newAdmin, password: e.target.value})}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={creatingAdmin}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {creatingAdmin ? <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin"/> Creating...</span> : "Create Admin Account"}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}