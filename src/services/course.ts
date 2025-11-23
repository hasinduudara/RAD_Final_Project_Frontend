import API from "./api";

export const saveProgress = async (course: string, part: number) => {
    const res = await API.post("/course/save", { course, part });
    return res.data;
};

// GET COURSE PROGRESS FOR LOGGED-IN USER
export const getCourseProgress = async () => {
    const res = await API.get("/course/progress");
    return res.data;
};