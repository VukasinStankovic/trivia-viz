import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Spinner from "../ui/Spinner";
import { getColors } from "../../lib/utils";
import { ChartType } from "../../types/chart";
import { useCategory } from "../../context/CategoryContext";
import Card from "../Card/Card";
import { useQuestionCounts } from "../../hooks/useQuestionCounts";

const QuestionsByDifficultyPieChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    const { selectedCategory } = useCategory();
    const { totals, isLoading } = useQuestionCounts(selectedCategory?.id);

    const data = [
        { name: "Easy", value: totals.easy },
        { name: "Medium", value: totals.medium },
        { name: "Hard", value: totals.hard },
    ];

    return (
        <Card customClass="col-span-3 row-span-4" titleType="chart">
            <h2 className="text-lg font-semibold">
                Number of Questions by Difficulty for <span className="text-[#FFA601]">{selectedCategory ? selectedCategory.name : "All"}</span>
            </h2>
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
