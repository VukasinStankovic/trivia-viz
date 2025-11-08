import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ChartType } from "../types/chart";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getColors(index: number, type: ChartType): string {
    const barColors = ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"];

    const pieColors = ["#003f5c", "#ffa600", "#d45087"];
    const colors = type === ChartType.PIE ? pieColors : barColors;
    return colors[index % colors.length];
}
