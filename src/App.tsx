import { Header } from "./components/Header";
import { Sidepanel } from "./components/Sidepanel";
import { Questions } from "./components/Questions";

import SimpleBarChart from "./components/SimpleBarChart";
import PieChartWithCustomizedLabel from "./components/PieChartWithCustomizedLabel";
import { Card } from "./components/Card";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto border-amber-600 border-2">
            <Header />
            <div className="grid grid-cols-6 gap-4">
                <Card children={<SimpleBarChart />} />
                <Card children={<PieChartWithCustomizedLabel />} />
                <Sidepanel />
                <Questions />
            </div>
        </div>
    );
}

export default App;
