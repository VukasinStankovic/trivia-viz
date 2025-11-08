import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getColors } from "../../lib/utils";
import { ChartType } from "../../types/chart";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Category } from "../../types/category";
import type { QuestionCount } from "../../types/question";
import Spinner from "../ui/spinner";

const QuestionsByDifficultyPieChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    const [totals, setTotals] = useState<QuestionCount>({
        easy: 0,
        medium: 0,
        hard: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const catRes = await axios.get("https://opentdb.com/api_category.php");
                const categories: Category[] = catRes.data.trivia_categories;

                const promises = categories.map((cat) => axios.get(`https://opentdb.com/api_count.php?category=${cat.id}`));

                const results = await Promise.all(promises);

                const totals: QuestionCount = results.reduce(
                    (acc, res) => {
                        const counts = res.data.category_question_count;
                        acc.easy += counts.total_easy_question_count || 0;
                        acc.medium += counts.total_medium_question_count || 0;
                        acc.hard += counts.total_hard_question_count || 0;
                        return acc;
                    },
                    { easy: 0, medium: 0, hard: 0 }
                );

                setTotals(totals);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const data = [
        { name: "Easy", value: totals.easy },
        { name: "Medium", value: totals.medium },
        { name: "Hard", value: totals.hard },
    ];

    const isLoading = Object.values(totals).every((v) => v === 0);
    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Spinner />
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            {!data || data.length === 0 ? (
                <Spinner />
            ) : (
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, value }) => `${name}: ${value}`}
                        labelLine={false}
                        fill="#8884d8"
                        isAnimationActive={isAnimationActive}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.name}`} fill={getColors(index, ChartType.PIE)} />
                        ))}
                    </Pie>
                </PieChart>
            )}
        </ResponsiveContainer>
    );
};

export default QuestionsByDifficultyPieChart;
