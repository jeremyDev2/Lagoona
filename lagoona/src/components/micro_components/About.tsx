import React from "react";

interface AboutProps {
    title:      string;
    paragraph:  string;
}

const About: React.FC<AboutProps> = ({title, paragraph}) => {
    return (
        <section id="abt">
            <div className="container">
                <h2 className="special_h2">{title}</h2>
                <p className="paragraph services-paragraph">{paragraph}</p>
            </div>
        </section>
    );
}

export default About