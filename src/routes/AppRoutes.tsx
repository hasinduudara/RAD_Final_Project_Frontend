import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import VerifyOTPPage from "../pages/VerifyOTPPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProtectedRoute from "../routes/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import ChatPage from "../pages/ChatPage.tsx";
import HtmlCourse from "../components/html/HtmlCourse.tsx";
import CssCourse from "../components/css/CssCourse.tsx";
import JsCourse from "../components/js/JsCourse.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-otp" element={<VerifyOTPPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Protected routes */}
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/ai"
                element={
                    <ProtectedRoute>
                        <ChatPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/html-course"
                element={
                    <ProtectedRoute>
                        <HtmlCourse />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/css-courses"
                element={
                    <ProtectedRoute>
                        <CssCourse />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/javascript-courses"
                element={
                    <ProtectedRoute>
                        <JsCourse />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}
