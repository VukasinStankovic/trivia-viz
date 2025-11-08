import { Header } from "./components/Header";
import { Sidepanel } from "./components/Sidepanel";
import { Questions } from "./components/Questions";

import QuestionsByCategoryBarChart from "./components/QuestionsByCategoryBarChart";
import PieChartWithCustomizedLabel from "./components/PieChartWithCustomizedLabel";
import { Card } from "./components/Card";
import "./App.css";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto h-screen">
            <Header />
            <div className="grid grid-rows-4 grid-cols-4 gap-4 py-5 h-11/12">
                <Card children={<QuestionsByCategoryBarChart />} customClass="col-span-4 row-span-4" />
            </div>
            <div className="grid grid-rows-4 grid-cols-4 gap-4 pb-5 h-11/12">
                <Card children={<Sidepanel />} customClass="col-span-1 row-span-4" />
                <Card children={<PieChartWithCustomizedLabel />} customClass="col-span-3 row-span-4" />
            </div>
            <Card children={<Questions />} customClass="col-span-3 row-span-2 " />
        </div>
    );
}

export default App;
