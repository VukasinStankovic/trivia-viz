import { useState, useEffect } from "react";
import type { Category } from "../types/category";
import { getSortedCategories } from "../services/categories";

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const sorted = await getSortedCategories();
                setCategories(sorted);
            } catch (err) {
                console.error("Failed to fetch categories", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, isLoading };
};
