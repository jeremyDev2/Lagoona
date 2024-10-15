import React from "react";
import logo from "./assets/logo.svg";

const Logo:React.FC = () => {
    return (
        <a href="#" className="logo">
            <img src={logo} alt="logofoto" />
        </a>
    );
};
export default Logo;
