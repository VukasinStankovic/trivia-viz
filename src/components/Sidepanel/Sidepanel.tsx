import Spinner from "../ui/spinner";
import Button from "../ui/Button";
import { useCategory } from "../../context/CategoryContext";
import { useCategories } from "../../hooks/useCategories";

const Sidepanel = () => {
    const { categories, isLoading } = useCategories();
    const { setSelectedCategory } = useCategory();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                    {categories.map((cat) => (
                        <li key={cat.id} className="cursor-pointer hover:text-[#223344] hover:underline" onClick={() => setSelectedCategory(cat)}>
                            {cat.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-4">
                <Button text="Reset Category" onClick={() => setSelectedCategory(null)} />
            </div>
        </div>
    );
};

export default Sidepanel;
