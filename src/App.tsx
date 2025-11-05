import { Header } from "./components/Header";
import { Sidepanel } from "./components/Sidepanel";
import { Questions } from "./components/Questions";
import { Chart } from "./components/Chart";

function App() {
    return (
        <div className="w-full max-w-7xl mx-auto border-amber-600 border-2">
            <Header />
            <div className="grid grid-cols-6">
                <Chart />
                <Chart />
                <Sidepanel />
                <Questions />
            </div>
        </div>
    );
}

export default App;
