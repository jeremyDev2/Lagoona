import React from "react";

interface PhoneNumberProps{
    number: string;
}

const PhoneNumber:React.FC<PhoneNumberProps> = ({number}) => {
    return (
        <a href={`tel:${number}`} className="phone-number flex">
            {number}
            </a>
    );
}

export default PhoneNumber;