import API from "./api";

export const saveProgress = async (course: string, part: number) => {
    const res = await API.post("/course/save", { course, part });
    return res.data;
};
