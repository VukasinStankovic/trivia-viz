import { useState, useEffect } from "react";
import axios from "axios";

type Category = {
    id: number;
    name: string;
};

export const Sidepanel = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        try {
            const response = await axios.get("https://opentdb.com/api_category.php");

            const sortedCategories = [...response.data.trivia_categories].sort((a, b) => a.name.localeCompare(b.name, "en"));

            setCategories(sortedCategories);
        } catch (error) {
            console.error("Failed to fetch categories", error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div className="overflow-y-auto p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories &&
                    categories.map((category) => (
                        <li key={category.id} className="cursor-pointer hover:text-blue-500">
                            {category.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
