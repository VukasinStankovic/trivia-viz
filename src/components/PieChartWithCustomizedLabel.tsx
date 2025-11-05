import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { generateColors } from "../lib/utils";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];

const COLORS = generateColors(data.length);

const PieChartWithCustomizedLabel = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} labelLine={false} fill="#8884d8" dataKey="value" isAnimationActive={isAnimationActive}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartWithCustomizedLabel;
