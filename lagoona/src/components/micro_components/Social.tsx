import React from "react";

interface SocialIconProps{
    iconUrl:    string;
    link?:       string;
}

const SocialIcon: React.FC<SocialIconProps> = ({iconUrl, link="#"}) => {
    return(
        <a href={link} style={{ backgroundImage: `url(${iconUrl})`, width: '40px', height: '40px', display: 'block' }}></a>
    );
};

export default SocialIcon;