import React from 'react';

interface NavItem {
    text: string;
    href: string;
}
interface NavigationProps {
    items: NavItem[];  
    className: string;
    onClick?: (href: string) => void; 
}
const Navigation: React.FC<NavigationProps> = ({ items, className, onClick }) => {
    return (
        <nav className={className}>
            <ul className="navbar-list list-reset flex">
                {items.map((item, index) => (
                    <li key={index} className="list-item">
                        <a href={item.href} onClick={() => onClick?.(item.href)}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
