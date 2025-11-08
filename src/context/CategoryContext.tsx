import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Category } from "../types/category";

interface CategoryContextType {
    selectedCategory: Category | null;
    setSelectedCategory: (cat: Category | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    return <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>{children}</CategoryContext.Provider>;
};

export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategory must be used within a CategoryProvider");
    }
    return context;
};
