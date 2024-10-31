import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceComponent: React.FC = () => {
    return (
        <section id="srv">
            <div className="container">
                <h2 className="special_h2">Services</h2>
                <ul className="list-reset article-list flex">
                    <ServiceItem
                        title="Exclusive service"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        articleClassName="article-item-1"
                    />
                    <ServiceItem
                        title="Exclusive service"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        articleClassName="article-item-2"
                    />
                    <ServiceItem
                        title="Exclusive service"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        articleClassName="article-item-3"
                    />
                    <ServiceItem
                        title="Exclusive service"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        articleClassName="article-item-4"
                    />
                </ul>
            </div>
        </section>
    );
}

export default ServiceComponent;