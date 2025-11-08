export type QuestionCount = {
    easy: number;
    medium: number;
    hard: number;
};

export type Question = {
    question: string;
    category?: string;
    type?: string;
    difficulty?: string;
    correct_answer?: string;
    incorrect_answers?: string[];
};
