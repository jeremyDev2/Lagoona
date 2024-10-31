import React from "react";

interface SpecialOfferProps {
    title:                string;
    price:                string;
    link?:                string;
    ArticleClassName?:    string;
    TitleClassName?:      string;
}

const SpecialOfferComponent: React.FC<SpecialOfferProps> = ({ title, price, link, ArticleClassName, TitleClassName }) => {
    return (
        <article className={`${ArticleClassName} flex`}>
            <h3 className={TitleClassName}>{title}</h3>
            <span className="special-item-price">{price}</span>
            <a href={link} className="special-item-links">
                Подробнее
                <svg className="svg-arrow" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" stroke="#F0BF5F" strokeWidth="2" />
                </svg>
            </a>
        </article>
    );
}

export default SpecialOfferComponent;