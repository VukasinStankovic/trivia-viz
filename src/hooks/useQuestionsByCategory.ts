import { useState, useEffect } from "react";
import { getGlobalQuestionCounts } from "../services/globalCounts";
import { getCategories } from "../services/categories";

export type CategoryChartData = { name: string; total: number }[];

export const useQuestionsByCategory = () => {
    const [data, setData] = useState<CategoryChartData>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const categories = await getCategories();
                const counts = await getGlobalQuestionCounts();

                const chartData = categories.map((cat: { id: number; name: string }) => ({
                    name: cat.name,
                    total: counts[cat.id]?.total_num_of_verified_questions || 0,
                }));

                setData(chartData);
            } catch (error) {
                console.error("Failed to fetch questions by category", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading };
};
