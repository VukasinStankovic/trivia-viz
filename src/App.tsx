import Header from "./components/Header/Header";
import Sidepanel from "./components/Sidepanel/Sidepanel";
import QuestionsByCategoryBarChart from "./components/Charts/QuestionsByCategoryBarChart";
import QuestionsByDifficultyPieChart from "./components/Charts/QuestionsByDifficultyPieChart";
import Card from "./components/Card/Card";
import "./App.css";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto h-screen">
            <Header />
            <div className="grid grid-rows-4 grid-cols-4 gap-4 py-5 h-11/12">
                <Card
                    children={<QuestionsByCategoryBarChart />}
                    customClass="col-span-4 row-span-4"
                    title="Number of Verified Questions by Category"
                    titleType="chart"
                />
            </div>
            <div className="grid grid-rows-4 grid-cols-4 gap-4 pb-5 h-11/12">
                <CategoryProvider>
                    <Card children={<Sidepanel />} customClass="col-span-1 row-span-4" title="Categories" />
                    <QuestionsByDifficultyPieChart />
                </CategoryProvider>
            </div>
        </div>
    );
}

export default App;
