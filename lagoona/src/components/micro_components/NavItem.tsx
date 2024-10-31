import React from 'react';

interface NavItemProps {
    text:   string;
    url:    string;
}

const NavItem: React.FC<NavItemProps> = ({ text, url }) => {
    return (
        <li className="list-item">
            <a href={url}>{text}</a>
        </li>
    );
};

export default NavItem;
