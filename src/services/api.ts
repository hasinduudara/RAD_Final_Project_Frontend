import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { refreshTokens } from "./user.ts";

// Axios instance
const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
});

// Public API endpoints (no token needed)
const PUBLIC_ENDPOINTS = [
    "/user/login",
    "/user/register",
    "/user/request-reset",
    "/user/verify-otp",
    "/user/reset-password",
];

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    const isPublic = PUBLIC_ENDPOINTS.some((url) =>
        config.url?.includes(url)
    );

    if (!isPublic && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // If token expired → refresh
        if (
            error.response?.status === 401 &&
            !PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url)) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = "/login";
                return Promise.reject(new Error("No refresh token available"));
            }

            try {
                const data = await refreshTokens(refreshToken);

                // Save new token
                localStorage.setItem("accessToken", data.accessToken);

                // Add new token to header
                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                }

                return axios(originalRequest);
            } catch (refreshError) {
                // If refresh fails → logout
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
