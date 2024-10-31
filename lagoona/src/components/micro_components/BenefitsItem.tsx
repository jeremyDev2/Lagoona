import React from "react";


interface AdvantagesItemProps {
    text:           string;
    itemClassName:  string;
}

const BenefitsItem: React.FC<AdvantagesItemProps> = ({ text, itemClassName }) => {
    return (
        <li className={`benefits-item ${itemClassName}`}>
            <p>{text}</p>
        </li>
    );
}

export default BenefitsItem