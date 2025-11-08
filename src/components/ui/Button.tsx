interface ButtonProps {
    text: string;
    onClick: () => void;
    bgColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    className?: string;
}

const Button = ({ text, onClick, bgColor = "#223344", textColor = "#fff", hoverBgColor = "#445566", className = "" }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`mb-4 px-3 py-1 rounded ${className}`}
            style={{ backgroundColor: bgColor, color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
        >
            {text}
        </button>
    );
};

export default Button;
