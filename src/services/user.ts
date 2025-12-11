import api from "./api";

// LOGIN
export const login = async (email: string, password: string) => {
    const res = await api.post("/user/login", {
        email,
        password
    });

    return res.data;
};

// REGISTER
export const register = async (fullName: string, email: string, password: string) => {
    const res = await api.post("/user/register", {
        fullName,
        email,
        password
    });

    return res.data;
};

// GET MY DETAILS (Protected Route)
export const getMyDetails = async () => {
    const res = await api.get("/user/welcome");
    return res.data;
};

// REFRESH TOKENS
export const refreshTokens = async (refreshToken: string) => {
    const res = await api.post("/user/refresh", {
        token: refreshToken
    });

    return res.data;
};

// GET USER PROFILE
export const getUser = async () => {
    const res = await api.get("/user/me");
    return res.data;
};

// UPDATE USER
export const updateUser = async (payload: {
    fullName?: string;
    email?: string;
    profileImage?: string | null;
}) => {
    const res = await api.put("/user/update", payload);
    return res.data;
};

// UPLOAD PROFILE IMAGE TO IMGBB
export const uploadProfileImage = async (file: File) => {
    const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
        method: "POST",
        body: formData,
    });

    const data = await res.json();

    if (!data.success) throw new Error("Image upload failed");

    return data.data.url; // Return image URL
};

