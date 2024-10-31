import React from "react";
import BenefitsItem from "./BenefitsItem";


const BenefitsComponent: React.FC = () => {
    return (
        <section id="dnf">
            <div className="container">
                <h2 className="special_h2">Benefits</h2>
                <ul className="list-reset benefits-list flex">
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector1"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector2"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector3"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector4"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector5"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector6"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector7"
                    />
                    <BenefitsItem
                        text="Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa."
                        itemClassName="benefits-item-vector8"
                    />
                </ul>
            </div>
        </section>
    );
}

export default BenefitsComponent;