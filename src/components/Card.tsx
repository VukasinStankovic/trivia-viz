import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="h-100 border-pink-700 border-2 col-span-3">{children}</div>;
};
