import { useState, useEffect } from "react";
import { getCategoryQuestionCount } from "../services/questions";
import { getCategories } from "../services/categories";
import type { QuestionCount } from "../types/question";

export const useQuestionCounts = (categoryId?: number) => {
    const [totals, setTotals] = useState<QuestionCount>({ easy: 0, medium: 0, hard: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTotals = async () => {
            try {
                setIsLoading(true);
                if (categoryId) {
                    setTotals(await getCategoryQuestionCount(categoryId));
                } else {
                    const categories = await getCategories();
                    const results = await Promise.all(categories.map((cat) => getCategoryQuestionCount(cat.id)));

                    const allTotals = results.reduce(
                        (acc, curr) => ({
                            easy: acc.easy + curr.easy,
                            medium: acc.medium + curr.medium,
                            hard: acc.hard + curr.hard,
                        }),
                        { easy: 0, medium: 0, hard: 0 }
                    );

                    setTotals(allTotals);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTotals();
    }, [categoryId]);

    return { totals, isLoading };
};
