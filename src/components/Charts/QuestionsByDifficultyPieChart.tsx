import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Spinner from "../ui/spinner";
import { getColors } from "../../lib/utils";
import { ChartType } from "../../types/chart";
import type { Category } from "../../types/category";
import type { QuestionCount } from "../../types/question";
import { useCategory } from "../../context/CategoryContext";
import Card from "../Card/Card";

const QuestionsByDifficultyPieChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    const { selectedCategory } = useCategory();
    const chartTitle = selectedCategory ? `Number of Questions by Difficulty for ${selectedCategory.name}` : "Number of All Questions by Difficulty";
    const [totals, setTotals] = useState<QuestionCount>({ easy: 0, medium: 0, hard: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllTotals = async () => {
            try {
                setIsLoading(true);
                const catRes = await axios.get("https://opentdb.com/api_category.php");
                const categories: Category[] = catRes.data.trivia_categories;

                const promises = categories.map((cat) => axios.get(`https://opentdb.com/api_count.php?category=${cat.id}`));

                const results = await Promise.all(promises);

                const allTotals: QuestionCount = results.reduce(
                    (acc, res) => {
                        const counts = res.data.category_question_count;
                        acc.easy += counts.total_easy_question_count || 0;
                        acc.medium += counts.total_medium_question_count || 0;
                        acc.hard += counts.total_hard_question_count || 0;
                        return acc;
                    },
                    { easy: 0, medium: 0, hard: 0 }
                );

                setTotals(allTotals);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllTotals();
    }, []);

    useEffect(() => {
        if (!selectedCategory) return;

        const fetchCategoryTotals = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`https://opentdb.com/api_count.php?category=${selectedCategory.id}`);
                const counts = res.data.category_question_count;

                setTotals({
                    easy: counts.total_easy_question_count || 0,
                    medium: counts.total_medium_question_count || 0,
                    hard: counts.total_hard_question_count || 0,
                });
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategoryTotals();
    }, [selectedCategory]);

    const data = [
        { name: "Easy", value: totals.easy },
        { name: "Medium", value: totals.medium },
        { name: "Hard", value: totals.hard },
    ];

    return (
        <Card customClass="col-span-3 row-span-4" title={chartTitle} titleType="chart">
            {isLoading ? (
                <div className="flex items-center justify-center w-full h-96">
                    <Spinner />
                </div>
            ) : (
                <ResponsiveContainer width="100%" height="100%">
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
                                <Cell key={entry.name} fill={getColors(index, ChartType.PIE)} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )}
        </Card>
    );
};

export default QuestionsByDifficultyPieChart;
