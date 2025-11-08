import { useState, useEffect } from "react";
import axios from "axios";
import type { Category } from "../../types/category";
import Spinner from "../ui/spinner";

export const Sidepanel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCategories = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://opentdb.com/api_category.php");

            const sortedCategories = [...response.data.trivia_categories].sort((a, b) => a.name.localeCompare(b.name, "en"));

            setCategories(sortedCategories);
        } catch (error) {
            console.error("Failed to fetch categories", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
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
                {categories &&
                    categories.map((category) => (
                        <li key={category.id} className="cursor-pointer hover:text-[#223344] hover:underline">
                            {category.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
