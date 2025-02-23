import React from "react";
import YellowButton from "./YellowButton"; 

interface ContactDetailProps {
    label:      string;
    content:    React.ReactNode;
}

const contactsData = {
    address: "7861 El Dorado St.,Brooklyn, NY 11206",
    phones: [{ number: "1-360-928-7026", href: "tel:1-360-928-7026" },
    { number: "1-374-651-1537", href: "tel:1-374-651-1537" }],

    emails: [{ email: "lg.oona@mail.com", label: "Booking" },
    { email: "hotels.ln@mail.com", label: "Partnership" }],
    schedule: "Monday - Friday: 09:00AM - 9:00PM",
};

const ContactDetail: React.FC<ContactDetailProps> = ({ label, content }) => (
    <div className="flex">
        <span className="bold" style={{ fontSize: "20px", marginRight: "60px" }}>{label}</span>
        <span style={{ flexBasis: "100%", lineHeight: "150%" }}>{content}</span>
    </div>
);

const ContactsInformation: React.FC = () => (
    <div className="contacts-info flex">
        <ContactDetail label="Adress" content={contactsData.address} />
        <div className="border-bottom"></div>

        <ContactDetail
            label="Phone"
            content={contactsData.phones.map((phone, idx) => (
                <div key={idx} style={{ marginBottom: "2%" }}>
                    <a href={phone.href} style={{ color: "#CC9933", lineHeight: "150%" }}>
                        {phone.number}
                    </a>
                </div>
            ))}
        />
        <div className="border-bottom"></div>

        <ContactDetail
            label="Email"
            content={contactsData.emails.map((email, idx) => (
                <div key={idx} className="flex contacts-email">
                    <a href={`mailto:${email.email}`} style={{ color: "#CC9933" }}>
                        {email.email}
                    </a>
                    <span style={{ color: "#999999" }}>{email.label}</span>
                </div>
            ))}
        />
        <div className="border-bottom"></div>

        <ContactDetail label="Schedule" content={contactsData.schedule} />
        <div className="border-bottom"></div>

        <YellowButton className="way-button" text="Route" url=""/>
    </div>
);

const ContactsBoard: React.FC = () => {
    return (
        <section id="contacts-board">
            <h2 className="wanna-tour-h2" style={{ marginLeft: "40 px", }}>Contacts</h2>
            <div className="contacts-block flex">
                <ContactsInformation />
                <div className="reception-image"></div>
            </div>
        </section>
    );
}

export default ContactsBoard;