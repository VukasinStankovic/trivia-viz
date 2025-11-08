import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    customClass?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = ({ children, customClass = "", title }) => {
    return (
        <div className={`flex flex-col ${customClass} bg-gray-100 p-5 rounded-2xl`}>
            {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
            {children}
        </div>
    );
};
