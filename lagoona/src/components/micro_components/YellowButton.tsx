import React from "react";
import { useState } from "react";

interface ButtonProps {
    text: string;
    url?: string;
    className: string;
    type?: "button" | "submit";
    color?: string;
}

const YellowButton: React.FC<ButtonProps> = ({ text, url, className, color, type }) => {

    const [isHovered, setIsHovered] = useState(false);

    const button = (
        <button
            className={className}
            type={type}
            style={{
                backgroundColor: isHovered ? "#f0f0f0" : "#ffffff",
                transition: "background-color 0.3s ease",
                color: color ? undefined : "#CC9933"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );

    return url ? <a href={url}>{button}</a> : button;
};

export default YellowButton;