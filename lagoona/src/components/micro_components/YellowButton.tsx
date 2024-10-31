import React from "react";

interface ButtonProps {
    text:       string;
    url?:       string;
    className:  string;
}

const YellowButton: React.FC<ButtonProps> = ({text, url, className}) => {
    
    return url?(
        <a href={url}>
            <button className={className}>{text}</button>
        </a>
    ) : (
        <button style={{color: "#CC9933"}} className={className}></button>
    );
} 









export default YellowButton;