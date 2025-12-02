import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";
import type { RootState } from "../context/userContext";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, loading } = useSelector((state: RootState) => state.user);
    const accessToken = localStorage.getItem("accessToken");

    // Show loading while checking authentication
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (!accessToken || !isAuthenticated) {
        // Not logged in → redirect to login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
