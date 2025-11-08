import { useState, useEffect } from "react";
import axios from "axios";
import type { Category } from "../../types/category";
import Spinner from "../ui/spinner";
import { useCategory } from "../../context/CategoryContext";

const Sidepanel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setSelectedCategory } = useCategory();

    useEffect(() => {
        const getCategories = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("https://opentdb.com/api_category.php");
                const sorted = res.data.trivia_categories.sort((a: Category, b: Category) => a.name.localeCompare(b.name, "en"));
                setCategories(sorted);
            } catch (err) {
                console.error("Failed to fetch categories", err);
            } finally {
                setIsLoading(false);
            }
        };

        getCategories();
    }, []);

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
