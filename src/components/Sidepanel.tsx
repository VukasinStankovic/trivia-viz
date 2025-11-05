export const Sidepanel = () => {
    const categories = ["Technology", "Health", "Finance", "Travel", "Food"];

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index} className="cursor-pointer hover:text-blue-500">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};
