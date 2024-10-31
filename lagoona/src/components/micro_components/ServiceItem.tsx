import React from "react";

interface ServiceItemProps {
    title:              string;
    description:        string;
    link?:              string;
    articleClassName? : string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, link = "#", articleClassName }) => {
    return (
        <li className={`article-item ${articleClassName}`}>
            <h3 className="services-h3">
                <a href={link} className="more-information">
                    {title}
                    <svg className="svg-arrow" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" stroke="#CC9933" strokeWidth="2" />
                    </svg>
                </a>
            </h3>
            <p className="paragraph paragraph-about">{description}</p>
        </li>
    )
}

export default ServiceItem;