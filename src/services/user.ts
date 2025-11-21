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
