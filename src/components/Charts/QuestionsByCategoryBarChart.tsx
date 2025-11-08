import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { getColors } from "../../lib/utils";
import { ChartType } from "../../types/chart";
import Spinner from "../ui/Spinner";
import { useQuestionsByCategory } from "../../hooks/useQuestionsByCategory";

const QuestionsByCategoryBarChart = () => {
    const { data, isLoading } = useQuestionsByCategory();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Spinner />
            </div>
        );
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                <XAxis type="number" />
                <YAxis
                    type="category"
                    dataKey="name"
                    width={200}
                    tick={({ x, y, payload }) => (
                        <text x={x} y={y} textAnchor="end" dominantBaseline="middle" style={{ whiteSpace: "nowrap", fontSize: 12 }}>
                            {payload.value}
                        </text>
                    )}
                    interval={0}
                />
                <Tooltip />
                <Bar dataKey="total" fill="#FFCC00">
                    <LabelList dataKey="total" position="right" style={{ fontSize: 12, fill: "#333" }} />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getColors(index, ChartType.BAR)} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default QuestionsByCategoryBarChart;
