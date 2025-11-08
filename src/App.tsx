import { Header } from "./components/Header/Header";
import { Sidepanel } from "./components/Sidepanel/Sidepanel";
import { Questions } from "./components/Questions/Questions";

import QuestionsByCategoryBarChart from "./components/Charts/QuestionsByCategoryBarChart";
import QuestionsByDifficultyPieChart from "./components/Charts/QuestionsByDifficultyPieChart";
import { Card } from "./components/Card/Card";
import "./App.css";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto h-screen">
            <Header />
            <div className="grid grid-rows-4 grid-cols-4 gap-4 py-5 h-11/12">
                <Card children={<QuestionsByCategoryBarChart />} customClass="col-span-4 row-span-4" />
            </div>
            <div className="grid grid-rows-4 grid-cols-4 gap-4 pb-5 h-11/12">
                <Card children={<Sidepanel />} customClass="col-span-1 row-span-4" title="Categories" />
                <Card children={<QuestionsByDifficultyPieChart />} customClass="col-span-3 row-span-4" />
            </div>
            <Card children={<Questions />} customClass="col-span-3 row-span-2 " />
        </div>
    );
}

export default App;
