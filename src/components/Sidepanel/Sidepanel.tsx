import Spinner from "../ui/spinner";
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
        <div className="overflow-y-auto p-4 rounded-md">
            <ul className="space-y-2">
                {categories.map((cat) => (
                    <li key={cat.id} className="cursor-pointer hover:text-[#223344] hover:underline" onClick={() => setSelectedCategory(cat)}>
                        {cat.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidepanel;
