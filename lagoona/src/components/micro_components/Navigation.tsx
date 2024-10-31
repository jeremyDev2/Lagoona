import React from 'react';

interface NavigationProps {
    NavclassName?:     string;
    UlclasName?:       string; 
    children:          React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ NavclassName, UlclasName, children }) => {
    return (
        <nav className={`${NavclassName}`}>
            <ul className={`${UlclasName}`}>
                {children}
            </ul>
        </nav>
    );
};

export default Navigation;