import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    customClass: string;
}

export const Card: React.FC<CardProps> = ({ children, customClass }) => {
    return <div className={`flex flex-col ${customClass} bg-gray-100 p-5 rounded-2xl`}>{children}</div>;
};
