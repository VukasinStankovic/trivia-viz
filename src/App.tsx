import { Header } from "./components/Header";
import { Sidepanel } from "./components/Sidepanel";
import { Questions } from "./components/Questions";

import SimpleBarChart from "./components/SimpleBarChart";
import PieChartWithCustomizedLabel from "./components/PieChartWithCustomizedLabel";
import { Card } from "./components/Card";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto h-dvh">
            <Header />
            <div className="grid grid-rows-3 grid-cols-4 gap-4 py-10 h-11/12">
                <Card children={<SimpleBarChart />} customClass="col-span-2 row-span-1" />
                <Card children={<PieChartWithCustomizedLabel />} customClass="col-span-2 row-span-1" />
                <Card children={<Sidepanel />} customClass="col-span-1 row-span-2" />
                <Card children={<Questions />} customClass="col-span-3 row-span-2" />
            </div>
        </div>
    );
}

export default App;
