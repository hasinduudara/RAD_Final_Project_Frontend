import { Navigate } from "react-router-dom";
import type {JSX} from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        // Not logged in → redirect to login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
