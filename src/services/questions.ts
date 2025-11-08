import api from "./api";
import type { QuestionCount } from "../types/question";

export const getCategoryQuestionCount = async (categoryId: number): Promise<QuestionCount> => {
    const counts = (await api.get(`/api_count.php?category=${categoryId}`)).data.category_question_count;
    return {
        easy: counts.total_easy_question_count || 0,
        medium: counts.total_medium_question_count || 0,
        hard: counts.total_hard_question_count || 0,
    };
};
