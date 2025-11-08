import type { Category } from "../types/category";
import api from "./api";

export const getCategories = async (): Promise<Category[]> => {
    const res = await api.get("/api_category.php");
    return res.data.trivia_categories;
};

export const getSortedCategories = async (): Promise<Category[]> => {
    const categories = await getCategories();
    return categories.sort((a, b) => a.name.localeCompare(b.name, "en"));
};
