// YellowLinks.tsx
import React from "react";

interface YellowLinksProps {
    text:          string;
    link?:         string;
    className?:    string;
    image?:        React.ReactNode;
}

const YellowLinks: React.FC<YellowLinksProps> = ({ text, link = "#", className, image }) => (
    <a href={link} style={{ color: "#CC9933", display: "flex", alignItems: "center", gap: "5px" }} className={className}>
        {image}{text}
    </a>
);

export default YellowLinks;
