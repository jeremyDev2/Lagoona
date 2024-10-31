import Social from "./Social";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsup from "../../assets/whatsup.svg";
import YellowLinks from "./YellowLinks";

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

                <div className="block-with-image">
                    <div className="sun-image"></div>
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

export default Footer;
