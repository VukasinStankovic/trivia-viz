import type { CategoryGlobalCount } from "../types/categoryCounts";
import api from "./api";

export const getGlobalQuestionCounts = async (): Promise<CategoryGlobalCount> => {
    const res = await api.get("/api_count_global.php");
    return res.data.categories;
};
