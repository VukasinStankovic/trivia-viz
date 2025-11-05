import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("font-bold py-2 px-4 rounded transition-colors focus:outline-none", {
    variants: {
        variant: {
            primary: "bg-blue-500 hover:bg-blue-700 text-white",
            secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
            outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
            danger: "bg-red-500 hover:bg-red-700 text-white",
        },
        size: {
            sm: "text-sm py-1 px-2",
            md: "text-base py-2 px-4",
            lg: "text-lg py-3 px-6",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => {
    return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
};

export default Button;
