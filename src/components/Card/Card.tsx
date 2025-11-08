import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    customClass?: string;
    title?: string;
    titleType?: "sidebar" | "chart";
}

// TODO: change title if user select category
const Card: React.FC<CardProps> = ({ children, customClass = "", title, titleType = "sidebar" }) => {
    return (
        <div className={`flex flex-col ${customClass} bg-gray-100 p-5 rounded-2xl`}>
            {title && <h2 className={`text-lg font-semibold mb-3 ${titleType === "chart" ? "self-center text-center w-full" : ""}`}>{title}</h2>}
            {children}
        </div>
    );
};

export default Card;
