import { motion } from "framer-motion";
import { useState } from "react";
import Social from "./Social";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsup from "../../assets/whatsup.svg";
import YellowLinks from "./YellowLinks";

function Line({ direction, activeDirection }: { direction: "x" | "y", activeDirection: "x" | "y" | null }) {
    return (
        <motion.div
            initial={false}
            animate={{ opacity: activeDirection === direction ? 1 : 0.3 }}
            transition={{ duration: 0.1 }}
            style={{ ...line, rotate: direction === "y" ? 90 : 0 }}
        />
    );
}

function Drag() {
    const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(null);

    return (
        <>
            <Line direction="y" activeDirection={activeDirection} />
            <motion.div
                drag
                dragDirectionLock
                onDirectionLock={(direction) => setActiveDirection(direction)}
                onDragEnd={() => setActiveDirection(null)}
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
                dragElastic={0.2}
                whileDrag={{ cursor: "grabbing" }}
                className="sun-image"
            />
        </>
    );
}

const Footer = () => {
    return (
        <div className="footer-block flex">
            <div className="footer-left flex" style={{
                flexDirection: "column",
                justifyContent: "space-between",
                width: "302px",
                marginRight: "125px"
            }}>
                <span className="white-text" style={{ lineHeight: "190%" }}>
                    © 2012-2024 Laguna Hotels United Network Management Company
                </span>
                <span className="white-text" style={{ lineHeight: "190%" }}>
                    The information provided on the website is for reference only and does not constitute a public offer
                </span>
                <YellowLinks text="Terms of Service" link="/terms" className="yellow-link" />
            </div>

            <div className="footer-center flex" style={{ width: "708px", justifyContent: "space-between" }}>
                <div className="flex" style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <span className="white-text" style={{ marginBottom: "15px" }}>
                        566 Fordham Drive, Bronx, NY 10461
                    </span>

                    <div className="contacts-phone flex" style={{ flexDirection: "column", gap: "8px" }}>
                        <YellowLinks text="+1-628-575-4429" link="tel:+1-628-575-4429" className="yellow-link" />
                        <YellowLinks text="+1-478-895-3314" link="tel:+1-478-895-3314" className="yellow-link" />
                    </div>

                    <div className="contacts-email flex" style={{ flexDirection: "column", gap: "8px" }}>
                        <YellowLinks text="lg.oona@mail.com" link="mailto:lg.oona@mail.com" className="yellow-link" />
                        <YellowLinks text="hotels.ln@mail.com" link="mailto:hotels.ln@mail.com" className="yellow-link" />
                    </div>
                </div>

                <div className="block-with-image sun">
                    <Drag/>
                </div>

                <div className="flex social">
                    <Social iconUrl={facebook} />
                    <Social iconUrl={instagram} />
                    <Social iconUrl={whatsup} />
                </div>
            </div>
        </div>
    );
};

const line: React.CSSProperties = {
    height: 187,
};

export default Footer;
