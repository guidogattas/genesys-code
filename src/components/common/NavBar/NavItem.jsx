import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ to, label, className = "hover:bg-buttonMain hover:text", onClick, children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <li className="relative w-full group" ref={dropdownRef}>
            <div
                className={`py-4 px-4 text-center text-left transition duration-300 rounded cursor-pointer md:w-auto ${className}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen ? "true" : "false"} /* Para accesibilidad */
            >
                {to ? (
                    <Link
                        to={to}
                        onClick={() => {
                            setIsDropdownOpen(false);
                            if (onClick) onClick();
                        }}
                        className="flex items-center w-full h-full text-sm focus:outline-none sm:text-base md:text-lg" // Responsivo para el tamaño de la fuente
                    >
                        {label}
                    </Link>
                ) : (
                    <div className="flex items-center justify-start gap-4">
                        {label}
                        {children && <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                )}
            </div>

            {children && (
                <ul
                    className={`flex flex-col gap-2 py-4 mt-2 ${isDropdownOpen ? 'block' : 'hidden'} w-full bg-dropDownBG md:absolute md:w-auto shadow-lg rounded-lg`}
                    role="menu"
                    aria-labelledby={label} /* Para accesibilidad */
                >
                    {children}
                </ul>
            )}
        </li>
    );
};

export default NavItem;
