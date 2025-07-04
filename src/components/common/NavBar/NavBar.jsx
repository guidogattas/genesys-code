import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative w-full md:flex">
            <div className="flex items-center justify-between px-4 py-4 lg:px-10">
                {/* Botón Toggle */}
                <button
                    className="ml-auto text-mainText focus:outline-none md:hidden"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-8 h-8" />
                </button>
            </div>

            {/* Menú compartido */}
            <ul
                className={`flex flex-col md:flex-row gap-4 md:gap-2 text-mainText transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 md:max-h-full md:opacity-100'}
                text-[16px] overflow-hidden md:overflow-visible w-full px-4 md:px-0`}
            >
                <NavItem to="/solutions" label="Solutions" />
                <NavItem to="/what-we-do" label="What We Do" />
                <NavItem to="/who-we-are" label="Who We Are" />
                <NavItem
                    to="/contact-us"
                    label="Contact Us"
                    className="px-4 py-2 rounded-lg text-buttonText bg-buttonMain hover:bg-buttonSecondary"
                />
            </ul>
        </nav>
    );
};

export default NavBar;
